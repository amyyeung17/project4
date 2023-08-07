import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import SelectFindButton from '@/components/select-findbutton'
import SelectItem from '@/components/select-item'
import SelectTempItem from '@/components/select-tempItem'
import { SessionContext } from '@/lib/getContext'
import RemoveButton from '@/shared/RemoveButton'
import Toggle from '@/shared/Toggle'


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
      <p className="text-header"> Choose 2  </p>
      <Toggle searchType={searchType} setSearchType={setSearchType}/>
      <div className="flex-evenly max-sm:gap-x-4 my-4 py-3 px-2">
        {selected[type].length !== 0 && selected[type].map((s, index) => {
          return (
            <React.Fragment key={s.id + 'item'}>
              <SelectItem person={s} type={type}> 
                <RemoveButton text="Remove" type={type} index={index} setSelected={setSelected}/>
              </SelectItem>
            </React.Fragment>
          )
        })}
        <SelectTempItem text={searchType ? 'Title' : 'Voice actor'} length={selected[type].length} navFun={() => router.push('/search')}/>
      </div>
      <SelectFindButton length={selected[type].length}/>
  </>
  )
}

export default Select