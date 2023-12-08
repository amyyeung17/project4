
const CardInfo = ({person, itemStyle}) => {
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
          <p className={`text-triadic my-1 ${itemStyle.langStyle}`}> {person.languageV2} </p>
        }
        <p className={`break-words font-semibold line-clamp-2 ${itemStyle.name}`}> 
          {titleBreak()} 
        </p>
        {person.name.native !== null &&
          <p className={`break-all text-slate-600 line-clamp-1 ${itemStyle.native}`}> ({person.name.native}) </p>
        }
      </div>
    
    </>
  )
}

export default CardInfo