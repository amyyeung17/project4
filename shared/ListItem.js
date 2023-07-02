import AniListLink from '@/shared/AniListLink'
import ItemInfo from '@/shared/ItemInfo'
import ProfileImage from '@/shared/ProfileImage'

const ListItem = ({character, children, cardStyle = 'card', height = 'h-40', langState = false, nameStyle = 'text-lg', nativeStyle = 'text-sm', linkStyle, type, ...props}) => {
 
  return(
    <>
      <div className={cardStyle}>
        <ProfileImage siteUrl={character.image.medium} height={height}/>
        <ItemInfo person={character} divStyle={cardStyle === 'card-result' ? 'h-fit mb-2' : 'grow'} langState={langState} nameStyle={nameStyle} nativeStyle={nativeStyle} /> 
        {children}
        <AniListLink siteUrl={typeof(props.url)!== 'undefined' ? props.url : character.siteUrl} linkStyle={linkStyle}/>
      </div>
    </>
  )
}

export default ListItem