import React from 'react'
import ListItem from '../shared/ListItem'
import Title from '@/shared/Title'

const ActorsRoles = ({info}) => {
  const firstShow =  (c) => c.media.nodes.filter(n => !['MUSIC', 'MANGA', 'NOVEL', 'ONE_SHOT'].includes(n.format)).find(x => x.title.english !== null || x.title.native !== null)
  const itemStyle = {card: 'card', lang: false, link: 'self-end text-sm max-sm:text-xs', info: 'h-fit', name: 'text-lg max-sm:text-base', native: 'text-sm max-sm:text-xs'}

  return(
    <>
      {info.map((c, index) => {
        return(
          <React.Fragment key={index}>
            <div className="flex-col-center"> 
              <ListItem character={c} itemStyle={itemStyle} url={firstShow(c).siteUrl}> 
                <Title show={firstShow(c)} titleStyle="a-title text-sm max-sm:text-xs px-2" />
                <div className="grow"></div>
              </ListItem>
            </div>
          </React.Fragment>
        )
      })}
    </>
  )
}

export default React.memo(ActorsRoles)