import React, { useEffect, useContext, useState } from 'react'
import { SessionContext } from '@/lib/getContext'
import { useRouter } from 'next/router'
import getShared from '@/lib/getShared'
import { apiHeaders }from '@/lib/getHeaders'
import AddButton from '@/shared/AddButton'
import RemoveButton from '@/shared/RemoveButton'
import ActorsInfo from '@/components/actors-info'
import ActorsGrid from '@/components/actors-grid'
import ActorsRoles from '@/components/actors-roles'
import ActorsSimilar from '@/components/actors-similar'


const Actors = () => {
  const router = useRouter()
  const [info, setInfo] = useState({})
  const [shared, setShared] = useState([])
  const [selected, setSelected] = useContext(SessionContext).choices
  const { query } = router


  useEffect(() => {
    const getActor = async() => {
      try {
        const data = await fetch('/api/actors', apiHeaders({method: 'POST', info: {query: query.id}}))
        const dataJson = await data.json()
        setInfo(dataJson.staff)
        setShared(getShared({vaData: dataJson.shared}))
        //setShared(dataJson.shared)
      } catch (err){
        console.log(err)
      }
    }

    if (router.isReady && typeof(query.id) !== 'undefined' && query.id !== '') {
      getActor()
    }
  }, [router.isReady])

  const getSelected = () => {
    const {characters, ...cred} = info
    setSelected(s => [...s, cred])
    router.push('/select')
  }


  return (
    <>
      {typeof(info) !== 'undefined' && Object.entries(info).length !== 0 ?
        <>
          <ActorsInfo info={info}>
            {![...selected.map(s => s.id)].includes(parseInt(query.id)) ?
              <AddButton addFun={() => getSelected()} isDisabled={selected.length === 2}/>
              :
              <RemoveButton index={[...selected.map(s => s.id)].indexOf(parseInt(query.id))} setSelected={setSelected}/>
            }
          </ActorsInfo>
          <ActorsGrid info={info.characters.nodes} text="Popular roles">
            <ActorsRoles />
          </ActorsGrid>
          <ActorsGrid info={shared} text="Similar actors">
            <ActorsSimilar />
          </ActorsGrid>
        </>
        :
        <p className="text-status"> Loading... </p>
      }
    </>
  )
}

export default Actors