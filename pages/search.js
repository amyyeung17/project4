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
        setStatus(`Loading trending ${searchType ? 'voice actors' : 'shows'} ...`)

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
      return results.length === 0 && status === 'Finished' ? <>No {searchType ? 'title' : 'voice actor'} results for <span className="text-amaranth-300"> <b> &apos;{searchInput}&apos; </b></span></> : status
    }
  }
 //className={`flex-col-center ${index % 2 === 0 ? 'max-sm:items-end' : 'max-sm:items-start'}`}
  return(
    <>
      <div className="flex-col-center mx-auto">
        <SearchInput editInput={setInput} />
        <Toggle searchType={searchType} setSearchType={setSearchType}/>
        <div className="grids w-full phone:max-w-[40.5rem] md:max-w-[44.5rem] lg:max-w-[59.5rem]">
          {results.length !== 0 && 
              <p className="whitespace-nowrap max-sm:max-w-[10rem] sm:max-w-[12rem]"> 
                {searchInput === '' ? <span className=""> Trending today </span>: <>Showing results for <span className="text-amaranth-300"> <b> &apos;{searchInput}&apos; </b></span> </>}
              </p>
            }
        </div>
          {(results.length !== 0 && status === 'Finished') ?

            <ul className="grid-page mt-1">
              {results.map((r, num) => {
                return(
                  <React.Fragment key={num}> 
                    <li className="flex-col-center"> 
                      <SearchResult info={r} search/>
                    </li>
                  </React.Fragment>
                )
              })}
            </ul>
          :
            <StatusText status={text()}/>
          }
       </div>
    </>
  )
}

export default Search