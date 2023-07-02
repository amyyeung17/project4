import React from 'react'
import ItemInfo from '@/shared/ItemInfo'
import ProfileButton from '@/shared/ProfileButton'
import ProfileImage from '@/shared/ProfileImage'

const SearchResult = ({info}) => {
  
  return(
    <>
      <div className="card--basic shadow"> 
        <ProfileImage siteUrl={info.image.medium} />
        <ItemInfo langState nameStyle="text-xl" person={info} />
        <ProfileButton id={info.id} buttonStyle="btn--main relative" />
      </div>
    </>
  )
}

export default SearchResult