import React from 'react'
import SearchResult from './search-result'

const ActorsSimilar = ({info}) => {
  
  return(
    <>
      {info.map((actor) => {
        return (
          <React.Fragment key={actor[0] + ' similar'}>
            <div className="flex-col-center "> 
              <SearchResult info={{id: actor[0], ...actor[1]}} />
            </div>
          </React.Fragment>
        )
      })}
    </>
  )
}

export default ActorsSimilar