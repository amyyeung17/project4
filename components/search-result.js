import React from 'react'
import ItemInfo from '@/shared/ItemInfo'
import ProfileButton from '@/shared/ProfileButton'
import ProfileImage from '@/shared/ProfileImage'
import Selected from '@/shared/Selected'

const SearchResult = ({cardStyle = 'card', info}) => {
  const itemStyle = {card: 'card', lang: true, link: 'self-end text-sm max-sm:text-sm', info: 'grow', name: 'text-lg max-sm:text-base', native: 'text-base max-sm:text-sm'}

  return(
    <>
      <div className={`${cardStyle} ${info.picked ? 'shadow-md' : 'shadow'}`}> 
        <ProfileImage siteUrl={info.image.large} />
        <ItemInfo itemStyle={itemStyle} person={info} />
        <ProfileButton path={typeof(info.type) !== 'undefined' ? 'shows' : 'actors'} id={info.id} buttonStyle="btn--main relative" />
        {info.picked && 
          <Selected />
        }
      </div>
    </>
  )
}

export default SearchResult