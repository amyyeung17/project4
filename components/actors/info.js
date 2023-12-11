import React, { useMemo } from 'react'
import ImageProfile from '@/shared/image-profile'
import LinkAnilist from '@/shared/link-anilist'
import LinkNative from '@/shared/link-native'
import { renameShowObj } from '@/lib/getShows'
const ActorsInfo = ({children, info}) => {

  const charasFilter = useMemo(() => {
    const media = new Set()
    const firstShow = info.characters.nodes.map(show => show.media.nodes.find(s => s.title.english !== null || s.title.native !== null))
    
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
        <ImageProfile priority siteUrl={info.image.large} height="h-72 sm:h-96" width="w-2/5 sm:w-1/2 md:w-1/3"/> 
        <div className="flex flex-col px-3 sm:pl-3 py-2 w-3/5 phone:w-4/5"> 
          <div className="flex max-sm:items-center justify-between w-full"> 
            <p className="max-phone:flex max-phone:flex-col max-sm:text-2xl text-4xl w-fit"> 
              {info.name.full} 
              {info.name.native !== null && 
                <span className="whitespace-nowrap max-sm:text-xl text-3xl text-jet-light"> ({info.name.native}) </span>
              } 
            </p> 
            <LinkAnilist siteUrl={info.siteUrl} hidden linkStyle="self-center text-xl max-sm:text-base" arrowStyle="max-sm:text-base text-lg"/>
          </div>
          <p className="max-sm:text-xl text-2xl text-triadic my-1"> {info.languageV2} </p>
          {Object.entries({'age' : 'Age: ', 'homeTown' : 'Hometown: ', 'yearsActive': 'Years Active: '}).map(([key, val]) => (
              <React.Fragment key={key}> 
                {(!(info[key] === null || (Array.isArray(info[key]) && info[key].length === 0))) &&
                <p className="phone:text-lg font-medium"> <span className="font-normal text-jet-light"> {val} </span> {info[key]} </p>}
              </React.Fragment>
          ))}
          <p className="max-sm:hidden phone:text-lg text-jet-light"> Featured in: </p>
          <div className="max-sm:hidden sm:w-4/5">
            {charasFilter.map((c, index) => (
              <React.Fragment key={index}>
                <LinkNative info={renameShowObj({show: c})} linkStyle="a-title text-start max-sm:text-sm my-1" nativeStyle="mb-1"/>
              </React.Fragment>
            ))}
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