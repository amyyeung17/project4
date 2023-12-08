import React, { useContext }from 'react'
import Card from '@/shared/Card'
import ItemInfo from '@/shared/ItemInfo'
import ProfileButton from '@/shared/ProfileButton'
import { renameShowObj } from '@/lib/getShows'
import { SessionContext } from '@/lib/getContext'

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
              <ProfileButton path="shows" id={first(c).id} buttonStyle="card hover:shadow-md shadow h-full relative">
                <Card cardStyle="h-full max-phone:flex pb-0" divStyle="h-full w-full" info={{...c, picked: first(c).picked}} native="mx-2 mb-1">
                  <ItemInfo person={renameShowObj({show: first(c)})} itemStyle={{name: "max-sm:text-sm", native: "mb-2 text-sm max-sm:text-xs"}}/>
                </Card>
              </ProfileButton>
            </div>
          </React.Fragment>
        )
      })}
    </>
  )
}

export default React.memo(ActorsRoles)