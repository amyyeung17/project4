import React, { useContext, useEffect, useState, useMemo, useRef } from 'react'
import { useRouter } from 'next/router'
import { apiHeaders }from '@/lib/getHeaders'
import { SessionContext } from '@/lib/getContext'
import MatchActors from '@/components/match-actors'
import MatchSelected from '@/components/match-selected'
import MatchShows from '@/components/match-shows'
import Dropdown from '@/shared/Dropdown'
import StatusText from '@/shared/StatusText'
import { getActorsOrigin, getMatchShows }from '@/lib/getShows'
import testObj from '@/lib/testObj'

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
      router.push('/select')
    }
    const getMatches = async() => {
      try {
        setStatus('Loading...')
        const data = await fetch('/api/match', apiHeaders({method: 'POST', info: {searchType, selected: selected[type]}}))
        const dataJson = await data.json()
        if (searchType) {
          setInfo(dataJson)
          originalLang.current = getActorsOrigin({origin: dataJson.first.countryOfOrigin, chara: dataJson.first.characters})
          const matchedShows = getMatchShows({lang: originalLang.current, info: dataJson})
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
        <p className="text-center my-2 text-status"> Shared {searchType ? 'Voice Actors' : 'Shows'} and Roles {searchType ? 'in' : 'for'} </p>
        {selected[type].length === 2 && <MatchSelected selected={selected} type={type} /> }
        {(searchType && status !== 'Loading...') && 
          <Dropdown originalLang={originalLang.current} chooseLang={(l) => setResults(getMatchShow({lang: l, info}))} />
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
          <StatusText status={status} />
        }
         <button className="btn-match mt-2" onClick={() => {router.push('/')}}> Start over </button>
      </div>
     
    </>
  )
}


export default Match