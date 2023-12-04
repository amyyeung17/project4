import React from 'react'
import ItemInfo from '@/shared/ItemInfo'
import ProfileButton from '@/shared/ProfileButton'
import ProfileImage from '@/shared/ProfileImage'
import Selected from '@/shared/Selected'

const SearchResult = ({cardStyle = 'card', info}) => {
  const itemStyle = {card: 'card', lang: true, link: 'self-end text-sm max-sm:text-sm', info: 'grow', name: 'text-lg max-sm:text-base', native: 'text-base max-sm:text-sm'}

  return(
    <>
      <ProfileButton path={typeof(info.type) !== 'undefined' ? 'shows' : 'actors'} id={info.id} buttonStyle={`${cardStyle} shadow hover:shadow-md h-full relative`}>
        <ProfileImage siteUrl={info.image.large} />
        <ItemInfo itemStyle={itemStyle} person={info} />
        {info.picked && 
          <Selected />
        }
      </ProfileButton>
    </>
  )
}

export default SearchResult