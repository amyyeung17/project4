import React from 'react'
import ProfileImage from '@/shared/ProfileImage'
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
              <div className="card"> 
                <ProfileImage siteUrl={c.image.large} />
                <div className="flex flex-col p-2 h-fit"> 
                  <a className="a-title break-words leading-snug text-jet font-bold text-lg max-sm:text-base" href={c.siteUrl} target="_blank"> {c.name.full} </a>
                  {c.name.native !== null &&
                    <p className="break-all leading-snug text-zinc-500 line-clamp-1 text-sm max-sm:text-xs"> ({c.name.native}) </p>
                  }
                </div>
                <Title show={firstShow(c)} titleStyle="a-title line-clamp-2 text-sm max-sm:text-xs px-2" />
              </div>
            </div>
          </React.Fragment>
        )
      })}
    </>
  )
}

export default React.memo(ActorsRoles)