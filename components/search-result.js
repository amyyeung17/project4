import React from 'react'
import ItemInfo from '@/shared/ItemInfo'
import ProfileButton from '@/shared/ProfileButton'
import ProfileImage from '@/shared/ProfileImage'

const SearchResult = ({info}) => {
  const itemStyle = {card: 'card', lang: true, link: 'self-end text-sm max-sm:text-sm', info: 'grow', name: 'text-lg max-sm:text-base', native: 'text-sm max-sm:text-xs'}

  return(
    <>
      <div className="card"> 
        <ProfileImage siteUrl={info.image.large} />
        <ItemInfo itemStyle={itemStyle} person={info} />
        <ProfileButton path={typeof(info.type) !== 'undefined' ? 'shows' : 'actors'} id={info.id} buttonStyle="btn--main relative" />
      </div>
    </>
  )
}

export default SearchResult