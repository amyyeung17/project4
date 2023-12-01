
import ProfileImage from '@/shared/ProfileImage'
import AniLink from '@/shared/AniLink'
import { renameShowObj } from '@/lib/getShows'


const Media = ({divStyle, height = 'h-32', show, titleStyle}) => {
  return(
    <>
      <div className={divStyle}> 
        <ProfileImage siteUrl={show.coverImage.large} height={height}/>
        <AniLink info={renameShowObj({show})} linkStyle={titleStyle}/>
      </div>
    </>
  )
}

export default Media