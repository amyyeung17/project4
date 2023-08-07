import React, { useEffect, useContext, useState } from 'react'
import { apiHeaders } from '@/lib/getHeaders'
import SearchResult from '@/components/search-result'
import SearchInput from '@/components/search-input'
import { SessionContext } from '@/lib/getContext'
import Toggle from '@/shared/Toggle'
import StatusText from '@/shared/StatusText'
import testSearch from '@/lib/testSearch'

const Search = () => {
  const [results, setResults] = useState([])
  const [status, setStatus] = useState('')
  const [searchInput, setInput] = useState('')
  const [searchType, setSearchType] = useContext(SessionContext).type
  const [_, setPrev] = useContext(SessionContext).prev

  
  useEffect(() => {
    setPrev('/search')
  }, [])

  useEffect(() => {
    const getSearchResults = async () => {
      try {
        setStatus('Loading...')

        const data = await fetch('/api/search', apiHeaders({method: 'POST', info: {searchInput, searchType}}))
        const dataJson = await data.json()
        
        setResults(dataJson)
        setStatus('Finished')
      } catch (err) {
        console.log(err)
      }
    }
    if (searchInput !== '') {
      getSearchResults()
    }

  }, [searchInput])

  const text = () => {
    if (status !== 'Finished' && searchInput === '') {
      return `Search ${searchType ? 'for titles and their voice actors': 'to match or check out similar artists'}`
    } else {
      return results.length === 0 && status === 'Finished' ? 'No results' : status
    }
  }
 
  return(
    <>
      <div className="flex-col-center">
        <SearchInput editInput={setInput} />
        <Toggle searchType={searchType} setSearchType={setSearchType}/>
        {(results.length !== 0 && status === 'Finished' && searchInput !== '') ?
          <div className="grid-page mt-2">
            {results.map((r, num) => {
              return(
                <React.Fragment key={num}>
                  <SearchResult info={r}/>
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