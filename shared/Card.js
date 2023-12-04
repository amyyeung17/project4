import AniListLink from '@/shared/AniListLink'
import AniLink from '@/shared/AniLink'
import ProfileButton from '@/shared/ProfileButton'
import ProfileImage from '@/shared/ProfileImage'
import Selected from '@/shared/Selected'

const Card = ({cardStyle = 'card shadow', children, info, height, native = 'mx-2 mb-2', objectFit, divStyle = 'flex-col-center'}) => {
  return(
    <>
      <div className={divStyle}> 
        <div className={`${cardStyle}`}> 
          <ProfileImage siteUrl={info.image.large} height={height} objectFit={objectFit} />
          <AniLink info={info} linkStyle="a-title break-words leading-snug text-lg mx-2 mt-2 max-sm:text-base" nativeStyle={native}/>
          {children}
          {info.picked && 
            <Selected />  
          }
        </div>
      </div>
    </>
  )
}

export default Card