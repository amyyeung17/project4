import React, { useEffect, useState } from 'react'
import { apiHeaders } from '@/lib/getHeaders'
import SearchResult from '@/components/search-result'
import SearchInput from '@/components/search-input'

//CHECK! - React.StrictMode? - render twice
//7-1 - removed flex-col-center
const Search = () => {
  const [results, setResults] = useState([])
  const [status, setStatus] = useState('')
  const [input, setInput] = useState('')

  //filter out non-voice actors
  useEffect(() => {
    const getSearchResults = async () => {
      try {
        setStatus('Loading...')
        const data = await fetch('/api/voice', apiHeaders({method: 'POST', info: {searchInput: input}}))
        const dataJson = await data.json()
        
        const voiceActors = dataJson.Page.staff.filter(va => va.characters.nodes.length !== 0)
        //const voiceActors = testSearch.filter(va => va.characters.nodes.length !== 0)
        setResults(voiceActors)
        setStatus('Finished')
      } catch (err) {
        console.log(err)
      }
    }
    if (input !== '') {
      getSearchResults()
    }

  }, [input])

 


  return(
    <>
      <div className="flex-col-center">
      <SearchInput editInput={setInput} />
      {input === '' && status !== 'Finished' ?
        <p className="col-start-2 relative text-status"> Search your favorites to match or check out similar artists </p>
      :
        <>
        {results.length !== 0 ?
          <div className="grid-page mt-2">
          {results.map((staff, num) => {
            return(
              <React.Fragment key={num}>
                <SearchResult info={staff} />
              </React.Fragment>
            )
          })}
          </div>
        :
          <p className="text-status">
            {results.length === 0 && status === 'Finished' ? 'No results' : status }
          </p>
        }
        </>
     
      }
       </div>
    </>
  )
}

export default Search