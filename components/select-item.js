
import ListItem from '@/shared/ListItem'
import ProfileButton from '@/shared/ProfileButton'
//Check! - https://stackoverflow.com/questions/67185279/react-jsx-in-a-variable-vs-a-function-vs-a-separate-component

const SelectItem = ({children, height = 'h-52', type,  person}) => {
  const itemStyle = {card: 'card-select', lang: true, link: 'self-end text-sm', info: 'h-fit', name: 'text-2xl max-sm:text-xl', native: 'text-xl max-sm:text-base'}

  return(
    <>
      <div className="flex-col-center max-sm:w-1/2 sm:grow"> 
        <ListItem character={person} height={height} itemStyle={itemStyle}>
          <div className="grow"></div>
          <ProfileButton path={type + 's'} id={person.id} buttonStyle="btn--main" />
        </ListItem>
        {children}
      </div>
    </>
  )
}

export default SelectItem