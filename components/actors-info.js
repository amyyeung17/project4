import React, { useMemo } from 'react'
import ProfileImage from '@/shared/ProfileImage'
import AniLink from '@/shared/AniLink'
import AniListLink from '@/shared/AniListLink'
import { renameShowObj } from '@/lib/getShows'
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
      const sampleShows = []
      while (sampleShows.length !== 3) {
        const index = Math.floor(Math.random() * filtered.length)
        if (!nums.has(index)) {
          nums.add(index)
          sampleShows.push(filtered[index])
        }
      }
      return sampleShows
    }
    return filtered
  }, [info])

  return(
    <>
      <div className="bg-white flex mb-2 w-full">
        <ProfileImage siteUrl={info.image.large} height="h-72 sm:h-96" width="w-2/5 sm:w-1/2 md:w-1/3"/> 
        <div className="flex flex-col px-3 sm:pl-3 py-2 w-4/5"> 
          <div className="flex max-sm:items-center justify-between w-full"> 
            <p className="font-medium max-sm:text-2xl text-4xl w-fit"> 
              {info.name.full} 
              {info.name.native !== null && 
                <span className="font-normal max-sm:text-lg text-3xl text-zinc-500 "> ({info.name.native}) </span>
              } 
            </p> 
            <AniListLink siteUrl={info.siteUrl} hidden linkStyle="self-center text-xl max-sm:text-base" arrowStyle="max-sm:text-base text-lg"/>
          </div>
          <p className="max-sm:text-xl text-2xl text-slate-500 mt-1 mb-2"> {info.languageV2} </p>
          <p> <span className="text-zinc-500 font-medium"> Age: </span> {info.age} </p>
          <p> <span className="text-zinc-500 font-medium"> Hometown: </span> {info.homeTown} </p>
          <p> <span className="text-zinc-500 font-medium"> Years Active: </span> {info.yearsActive} </p>
          <p className="max-sm:hidden mt-2 text-zinc-500 font-medium"> Featured in: </p>
          <div className="max-sm:hidden flex flex-col"> 
            <div className="max-sm:hidden sm:w-4/5">
              {charasFilter.map((c, index) => (
                <React.Fragment key={index}>
                  <AniLink info={renameShowObj({show: c})} linkStyle="a-title text-start max-sm:text-sm my-1" native="mx-2 mb-2"/>
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="flex justify-end h-full grow items-end max-sm:my-1 w-full"> 
            {children}
          </div>

        </div>
      </div>
    </>
  )
}

export default ActorsInfo