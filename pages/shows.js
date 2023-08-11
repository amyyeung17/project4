import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { apiHeaders }from '@/lib/getHeaders'
import ShowsInfo from '@/components/shows-info'
import ShowsRoles from '@/components/shows-roles'
import { getActorsOrigin, findActorsLang } from '@/lib/getShows'
import Dropdown from '@/shared/Dropdown'
import InfoOptions from '@/shared/InfoOptions'
import StatusText from '@/shared/StatusText'

const Shows = () => {
  const router = useRouter()
  const [info, setInfo] = useState([])
  const [langActors, setLangActors] = useState([])
  const [status, setStatus] = useState('')
  const { query } = router
  const originalLang = useRef('')

  useEffect(() => {
    const getShow = async() => {
      try {
        setStatus('Loading...')
        const data = await fetch('/project4/api/shows', apiHeaders({method: 'POST', info: {query: query.id}}))
        const dataJson = await data.json()
        setInfo(dataJson)
        originalLang.current = getActorsOrigin({origin: dataJson.countryOfOrigin, charaData: dataJson.characters})
        setLangActors(findActorsLang({lang: originalLang.current, info: dataJson}))
        setStatus('Finished')
      } catch (err){
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
            <InfoOptions info={info} id={query.id} type="show" routeFun={() => router.push('/select')}/>
          </ShowsInfo>
          <p className="font-bold mt-4 pl-3 self-start max-sm:text-xl text-2xl"> Cast </p>
          <Dropdown originalLang={originalLang.current} chooseLang={(l) => setLangActors(findActorsLang({lang: l, info}))}/>
          <div className="max-sm:flex max-sm:flex-col max-sm:items-center sm:grid sm:grid-cols-2 sm:auto-rows-fr gap-x-4 md:gap-x-8 gap-y-2 md:gap-y-4 px-3 py-2 w-full"> 
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
        <StatusText status={status} />
      }
    </>
  )
}

export default Shows