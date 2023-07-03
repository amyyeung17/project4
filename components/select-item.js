
import ListItem from '@/shared/ListItem'
import ProfileButton from '@/shared/ProfileButton'
//Check! - https://stackoverflow.com/questions/67185279/react-jsx-in-a-variable-vs-a-function-vs-a-separate-component

const SelectItem = ({children, height = 'h-52', person}) => {
  const itemStyle = {card: 'card-select', lang: true, link: 'self-end text-sm', info: 'h-fit', name: 'text-3xl', native: 'text-2xl'}
  return(
    <>
      <div className="flex-col-center max-sm:w-1/2 max-sm:shrink-0 grow"> 
        <ListItem character={person} height={height} itemStyle={itemStyle}>
          <ProfileButton id={person.id} buttonStyle="btn--main px-3 py-2" />
        </ListItem>
        {children}
      </div>
    </>
  )
}

export default SelectItem