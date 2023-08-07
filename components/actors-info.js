import React, { useMemo } from 'react'
import ProfileImage from '@/shared/ProfileImage'
import Title from '@/shared/Title'
import AniListLink from '@/shared/AniListLink'
const ActorsInfo = ({children, info}) => {

  const charasFilter = useMemo(() => {
    const media = new Set()
    const firstShow = info.characters.nodes.map(show => show.media.nodes.find(s => s.title.english !== null || s.title.native !== null))
    //const updatedShow = typeof(firstShow) === 'undefined' ? info.characters.nodes.map(show => show.media.nodes.find(s => s.title.english !== null || s.title.native !== null)) : firstShow
    
    const filtered = firstShow.filter(fs => {
      if (!media.has(fs.id)) {
        media.add(fs.id)
        return fs
      }
    })
    if (filtered.length > 3 ) {
      const nums = new Set()
      const sampleSongs = []
      while (sampleSongs.length !== 3) {
        const index = Math.floor(Math.random() * filtered.length)
        if (!nums.has(index)) {
          nums.add(index)
          sampleSongs.push(filtered[index])
        }
      }
      return sampleSongs
    }
    return filtered
  }, [info])

  return(
    <>
      <div className="bg-white flex mb-2 w-full">
        <ProfileImage siteUrl={info.image.large} height="h-42" width="w-2/5 sm:w-1/2 md:w-1/3"/> 
        <div className="flex flex-col h-fit px-3 sm:pl-3 py-2 w-4/5"> 
          <div className="flex max-sm:items-center justify-between w-full"> 
            <p className="font-medium max-sm:text-xl text-4xl w-fit"> 
              {info.name.full} 
              {info.name.native !== null && 
                <span className="font-normal max-sm:text-lg text-3xl text-zinc-500 "> ({info.name.native}) </span>
              }
            </p>
            <AniListLink siteUrl={info.siteUrl} hidden linkStyle="self-center text-xl max-sm:text-base" arrowStyle="max-sm:text-base text-lg"/>
          </div>
          <p className="max-sm:text-base text-2xl text-slate-500 text-font mt-1 mb-2"> {info.languageV2} </p>
          <p className="max-sm:text-sm"> <span className="text-slate-500 font-medium"> Age: </span> {info.age} </p>
          <p className="max-sm:text-sm"> <span className="text-slate-500 font-medium"> Hometown: </span> {info.homeTown} </p>
          <p className="max-sm:text-sm"> <span className="text-slate-500 font-medium"> Years Active: </span> {info.yearsActive} </p>
          <p className="max-sm:hidden mt-2 text-slate-500 font-medium"> Featured in: </p>
          <div className="sm:flex"> 
            <div className="max-sm:hidden sm:w-4/5">
              {charasFilter.map((c, index) => (
                <React.Fragment key={index}>
                  <Title show={c} titleStyle="a-title text-start max-sm:text-sm"/>
                </React.Fragment>
              ))}
            </div>
            <div className="flex justify-end items-end max-sm:my-1 sm:w-1/5"> 
              {children}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default ActorsInfo