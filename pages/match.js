import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { apiHeaders }from '@/lib/getHeaders'
import { SessionContext } from '@/lib/getContext'
import SelectItem from '@/components/select-item'
import MatchResult from '@/components/match-result'

const Match = () => {
  const [selected, setSelected] = useContext(SessionContext).choices
  const [status, setStatus] = useState('')
  const [results, setResults] = useState([])
  const router = useRouter()

  useEffect(() => {
    const getMatches = async() => {
      try {
        setStatus('Loading...')
        const data = await fetch('/api/match', apiHeaders({method: 'POST', info: {selected}}))
        const dataJson = await data.json()
        setResults(dataJson)
        if (dataJson.roles.length === 0) {
          setStatus('No results')
        }
        setStatus('Finished')
      } catch(err) {
        console.log(error)
      }
    }
    getMatches()
  }, [])

  return(
    <>
      <div className="flex-col-center h-full mb-4 space-y-4"> 
        <p className="text-center my-2 text-status"> Shared Shows and Roles </p>
        <div className="flex-evenly h-full max-sm:gap-x-4 mt-2 mb-4">
          {selected.length !== 0 && selected.map((s, index) => (
            <React.Fragment key={s.id + 'item'}>
              <SelectItem person={s} height="h-40" index={index} />
            </React.Fragment>
          ))}
        </div>
        {(typeof(results.roles) !== 'undefined' && results.roles.length !== 0) ?
          results.roles.map((r) => (
            <React.Fragment key={r.media.nodes.id}>
              <MatchResult info={r}/>
            </React.Fragment>
          ))
        :
          <p className="text-status">
            {status}
          </p>
        }
        <button className="btn-match" onClick={() => {setSelected([]); router.push('/select')}}> Start over </button>
      </div>
    </>
  )
}


export default Match