import React, { useContext } from 'react'
import { renameShowObj } from '@/lib/getShows'
import { SessionContext } from '@/lib/getContext'
import ButtonProfile from '@/shared/button-profile'
import CardExternal from '@/shared/card-external'
import CardInfo from '@/shared/card-info'

const ActorsRoles = ({info}) => {
  const [selected, _] = useContext(SessionContext).choices

  const first = (c) => {
    const temp = c.media.nodes.filter(n => !['MUSIC', 'MANGA', 'NOVEL', 'ONE_SHOT'].includes(n.format))
    const i = temp.find(t => selected['show'].some(s => s.id === t.id))
    if (typeof(i) !== 'undefined') {
      return {...i, picked: true}
    } 
    return temp.find(x => x.title.english !== null || x.title.native !== null)
  }
  return(
    <>
      {info.map((c, index) => {
        return(
          <React.Fragment key={index}>
            <div className="flex-col-center"> 
              
                <CardExternal cardStyle="card shadow h-full relative max-phone:flex pb-0" divStyle="flex-col-center h-full w-full" info={{...c, picked: first(c).picked}} native="mx-2 mb-1">
                  <CardInfo person={renameShowObj({show: first(c)})} itemStyle={{name: "max-sm:text-sm", native: "mb-2 text-sm"}}/>
                </CardExternal>
            </div>
          </React.Fragment>
        )
      })}
    </>
  )
}

export default React.memo(ActorsRoles)