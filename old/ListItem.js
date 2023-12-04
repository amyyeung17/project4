import AniListLink from '@/shared/AniListLink'
import ItemInfo from '@/shared/ItemInfo'
import ProfileImage from '@/shared/ProfileImage'

const ListItem = ({character, children, height, itemStyle, ...props}) => {
  return(
    <>
      <div className={itemStyle.card}>
        <ProfileImage siteUrl={character.image.large} height={height}/>
        <ItemInfo person={character} itemStyle={itemStyle} /> 
        {children}
        <AniListLink siteUrl={typeof(props.url)!== 'undefined' ? props.url : character.siteUrl} linkStyle={itemStyle.link}/>
      </div>
    </>
  )
}

export default ListItem