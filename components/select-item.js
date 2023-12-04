
import ProfileButton from '@/shared/ProfileButton'
import AniListLink from '@/shared/AniListLink'
import ItemInfo from '@/shared/ItemInfo'
import ProfileImage from '@/shared/ProfileImage'
//Check! - https://stackoverflow.com/questions/67185279/react-jsx-in-a-variable-vs-a-function-vs-a-separate-component

const SelectItem = ({children, type,  person}) => {
  const itemStyle = {card: 'card-select pb-2', lang: true, link: 'self-end text-sm', info: 'h-fit', name: 'text-2xl max-sm:text-xl', native: 'text-lg max-sm:text-base'}

  return(
    <>
      <div className="flex-col-center max-sm:w-1/2 sm:grow max-w-[25rem]"> 
        <div className="card-select pb-2">
          <ProfileImage siteUrl={person.image.large} height="h-72 sm:h-96"/>
          <ItemInfo person={person} itemStyle={itemStyle} /> 
          <div className="grow"></div>
          <ProfileButton path={type + 's'} id={person.id} buttonStyle="btn--main btn-profile" >
            {type === 'actors' ? 'Profile' : 'Info'}
          </ProfileButton>
          <AniListLink siteUrl={person.siteUrl} linkStyle={itemStyle.link}/>
        </div>
        {children}
      </div>
    </>
  )
}

export default SelectItem