import React from 'react'
import ItemInfo from '@/shared/ItemInfo'
import ProfileButton from '@/shared/ProfileButton'
import ProfileImage from '@/shared/ProfileImage'
import Selected from '@/shared/Selected'

const SearchResult = ({cardStyle = 'card', info, width}) => {
  const itemStyle = {card: 'card max-phone:flex', lang: true, link: 'self-end text-sm max-sm:text-sm', langStyle: 'text-sm', info: 'grow w-full', name: 'text-lg', native: 'text-sm'}

  return(
    <>
      <ProfileButton path={typeof(info.type) !== 'undefined' ? 'shows' : 'actors'} id={info.id} buttonStyle={`${cardStyle} shadow-lg hover:shadow-2xl h-full relative bg-white w-full`}>
        <ProfileImage siteUrl={info.image.large} width={width} />
        <ItemInfo itemStyle={itemStyle} person={info} />
        {info.picked && 
          <Selected />
        }
      </ProfileButton>
    </>
  )
}

export default SearchResult