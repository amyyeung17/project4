import React from 'react'
import Card from '../../shared/card-og'

const ActorsSimilarActors = ({info}) => {
  
  return(
    <>
      {info.map((actor) => {
        return (
          <React.Fragment key={actor[0] + ' similar'}>
            <div className="flex-col-center"> 
              <Card info={{id: actor[0], ...actor[1]}} />
            </div>
          </React.Fragment>
        )
      })}
    </>
  )
}

export default ActorsSimilarActors