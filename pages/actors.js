import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getShared } from '@/lib/getActors'
import { apiHeaders }from '@/lib/getHeaders'
import ActorsInfo from '@/components/actors-info'
import ActorsGrid from '@/components/actors-grid'
import ActorsRoles from '@/components/actors-roles'
import ActorsSimilar from '@/components/actors-similar'
import Dropdown from '@/shared/Dropdown'
import InfoOptions from '@/shared/InfoOptions'
import StatusText from '@/shared/StatusText'

const Actors = () => {
  const router = useRouter()
  const [info, setInfo] = useState({})
  const [shared, setShared] = useState([])
  const [status, setStatus] = useState('')
  const { query } = router

  useEffect(() => {
    const getActor = async() => {
      try {
        setStatus('Loading...')
        const data = await fetch('/project4/api/actors', apiHeaders({method: 'POST', info: {query: query.id}}))
        const dataJson = await data.json()
        setInfo({...dataJson})
        setShared(getShared({lang: dataJson.staff.languageV2, vaData: dataJson.shared}))
        setStatus('Finished')
      } catch (err){
        console.log(err)
      }
    }
    if (router.isReady && typeof(query.id) !== 'undefined' && query.id !== '') {
      getActor()
    }
  }, [router.isReady, query.id])

  return (
    <>
      {(typeof(info) !== 'undefined' && Object.entries(info).length !== 0 && status !== 'Loading...') ?
        <>
          <ActorsInfo info={info.staff}>
            <InfoOptions info={info.staff} id={query.id} type="actor" routeFun={() => router.push('/select')}/>
          </ActorsInfo>
          <p className="font-bold mt-4 mb-2 pl-3 self-start max-sm:text-xl text-2xl"> Popular Roles </p>
          <ActorsGrid info={info.staff.characters.nodes}>
            <ActorsRoles />
          </ActorsGrid>
          <p className="font-bold mt-4 pl-3 self-start max-sm:text-xl text-2xl"> Similar Actors </p>
          <Dropdown type="actor" originalLang={info.staff.languageV2} chooseLang={(l) => setShared(getShared({lang: l, vaData: info.shared}))}/>
          <ActorsGrid info={shared}>
            <ActorsSimilar />
          </ActorsGrid>
        </>
        :
        <StatusText status={status}/>
      }
    </>
  )
}

export default Actors