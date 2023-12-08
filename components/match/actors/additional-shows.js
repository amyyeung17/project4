import React, { useState } from 'react'
import { renameShowObj } from '@/lib/getShows'
import ButtonShow from '@/shared/button-show'
import Card from '@/shared/card-og'

const ActorsAdditionalShows = ({info}) => {
  const [display, setDisplay] = useState(false)
 
  return(
    <>
      <ButtonShow display={display} setDisplay={setDisplay} text="shows"/>
      {display &&
        <div className="sm:px-2 w-full"> 
          <div className="media-grid">
            {info.map((i) => (
              <React.Fragment key={i.id + ' additional'}>
                <div className={`media-grid__item ${i === 0 ? 'p-3' : 'p-2'}`} >
                  <Card cardStyle="card bg-white flex-col" width="w-full" info={renameShowObj({show: i})}/>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      }
    </>
  )
}

export default ActorsAdditionalShows