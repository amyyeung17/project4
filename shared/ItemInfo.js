//7/1 - removed w-fit from text
const ItemInfo = ({person, itemStyle}) => {
  return(
    <>
      <div className={`flex-col-center my-1 ${itemStyle.info}`}> 
        <p className={`leading-snug text-center text-jet font-bold ${itemStyle.name}`}> {person.name.full} </p>
        {person.name.native !== null &&
          <p className={`break-keep leading-snug text-zinc-500 text-center line-clamp-2 ${itemStyle.native}`}> ({person.name.native}) </p>
        }
        {(person.languageV2 !== null && itemStyle.lang) &&
          <p className="text-language text-font"> {person.languageV2} </p>
        }
      </div>
    
    </>
  )
}

export default ItemInfo