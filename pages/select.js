import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { SessionContext } from '@/lib/getContext'
import removeItems from '@/lib/removeItems'
import CardSelected from '@/shared/card-selected'
import CardSelectedTemp from '@/shared/card-selected-temp'
import Toggle from '@/components/search/toggle'
import Link from 'next/link'


const Select = () => {
  const [selected, setSelected] = useContext(SessionContext).choices
  const [searchType, setSearchType] = useContext(SessionContext).type
  const [_, setPrev] = useContext(SessionContext).prev
  const router = useRouter()
  const type = searchType ? 'show' : 'actor'

  useEffect(() => {
    setPrev('/select')
  }, [])

  return(
    <>
      <p className="mt-6 m-2 relative text-3xl text-center"> Match </p>
      <Toggle searchType={searchType} setSearchType={setSearchType} divStyle="justify-center"/>
      <div className="flex-evenly max-sm:gap-x-4 my-4 py-3 px-2">
        {selected[type].length !== 0 && selected[type].map((s, index) => {
          return (
            <React.Fragment key={s.id + 'item'}>
              <CardSelected person={s}> 
                <button className="btn--secondary-sm py-1" onClick={() => removeItems({index, type, setSelected})}> Remove </button>
              </CardSelected>
            </React.Fragment>
          )
        })}
        <CardSelectedTemp text={searchType ? 'Title' : 'Voice actor'} length={selected[type].length} navFun={() => router.push('/search')}/>
      </div>
      {selected[type].length !== 2 ?
        <button aria-label="Disabled button" className="btn-match" disabled> Find matches </button>
        :
        <Link className="btn-match" href="/match"> Find matches </Link> 
      }
  </>
  )
}

export default Select