import React from 'react'
import { getShowsDate } from '@/lib/getShows'
import ImageProfile from '@/shared/image-profile'
import LinkAnilist from '@/shared/link-anilist'

const ShowsInfo = ({children, info}) => {
  return(
    <>
      <div className="bg-white flex mb-2 w-full">
        <ImageProfile priority siteUrl={info.image.large} height="h-72 sm:h-96" width="w-3/5 sm:w-1/2 md:w-1/3"/> 
        <div className="flex flex-col px-3 sm:pl-3 py-2 w-4/5"> 
          <div className="flex max-sm:items-center justify-between w-full"> 
            <p className="font-medium max-sm:text-2xl text-4xl w-fit"> 
              {info.name.full} 
            </p>
            <LinkAnilist siteUrl={info.siteUrl} hidden linkStyle="self-center text-xl max-sm:text-base" arrowStyle="max-sm:text-base text-lg"/>
          </div>
          {info.synonyms !== null && 
            <span className="font-normal max-sm:text-base text-xl text-slate-500 line-clamp-2 mb-2"> Also known as: {info.synonyms.map((c, index) => c + (index !== info.synonyms.length - 1 ? ', ' : ''))} </span>
          }
          <p className="phone:text-lg font-bold"> <span className="font-normal text-slate-600"> Country of Origin:  </span> {info.countryOfOrigin} </p>
          <p className="phone:text-lg font-bold"> <span className="font-normal text-slate-600"> Number of episodes: </span> {info.episodes} </p>
          <p className="phone:text-lg font-bold"> <span className="font-normal text-slate-600"> Airing Time: </span> {getShowsDate({format: info.format, start: info.startDate})} </p>
          <p className="phone:text-lg font-bold"> <span className="font-normal text-slate-600"> Format: </span> {info.format} </p>
          <p className="max-sm:hidden text-lg"> <span className="text-zinc-500 font-medium"> Genres: </span> {info.genres.map((c, index) => c + (index !== info.genres.length - 1 ? ', ' : ''))} </p>
          <div className="flex self-end justify-end grow items-end max-sm:my-1 sm:w-fit w-full"> 
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default ShowsInfo