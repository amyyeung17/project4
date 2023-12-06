//7/1 - removed w-fit from text
const ItemInfo = ({person, itemStyle}) => {
  const titleBreak =  () => {
    if (person.name.full.length > 18) {
      const n = person.name.full.indexOf('(')
      if (n !== -1 && n !== 1 && (person.name.full[n - 1] !== ' ')) {
        return person.name.full.slice(0, n) + ' ' +  person.name.full.slice(n, person.name.length)
      }
    }
    return person.name.full
  }
  return(
    <>
      <div className={`flex flex-col p-2 max-phone:justify-center ${itemStyle.info}`}> 
        {(person.languageV2 !== null && itemStyle.lang) &&
            <p className="text-triadic my-1 text-sm"> {person.languageV2} </p>
        }
        <p className={`break-words font-semibold text-slate-800 line-clamp-2 ${itemStyle.name}`}> 
          {titleBreak()} 
        </p>
        {person.name.native !== null &&
          <p className={`break-all  line-clamp-1 ${itemStyle.native}`}> ({person.name.native}) </p>
        }
      </div>
    
    </>
  )
}

export default ItemInfo