import React, { useEffect, useState, useRef, useContext } from 'react'
import { useRouter } from 'next/router'
import { SessionContext } from '@/lib/getContext'
import { apiHeaders }from '@/lib/getHeaders'
import { getShowsActorsLang } from '@/lib/getShows'
import Dropdown from '@/shared/dropdown-og'
import InfoOptions from '@/shared/info-options'
import ShowsInfo from '@/components/shows/info'
import ShowsRoles from '@/components/shows/roles'

const Shows = () => {
  const router = useRouter()
  const [info, setInfo] = useState([])
  const [langActors, setLangActors] = useState([])
  const [status, setStatus] = useState('')
  const [selected, _] = useContext(SessionContext).choices
  const { query } = router
  const originalLang = useRef('')

  useEffect(() => {
    const getShow = async() => {
      try {
        setStatus('Loading...')
        const data = await fetch('/project4/api/shows', apiHeaders({method: 'POST', info: {query: query.id}}))
        const dataJson = await data.json()
        setInfo(dataJson.data)

        originalLang.current = dataJson.originalLang
        const l = getShowsActorsLang({lang: originalLang.current, info: dataJson.data})
        setLangActors(l.map(a => ({...a, va: {...a.va, picked: selected['actor'].some(s => s.id === a.va.id)}})))
        setStatus('Finished')
      } catch (err){
        setStatus('Error, please try again.')
        console.log(err)
      }
    }
    if (router.isReady && typeof(query.id) !== 'undefined' && query.id !== '') {
      getShow()
    }
  }, [router.isReady, query.id])
 
  return (
    <>
      {(typeof(info) !== 'undefined' && Object.entries(info).length !== 0 && status !== 'Loading...') ?
        <>
          <ShowsInfo info={info}>
            <InfoOptions info={info} id={query.id} type="show" routeFun={() => router.push('/search')}/>
          </ShowsInfo>
          <p className="font-bold mt-4 pl-3 self-start max-sm:text-xl text-2xl"> Cast </p>
          <Dropdown originalLang={originalLang.current} chooseLang={(l) => setLangActors(getShowsActorsLang({lang: l, info}))}/>
          <div className="max-sm:flex max-sm:flex-col max-sm:items-center sm:grid sm:grid-cols-2 sm:auto-rows-fr gap-x-4 md:gap-x-8 gap-y-8 px-3 py-2 w-full"> 
            {langActors.map((a) => {
              return(
                <React.Fragment key={a.chara.id}>
                  <ShowsRoles info={a} />
                </React.Fragment>
              )
            })}
          </div>
        </>
        :
        <p className="text-status mt-[6rem]"> {status} </p>
      } 
    </>
  )
}

export default Shows