import { getLangActor } from './getLang'

export const renameShowObj = ({show}) => {
  const {english, ...na} = show.title
  const {coverImage, title, ...updated} = show
  if (english !== null) {
    na['full'] = english 
    if (english === na.native) {
      na.native = null
    }
  } else {
    na['full'] = na.native
    if (na.romaji !== null) {
      na.native = na.romaji
    } else {
      na.native = null
    }
  }
  
  return {...updated, name: na, image: coverImage, type: 'show'}
}


export const getShowsDate = ({format, start, end}) => {
  if (start.year === null || start.month === null || start.day === null) {
    return 'N/A'
  }
  const actual = new Intl.DateTimeFormat('en-US', {year: "numeric", month: "long", day: "numeric",}).format(new Date(start.year + '-' + start.month + '-' + start.day))
  return actual
}

export const getShowsActorsLang = ({lang, info} ) => {
  return info.characters.edges.map(c => getLangActor({lang, data: c}))
}

