import React, { useState } from 'react'
import Media from './match-media'
import ShowButton from '@/shared/ShowButton'

const MediaAdditional = ({info}) => {
  const [display, setDisplay] = useState(false)
 
  return(
    <>
      <ShowButton display={display} setDisplay={setDisplay} text="shows"/>
      {display &&
        <div className="media-grid">
          {info.map((i) => (
            <React.Fragment key={i.id + ' additional'}>
              <Media divStyle={`media-grid__item ${i === 0 ? 'p-3' : 'p-2'}`} show={i} titleStyle="a-title text-center mt-2 text-sm" />
            </React.Fragment>
          ))}
        </div>
      }
    </>
  )
}

export default MediaAdditional