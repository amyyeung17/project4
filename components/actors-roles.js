import React from 'react'
import ListItem from '../shared/ListItem'
import Title from '@/shared/Title'

const ActorsRoles = ({info}) => {
  const firstShow =  (c) => c.media.nodes.filter(n => !['MUSIC', 'MANGA', 'NOVEL', 'ONE_SHOT'].includes(n.format)).find(x => x.title.english !== null && x.title.native !== null)
  const itemStyle = {card: 'card', lang: false, link: 'self-end text-sm', info: 'h-fit', name: 'text-lg', native: 'text-sm'}
  console.log('render')
  return(
    <>
      {info.map((c, index) => {
        return(
          <React.Fragment key={index}>
            <ListItem character={c} itemStyle={itemStyle} url={firstShow(c).siteUrl}> 
              <Title show={firstShow(c)} titleStyle="a-title mt-1 text-sm" />
              <div className="grow"></div>
            </ListItem>
          </React.Fragment>
        )
      })}
    </>
  )
}

export default React.memo(ActorsRoles)