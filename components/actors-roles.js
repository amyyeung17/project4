import React from 'react'
import ListItem from '../shared/ListItem'
import Title from '@/shared/Title'

const ActorsRoles = ({info}) => {
  const firstShow =  (c) => c.media.nodes.filter(n => !['MUSIC', 'MANGA', 'NOVEL', 'ONE_SHOT'].includes(n.format))[0]
  
  return(
    <>
      {info.map((c, index) => {
        return(
          <React.Fragment key={index}>
            <ListItem character={c}  url={firstShow(c).siteUrl}> 
              <Title show={firstShow(c)} titleStyle="a-title mt-1 text-sm" />
            </ListItem>
          </React.Fragment>
        )
      })}
    </>
  )
}

export default ActorsRoles