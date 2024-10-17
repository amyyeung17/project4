import React from 'react'
import Link from 'next/link'
import removeItems from '@/lib/removeItems'
import CardSelected from '@/shared/card-selected'
import CardSelectedTemp from '@/shared/card-selected-temp'


const SearchSelection = ({searchType, selected, setSelected}) => {
  const type = searchType ? 'show' : 'actor'

  return(
    <>
      <div className="max-phone:flex-col flex-evenly max-sm:gap-x-4 my-4 py-3 px-2">
        {selected[type].length !== 0 && selected[type].map((s, index) => {
          return (
            <React.Fragment key={s.id + 'item'}>
              <CardSelected person={s}> 
                <button 
                  aria-label="Unselect for match"
                  className="btn--secondary-sm mt-2 mb-4 py-1" 
                  onClick={() => removeItems({index, type, setSelected})}
                > 
                  Remove 
                </button>
              </CardSelected>
            </React.Fragment>
          )
        })}
        <CardSelectedTemp text={searchType ? 'Title' : 'Voice actor'} length={selected[type].length} />
      </div>
      {selected[type].length !== 2 ?
        <button aria-label="Disabled button" className="btn-match" disabled> Find matches </button>
        :
        <Link className="btn-match" href="/match"> Find matches </Link> 
      }
  </>
  )
}

export default SearchSelection