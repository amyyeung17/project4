import React, { useContext, useEffect } from 'react'
import SelectItem from '@/components/select-item'
import SelectTempItem from '@/components/select-tempItem'
import { removeItem } from '@/lib/getOptions'
import Link from 'next/link'


const SearchSelect = ({searchType, selected, setSelected}) => {
  const type = searchType ? 'show' : 'actor'

 
  return(
    <>
      <div className="max-phone:flex-col flex-evenly max-sm:gap-x-4 my-4 py-3 px-2">
        {selected[type].length !== 0 && selected[type].map((s, index) => {
          return (
            <React.Fragment key={s.id + 'item'}>
              <SelectItem person={s} type={type}> 
                <button className="btn--secondary mt-2 mb-4 py-1" onClick={() => removeItem({index, type, setSelected})}> Remove </button>
              </SelectItem>
            </React.Fragment>
          )
        })}
        <SelectTempItem text={searchType ? 'Title' : 'Voice actor'} length={selected[type].length} />
      </div>
      {selected[type].length !== 2 ?
        <button className="btn-match" disabled> Find matches </button>
        :
        <Link className="btn-match" href="/match"> Find matches </Link> 
      }
  </>
  )
}

export default SearchSelect