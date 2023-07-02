
import ListItem from '@/shared/ListItem'
import ProfileButton from '@/shared/ProfileButton'
//Check! - https://stackoverflow.com/questions/67185279/react-jsx-in-a-variable-vs-a-function-vs-a-separate-component

const SelectItem = ({children, height = 'h-52', person}) => {
  
  return(
    <>
      <div className="flex-col-center max-sm:w-1/2 max-sm:shrink-0 grow"> 
        <ListItem character={person} height={height} cardStyle="card-select" langState nameStyle="text-3xl" nativeStyle="text-2xl" language={person.languageV2}>
          <ProfileButton id={person.id} buttonStyle="btn--main px-3 py-2" />
        </ListItem>
        {children}
      </div>
    </>
  )
}

export default SelectItem