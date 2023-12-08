import React from 'react'
import ButtonProfile from '@/shared/button-profile'
import CardInfo from '@/shared/card-info'
import IconCheck from '@/shared/icon-check'
import ImageProfile from '@/shared/image-profile'

const Card = ({cardStyle = 'card', info, width}) => {
  const itemStyle = {card: 'card max-phone:flex', lang: true, link: 'self-end text-sm max-sm:text-sm', langStyle: 'text-sm', info: 'grow w-full', name: 'text-lg', native: 'text-sm'}

  return(
    <>
      <ButtonProfile path={typeof(info.type) !== 'undefined' ? 'shows' : 'actors'} id={info.id} buttonStyle={`${cardStyle} shadow-lg hover:shadow-2xl h-full relative bg-white w-full`}>
        <ImageProfile siteUrl={info.image.large} width={width} />
        <CardInfo itemStyle={itemStyle} person={info} />
        {info.picked && 
          <IconCheck />
        }
      </ButtonProfile>
    </>
  )
}

export default Card