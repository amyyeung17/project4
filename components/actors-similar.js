import React from 'react'
import ListItem from '../shared/ListItem'
import ProfileButton from '@/shared/ProfileButton'

const ActorsSimilar = ({info}) => {
  const itemStyle = {card: 'card', lang: true, link: 'self-end text-sm', info: 'grow', name: 'text-lg max-sm:text-base max-sm:text-xs', native: 'text-sm max-sm:text-xs'}
  return(
    <>
      {info.map((actor) => {
        return (
          <React.Fragment key={actor[0]}>
            <ListItem character={actor[1]} itemStyle={itemStyle}>
              <ProfileButton id={actor[0]} buttonStyle="btn--main py-1 max-sm:text-sm" />
            </ListItem>
          </React.Fragment>
        )
      })}
    </>
  )
}

export default ActorsSimilar