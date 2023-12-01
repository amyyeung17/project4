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


export const getActorsOrigin = ({origin, charaData}) => {
 const originCode = {'JP' : 'Japanese', 'US' : 'English', 'CA': 'English', 'KR': 'Korean', 'CN': 'Chinese', 
  'HK': 'Chinese', 'TW': 'Chinese', 'ES' : 'Spanish', 'MX' : 'Spanish', 'FR' : 'French', 'IT' : 'Italian', 'PT' : 'Portguese',
  'DE': 'German', 'IL' : 'Hebrew', 'HU': 'Hungarian'}

  return (origin in originCode ? originCode[origin] : charaData.edges[0].voiceActors.languagev2)
}

export const getShowDate = ({format, start, end}) => {
  const actual = new Intl.DateTimeFormat('en-US', {year: "numeric", month: "long", day: "numeric",}).format(new Date(start.year + '-' + start.month + '-' + start.day))
  return actual
}

export const findActor = ({lang, data}) => {
  const naImage = 'https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg'
  const emptyVa = {name: {full: 'No available VA info in language', native: null}, image: {large: naImage}, languageV2: null, id: null}
  const findVa = data.voiceActors.find(v => v.languageV2 === lang)
  return {chara: data.node, va: (typeof(findVa) !== 'undefined' ? findVa : emptyVa)}
}

export const findActorsLang = ({lang, info} ) => {
  return info.characters.edges.map(c => findActor({lang, data: c}))
}

export const getMatchShows = ({lang, info}) => {
  const {first, second} = info
  const seenSet = new Set()
  const match = []
  const firstShow = first.characters.edges.map(c => {
    const f = findActor({lang, data: c})
    if (f.va.id !== null) {
      seenSet.add(f.va.id)
    }
    return f.va.id !== null ? {id: f.va.id, ...f} : {...f}
  })
 
  second.characters.edges.forEach(c => {
    const fs = findActor({lang, data: c})
    if (fs.va.id !== null && seenSet.has(fs.va.id)) {
      match.push({...firstShow.find(f => f.id === fs.va.id), chara2: fs.chara})
    }
  })

  return match
}