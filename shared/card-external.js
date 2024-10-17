import IconCheck from '@/shared/icon-check'
import ImageProfile from '@/shared/image-profile'
import LinkNative from '@/shared/link-native'

const CardExternal = ({cardStyle = 'card shadow', children, info, height, width, native = 'mx-2 mb-2', objectFit, objectPosition, divStyle = 'flex-col-center'}) => {
  return(
    <>
      <div className={divStyle}> 
        <div className={`${cardStyle}`}> 
          <ImageProfile objectPosition={objectPosition} siteUrl={info.image.large} height={height} width={width} objectFit={objectFit} />
          <div className="flex flex-col max-phone:justify-center w-full"> 
            <LinkNative info={info} linkStyle="a-title break-words leading-snug text-lg mx-2 mt-2" nativeStyle={native}/>
            {children}
          </div>
          {info.picked && 
            <IconCheck />  
          }
        </div>
      </div>
    </>
  )
}

export default CardExternal