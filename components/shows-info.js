import React from 'react'
import ProfileImage from '@/shared/ProfileImage'
import AniListLink from '@/shared/AniListLink'
import { getShowDate } from '@/lib/getShows'
const ShowsInfo = ({children, info}) => {
  return(
    <>
      <div className="bg-white flex mb-2 w-full">
        <ProfileImage siteUrl={info.image.large} height="h-42" width="w-2/5 sm:w-1/2 md:w-1/3"/> 
        <div className="flex flex-col h-fit px-3 sm:pl-3 py-2 w-4/5"> 
          <div className="flex max-sm:items-center justify-between w-full"> 
            <p className="font-medium max-sm:text-xl text-4xl w-fit"> 
              {info.name.full} 
            </p>
            <AniListLink siteUrl={info.siteUrl} hidden linkStyle="self-center text-xl max-sm:text-base" arrowStyle="max-sm:text-base text-lg"/>
          </div>
          {info.synonyms !== null && 
            <span className="font-normal max-sm:text-sm text-base text-zinc-500 line-clamp-2 mb-1"> Also known as: {info.synonyms.map((c, index) => c + (index !== info.synonyms.length - 1 ? ', ' : ''))} </span>
          }
          <div className="flex max-sm:flex-col"> 
            <div className="w-full"> 
              <p className="max-sm:text-sm"> <span className="text-slate-500 font-medium"> Country of Origin:  </span> {info.countryOfOrigin} </p>
              <p className="max-sm:text-sm"> <span className="text-slate-500 font-medium"> Number of episodes: </span> {info.episodes} </p>
              <p className="max-sm:text-sm"> <span className="text-slate-500 font-medium"> Airing Time: </span> {getShowDate({format: info.format, start: info.startDate})} </p>
              <p className="max-sm:text-sm"> <span className="text-slate-500 font-medium"> Format: </span> {info.format} </p>
              <p className="max-sm:hidden text-slate-500 font-medium"> Genres: {info.genres.map((c, index) => c + (index !== info.genres.length - 1 ? ', ' : ''))} </p>
            </div>
            <div className="flex justify-end items-end max-sm:my-1 sm:w-fit"> 
              {children}
            </div>
          </div>
        </div>
      
      </div>
    </>
  )
}

export default ShowsInfo