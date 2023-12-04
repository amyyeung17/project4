import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import SelectItem from '@/components/select-item'
import SelectTempItem from '@/components/select-tempItem'
import { SessionContext } from '@/lib/getContext'
import { removeItem } from '@/lib/getOptions'
import Toggle from '@/shared/Toggle'
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
              <SelectItem person={s} type={type}> 
                <button className="btn--secondary my-1 py-1" onClick={() => removeItem({index, type, setSelected})}> Remove </button>
              </SelectItem>
            </React.Fragment>
          )
        })}
        <SelectTempItem text={searchType ? 'Title' : 'Voice actor'} length={selected[type].length} navFun={() => router.push('/search')}/>
      </div>
      {selected[type].length !== 2 ?
        <button className="btn-match" disabled> Find matches </button>
        :
        <Link className="btn-match" href="/match"> Find matches </Link> 
      }
  </>
  )
}

export default Select