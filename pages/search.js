import React, { useEffect, useContext, useState } from 'react'
import { apiHeaders } from '@/lib/getHeaders'
import SearchResult from '@/components/search-result'
import SearchInput from '@/components/search-input'
import { SessionContext } from '@/lib/getContext'
import Toggle from '@/shared/Toggle'
import StatusText from '@/shared/StatusText'
//import testSearch from '@/lib/testSearch'

const Search = () => {
  const [results, setResults] = useState([])
  const [status, setStatus] = useState('')
  const [searchInput, setInput] = useState('')
  const [searchType, setSearchType] = useContext(SessionContext).type
  const [selected, setSelected] = useContext(SessionContext).choices
  const [_, setPrev] = useContext(SessionContext).prev

  
  useEffect(() => {
    setPrev('/search')

    const getTrending = async () => {
      try {
        setStatus('Loading...')

        const data = await fetch('/project4/api/trend', apiHeaders({method: 'POST', info: {searchType}}))
        const dataJson = await data.json()
        setResults(dataJson.data.map(d => ({...d, picked: selected[searchType ? 'show' : 'actor'].some(s => s.id === d.id)})))
        setStatus('Finished')
      } catch (err) {
        console.log(err)
      }
    }

    if (searchInput === '') {
      getTrending()
    }
  }, [searchType])

  useEffect(() => {
    const getSearchResults = async () => {
      try {
        setStatus('Loading...')

        const data = await fetch('/project4/api/search', apiHeaders({method: 'POST', info: {searchInput, searchType}}))
        const dataJson = await data.json()
  
        setResults(dataJson.map(d => ({...d, picked: selected[searchType ? 'show' : 'actor'].some(s => s.id === d.id)})))
        setStatus('Finished')
      } catch (err) {
        console.log(err)
      }
    }
    if (searchInput !== '') {
      getSearchResults()
    }

  }, [searchInput, searchType])

  const text = () => {
    if (status !== 'Finished' && searchInput === '') {
      return `Search for ${searchType ? 'titles': 'artists'}`
    } else {
      return results.length === 0 && status === 'Finished' ? <>No {searchType ? 'title' : 'voice actor'} results for <span className="text-amaranth-300"> <b> "{searchInput}" </b></span></> : status
    }
  }
 
  return(
    <>
      <div className="flex-col-center">
        <SearchInput editInput={setInput} />
        <Toggle searchType={searchType} setSearchType={setSearchType}/>
          {results.length !== 0 && 
            <div className="grids mt-1">
              <div className="flex-col-center"> 
                <p className="w-full whitespace-nowrap max-sm:max-w-[10rem] sm:max-w-[12rem]"> 
                  {searchInput === '' ? <span className="text-amaranth-300"> Trending today </span>: <>Showing results for <span className="text-amaranth-300"> <b> "{searchInput}" </b></span> </>}
                </p>
              </div>
            </div>
          }
        {(results.length !== 0 && status === 'Finished') ?
          <div className="grid-page mt-1">
            {results.map((r, num) => {
              return(
                <React.Fragment key={num}> 
                  <div className="flex-col-center"> 
                    <SearchResult info={r}/>
                  </div>
                </React.Fragment>
              )
            })}
          </div>
        :
          <StatusText status={text()}/>
        }
       </div>
    </>
  )
}

export default Search