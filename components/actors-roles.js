import React from 'react'
import AniLink from '@/shared/AniLink'
import ProfileImage from '@/shared/ProfileImage'
import Title from '@/shared/Title'

const ActorsRoles = ({info}) => {
  const firstShow =  (c) => c.media.nodes.filter(n => !['MUSIC', 'MANGA', 'NOVEL', 'ONE_SHOT'].includes(n.format)).find(x => x.title.english !== null || x.title.native !== null)

  return(
    <>
      {info.map((c, index) => {
        return(
          <React.Fragment key={index}>
            <div className="flex-col-center"> 
              <div className="card"> 
                <ProfileImage siteUrl={c.image.large} />
                <AniLink info={c} linkStyle={'a-title break-words leading-snug text-jet font-bold text-lg mx-2 mt-2 max-sm:text-base'} />
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