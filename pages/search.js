import React, { useEffect, useContext, useState, useRef } from 'react'
import { SessionContext } from '@/lib/getContext'
import { apiHeaders } from '@/lib/getHeaders'
import Card from '@/shared/card-og'
import SearchInput from '@/components/search/input'
import SearchToggle from '@/components/search/toggle'
import SearchSelection from '@/components/search/selection'
import SearchSubheader from '@/components/search/subheader'

const Search = () => {
  const [results, setResults] = useState([])
  const [status, setStatus] = useState('')
  const [searchInput, setInput] = useState('')
  const [searchType, setSearchType] = useContext(SessionContext).type
  const [selected, setSelected] = useContext(SessionContext).choices
  const [action, setAction] = useState(0)
  const [_, setPrev] = useContext(SessionContext).prev
  const prevAction = useRef(0)

  
  useEffect(() => {
    if (searchInput !== '' && action === 1) {
      const getSearchResults = async () => {
        try {
          setStatus('Loading...')
  
          const data = await fetch('/project4/api/search', apiHeaders({method: 'POST', info: {searchInput, searchType}}))
          const dataJson = await data.json()
    
          setResults(dataJson.map(d => ({...d, picked: selected[searchType ? 'show' : 'actor'].some(s => s.id === d.id)})))
          setStatus('Finished')
          prevAction.current = 1
        } catch (err) {
          console.log(err)
        }
      }
      getSearchResults()
    } else if (action === 0) {
      setPrev('/search')
      const getTrending = async () => {
        try {
          setStatus(`Loading trending ${searchType ? 'shows' : 'voice actors'} ...`)
  
          const data = await fetch('/project4/api/trend', apiHeaders({method: 'POST', info: {searchType}}))
          const dataJson = await data.json()
          setResults(dataJson.data.map(d => ({...d, picked: selected[searchType ? 'show' : 'actor'].some(s => s.id === d.id)})))
          setStatus('Finished')
          prevAction.current = 0
        } catch (err) {
          console.log(err)
        }
      }
      getTrending()
    } else {
      prevAction.current = 2
    }
  }, [action, searchInput, searchType])
 
  return(
    <>
      <div className="flex-col-center mx-auto">
        <SearchInput editInput={(e) => {setInput(e); setAction(a => a !== 1 ? 1 : a)}} />
        <div className="w-full sm:w-3/4 max-phone:flex-col flex phone:items-center justify-between">
          <SearchToggle options={{0: 'Trending', 1: 'Search', 2: 'Match'}} current={action} setOptions={(i) => {setAction(i)}} itemStyle="search"/>
          <SearchToggle options={{0: 'Voice Actors', 1: 'Titles'}} current={searchType ? 1 : 0} setOptions={() => setSearchType(s => !s)}/>
        </div>
        <SearchSubheader availResults={results.length} current={action} searchInput={searchInput} type={searchType} />
        {action !== 2 ?
            (((results.length !== 0 && status === 'Finished' && (prevAction.current === action)) && ((searchInput !== '' && action === 1 ) || action === 0 )) ?
              <>
                <ul className="grid-page mt-1">
                  {results.map((r, num) => {
                    console.log(prevAction.current === action)
                    return(
                      <React.Fragment key={num}> 
                        <li className="flex-col-center"> 
                          <Card info={r} />
                        </li>
                      </React.Fragment>
                    )
                  })}
                </ul>
              </>
            :
              <p className="text-status mt-[6rem]"> 
                {action === 0 || status.includes('Loading') ? status : (searchInput === '' ? `Search for ${searchType ? 'titles': 'artists'}` : <>No {searchType ? 'title' : 'voice actor'} results for  <b className="text-triadic"> &apos;{searchInput}&apos; </b> </>)} 
              </p>
            )
          :
          <SearchSelection searchType={searchType} selected={selected} setSelected={setSelected} />
        }
       </div>
    </>
  )
}

export default Search