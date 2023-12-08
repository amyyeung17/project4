import React, { useContext, useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { apiHeaders }from '@/lib/getHeaders'
import { SessionContext } from '@/lib/getContext'
import { getMatchShows }from '@/lib/getMatch'
import Dropdown from '@/shared/dropdown-og'
import MatchActors from '@/components/match/actors/actors'
import MatchSelection from '@/components/match/selection'
import MatchShows from '@/components/match/shows'

const Match = () => {
  const [selected, _] = useContext(SessionContext).choices
  const [searchType, setSearchType] = useContext(SessionContext).type
  const [prevPath, setPrev] = useContext(SessionContext).prev
  const [info, setInfo] = useState([])
  const [status, setStatus] = useState('')
  const [results, setResults] = useState([])
  const router = useRouter()
  const type = searchType ? 'show' : 'actor'
  const originalLang = useRef('')
  
  useEffect(() => {
    setPrev('/match')
    if (selected[type].length !== 2) {
      router.push('/search')
    }
    const getMatches = async() => {
      try {
        setStatus('Loading...')
        const data = await fetch('/project4/api/match', apiHeaders({method: 'POST', info: {searchType, selected: selected[type]}}))
        const dataJson = await data.json()

        if (searchType) {
          setInfo(dataJson.data)
          originalLang.current = dataJson.originalLang
          const matchedShows = getMatchShows({lang: originalLang.current, info: dataJson.data})
          setResults(matchedShows)
          if (matchedShows.length === 0) {
            setStatus('No results')
          }
        } else {
          setResults(dataJson.roles)
          if (dataJson.roles.length === 0) {
            setStatus('No results')
          }
        }
      } catch(err) {
        console.log(err)
      }
    }
    getMatches()
  }, [])


  return(
    <>
      <div className="flex-col-center h-full mb-4 space-y-4"> 
        <p className="my-2 text-status"> Shared {searchType ? 'Voice Actors' : 'Shows'} and Roles {searchType ? 'in' : 'for'} </p>
        {selected[type].length === 2 && <MatchSelection selected={selected} type={type} /> }
        {(searchType && status !== 'Loading...') && 
          <Dropdown originalLang={originalLang.current} chooseLang={(l) => setResults(getMatchShows({lang: l, info}))} />
        }
        {(typeof(results) !== 'undefined' && results.length !== 0) ?
          results.map((r, index) => (
            <React.Fragment key={r.id + '' + index}>
              {type === 'actor' ? 
                <MatchActors info={r}/>
                :
                <MatchShows info={r} />
              }
            </React.Fragment>
          ))
        :
          <p className="text-status mt-[6rem]"> {status} </p>
        }
          <div className="pt-8 pb-4 px-3 flex max-sm:flex-col max-sm:items-center sm:justify-evenly  sm:w-3/5"> 
            <button className="btn-back" onClick={() => router.push('/search')}> Back </button>
            <button className="btn-match mt-2" onClick={() => {router.push('/')}}> Start over </button>
         </div>
      </div>
     
    </>
  )
}


export default Match