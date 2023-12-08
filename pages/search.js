import React, { useEffect, useContext, useState } from 'react'
import { apiHeaders } from '@/lib/getHeaders'
import SearchResult from '@/components/search-result'
import SearchInput from '@/components/search-input'
import { SessionContext } from '@/lib/getContext'
import Toggle from '@/shared/Toggle'
import SearchDropdown from '@/shared/Drawer'
import SearchSelect from '@/components/search-select'
import SearchSubheader from '@/components/search-subheader'
//import testSearch from '@/lib/testSearch'

const Search = () => {
  const [results, setResults] = useState([])
  const [status, setStatus] = useState('')
  const [searchInput, setInput] = useState('')
  const [searchType, setSearchType] = useContext(SessionContext).type
  const [selected, setSelected] = useContext(SessionContext).choices
  const [action, setAction] = useState(0)
  const [_, setPrev] = useContext(SessionContext).prev

  
  useEffect(() => {
    setPrev('/search')

    const getTrending = async () => {
      try {
        setStatus(`Loading trending ${searchType ? 'shows' : 'voice actors'} ...`)

        const data = await fetch('/project4/api/trend', apiHeaders({method: 'POST', info: {searchType}}))
        const dataJson = await data.json()
        setResults(dataJson.data.map(d => ({...d, picked: selected[searchType ? 'show' : 'actor'].some(s => s.id === d.id)})))
        setStatus('Finished')
      } catch (err) {
        console.log(err)
      }
    }

    if (action === 0) {
      getTrending()
    }
  }, [action, searchType])

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
    if (searchInput !== '' && action === 1) {
      getSearchResults()
    }

  }, [action, searchInput, searchType])



  
 //className={`flex-col-center ${index % 2 === 0 ? 'max-sm:items-end' : 'max-sm:items-start'}`}
  return(
    <>
      <div className="flex-col-center mx-auto">
        <SearchInput editInput={setInput} />
        <div className="w-full sm:w-3/4 max-phone:flex-col flex phone:items-center justify-between">
          <Toggle options={{0: 'Trending', 1: 'Search', 2: 'Match'}} current={action} setOptions={(i) => setAction(i)} itemStyle="search"/>
          <Toggle options={{0: 'Voice Actors', 1: 'Titles'}} current={searchType ? 1 : 0} setOptions={() => setSearchType(s => !s)}/>
        </div>
        
        <SearchSubheader availResults={results.length} current={action} searchInput={searchInput} type={searchType} />
        {action !== 2 ?
            (((results.length !== 0 && status === 'Finished') && ((searchInput !== '' && action === 1 ) || action === 0 )) ?
              <>
                <ul className="grid-page mt-1">
                  {results.map((r, num) => {
                    return(
                      <React.Fragment key={num}> 
                        <li className="flex-col-center"> 
                          <SearchResult info={r} />
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
          <SearchSelect searchType={searchType} selected={selected} setSelected={setSelected} />
        }
       </div>
    </>
  )
}

export default Search