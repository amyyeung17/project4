import ProfileImage from '@/shared/ProfileImage'
import Title from '@/shared/Title'


const Media = ({divStyle, height = 'h-32', show, titleStyle}) => {

  return(
    <>
      <div className={divStyle}> 
        <ProfileImage siteUrl={show.coverImage.medium} height={height}/>
        <Title show={show} titleStyle={titleStyle} />
      </div>
    </>
  )
}

export default Media