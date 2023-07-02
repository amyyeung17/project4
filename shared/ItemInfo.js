//7/1 - removed w-fit from text
const ItemInfo = ({person, divStyle = 'grow', nameStyle, nativeStyle, langState}) => {
  return(
    <>
      <div className={`flex-col-center my-1 ${divStyle}`}> 
        <p className={`font-medium leading-snug text-center text-jet ${nameStyle}`}> {person.name.full} </p>
        {person.name.native !== null &&
          <p className={`break-keep leading-snug text-zinc-500 ${nativeStyle}`}> ({person.name.native}) </p>
        }
        {(person.languageV2 !== null && langState) &&
          <p className="text-language"> {person.languageV2} </p>
        }
      </div>
    
    </>
  )
}

export default ItemInfo