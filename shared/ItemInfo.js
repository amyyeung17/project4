//7/1 - removed w-fit from text
const ItemInfo = ({person, itemStyle}) => {

  return(
    <>
      <div className={`flex-col-center my-1 ${itemStyle.info}`}> 
        <p className={`font-medium leading-snug text-center text-jet ${itemStyle.name}`}> {person.name.full} </p>
        {person.name.native !== null &&
          <p className={`break-keep leading-snug text-zinc-500 ${itemStyle.native}`}> ({person.name.native}) </p>
        }
        {(person.languageV2 !== null && itemStyle.lang) &&
          <p className="text-language"> {person.languageV2} </p>
        }
      </div>
    
    </>
  )
}

export default ItemInfo