import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { getActorsShared } from '@/lib/getActors'
import { apiHeaders }from '@/lib/getHeaders'
import Dropdown from '@/shared/dropdown-og'
import InfoOptions from '@/shared/info-options'
import ActorsGrid from '@/components/actors/grid'
import ActorsInfo from '@/components/actors/info'
import ActorsRoles from '@/components/actors/roles'
import ActorsSimilarActors from '@/components/actors/similar-actors'


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
        const chara = dataJson.staff.characters.nodes.filter(f => f.id !== 36309)
        setInfo({...dataJson, staff: {...dataJson.staff, characters: {nodes: (chara.length > 20 ? chara.slice(0, 20): chara)}}})
        setShared(getActorsShared({lang: dataJson.staff.languageV2, vaData: dataJson.shared}))
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
            <InfoOptions info={info.staff} id={query.id} type="actor" routeFun={() => router.push('/search')}/>
          </ActorsInfo>
          <p className="font-medium mt-4 mb-2 pl-3 self-start max-sm:text-xl text-2xl"> Popular Roles </p>
          <ActorsGrid info={info.staff.characters.nodes.filter(f => f.id !== 36309)}>
            <ActorsRoles />
          </ActorsGrid>
          <p className="font-medium mt-4 pl-3 self-start max-sm:text-xl text-2xl"> Similar Actors </p>
          <Dropdown type="actor" originalLang={info.staff.languageV2} chooseLang={(l) => setShared(getActorsShared({lang: l, vaData: info.shared}))}/>
          <ActorsGrid info={shared}>
            <ActorsSimilarActors />
          </ActorsGrid>
        </>
        :
        <p className="text-status mt-[6rem]"> {status} </p>
      }
    </>
  )
}

export default Actors