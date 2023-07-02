import React, { useContext } from 'react'
import { useRouter } from 'next/navigation'
import SelectFindButton from '@/components/select-findbutton'
import SelectItem from '@/components/select-item'
import SelectTempItem from '@/components/select-tempItem'
import { SessionContext } from '@/lib/getContext'
import RemoveButton from '@/shared/RemoveButton'


//7/1 - removed div, flex-col-center mt-4
const Select = () => {
  const [selected, setSelected] = useContext(SessionContext).choices
  const router = useRouter()
  
  return(
    <>
      <p className="text-status mt-6 mb-2"> Choose 2 voice actors </p>
      <div className="flex-evenly max-sm:gap-x-4 my-4 py-3 px-2">
        {selected.length !== 0 && selected.map((s, index) => {
          return (
            <React.Fragment key={s.id + 'item'}>
              <SelectItem person={s}> 
                <RemoveButton text="Remove" index={index} setSelected={setSelected}/>
              </SelectItem>
            </React.Fragment>
          )
        })}
        <SelectTempItem length={selected.length} navFun={() => router.push('/search')}/>
      </div>
      <SelectFindButton length={selected.length}/>
  </>
  )
}

export default Select