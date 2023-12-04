import React, { useState } from 'react'
import ShowButton from '@/shared/ShowButton'
import { renameShowObj } from '@/lib/getShows'
import SearchResult from './search-result'

const MediaAdditional = ({info}) => {
  const [display, setDisplay] = useState(false)
 
  return(
    <>
      <ShowButton display={display} setDisplay={setDisplay} text="shows"/>
      {display &&
        <div className="sm:px-2 w-full"> 
          <div className="media-grid">
            {info.map((i) => (
              <React.Fragment key={i.id + ' additional'}>
                <div className={`media-grid__item ${i === 0 ? 'p-3' : 'p-2'}`} >
                  <SearchResult cardStyle="card bg-white" info={renameShowObj({show: i})}/>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      }
    </>
  )
}

export default MediaAdditional