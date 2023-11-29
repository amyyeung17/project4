import AniListLink from '@/shared/AniListLink'
import ItemInfo from '@/shared/ItemInfo'
import ProfileImage from '@/shared/ProfileImage'

const ListItem = ({character, children, height = 'h-40 sm:h-48', itemStyle, ...props}) => {
  return(
    <>
      <div className={itemStyle.card}>
        <ProfileImage siteUrl={character.image.large} />
        <ItemInfo person={character} itemStyle={itemStyle} /> 
        {children}
        <AniListLink siteUrl={typeof(props.url)!== 'undefined' ? props.url : character.siteUrl} linkStyle={itemStyle.link}/>
      </div>
    </>
  )
}

export default ListItem