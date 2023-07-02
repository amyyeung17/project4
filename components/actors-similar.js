import React from 'react'
import ListItem from '../shared/ListItem'
import ProfileButton from '@/shared/ProfileButton'

const ActorsSimilar = ({info}) => {

  return(
    <>
      {info.map((actor) => {
        return (
          <React.Fragment key={actor[0]}>
            <ListItem character={actor[1]}>
              <ProfileButton id={actor[0]} buttonStyle="btn--main py-1 text-sm" />
            </ListItem>
          </React.Fragment>
        )
      })}
    </>
  )
}

export default ActorsSimilar