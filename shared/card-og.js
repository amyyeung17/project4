import React from 'react'
import Link from 'next/link'
import CardInfo from '@/shared/card-info'
import IconCheck from '@/shared/icon-check'
import ImageProfile from '@/shared/image-profile'

const Card = ({cardStyle = 'card', info, width}) => {
  const itemStyle = {card: 'card max-phone:flex', lang: true, link: 'self-end text-sm max-sm:text-sm', langStyle: 'text-sm', info: 'grow w-full', name: 'text-lg', native: 'text-sm'}
  const path= (typeof(info.type) !== 'undefined' ? 'shows' : 'actors')
  return(
    <>
       <Link href={`/${path}?id=${info.id}`} className={`${cardStyle} shadow-lg hover:shadow-2xl h-full relative bg-white w-full`}> 
        <ImageProfile siteUrl={info.image.large} width={width} />
        <CardInfo itemStyle={itemStyle} person={info} />
        {info.picked && 
          <IconCheck />
        }
      </Link>
    </>
  )
}

export default Card