const getLanguage = ({lang, va}) => {
  if (lang === 'All Languages') {
    return va[0]
  }
  const currentVa = va.find(v => v.languageV2 === lang)

  return typeof(currentVa) !== 'undefined' ? currentVa : va[0]
}

export function getShared({lang, vaData}) {
  const sharedVa = new Map()
  const editedVaData = vaData.map(s => s.data.Media.characters.edges)
  for(let i = 0; i < editedVaData.length; i++) {
    for (let j = 0; j < editedVaData[i].length; j++) {
      if (editedVaData[i][j].voiceActors.length !== 0) {
        const currentVa = getLanguage({lang, va: editedVaData[i][j].voiceActors})
        if(!sharedVa.has(currentVa.id)) {
          sharedVa.set(currentVa.id, {name: {...currentVa.name}, image: {large: currentVa.image.large}, siteUrl: currentVa.siteUrl, languageV2: currentVa.languageV2, appearances: 1})
        } else {
          const sharedVaCurrent = sharedVa.get(currentVa.id)
          sharedVa.set(currentVa.id, {...sharedVaCurrent, appearances: sharedVaCurrent.appearances + 1 })
        }
      } 
    }
  }
  const sortedVa = [...sharedVa.entries()].sort((a, b) => b[1].appearances - a[1].appearances)
  if (lang === 'All Languages') {

    return sortedVa.length > 11 ? sortedVa.slice(1, 11) : sortedVa
  }
  const filteredVa = sortedVa.filter(s => s[1].languageV2 === lang)
  return filteredVa.length > 11 ? filteredVa.slice(1, 11) : filteredVa
}


export const getMatchActors = ({firstVa, secondVa}) => {
  const matchedMedia = new Map()

  const firstMedia = firstVa.characters.nodes.map(n => [...n.media.nodes.filter(m => !['MUSIC', 'MANGA', 'NOVEL', 'ONE_SHOT'].includes(m.format))])
  const secondMedia = secondVa.characters.nodes.map(n => [...n.media.nodes.filter(m => !['MUSIC', 'MANGA', 'NOVEL', 'ONE_SHOT'].includes(m.format))])

  const secondIds = secondMedia.map(s => (s.map(m => m.id)))
  const matchSet= new Set(secondIds.flat())



  for (let i = 0; i < firstMedia.length; i++ ) {
    for (let j = 0; j < firstMedia[i].length; j++) {
      if (matchSet.has(firstMedia[i][j].id)) {
        const {media, ...firstVaOnly} = firstVa.characters.nodes[i]
        for (let k = 0; k < secondMedia.length; k++) {
          if (secondIds[k].includes(firstMedia[i][j].id)) {
            const {media: secondName, ...secondVaOnly} = secondVa.characters.nodes[k]
            matchedMedia.set(firstMedia[i][j].id, {first: firstVaOnly, second: secondVaOnly, media: {nodes: firstMedia[i][j]}})
            break
          }
        }
      }
    }
  }
  
  return matchedMedia
}


export const filterMatchActors = ({shows}) => {
  const matchShows = new Map()

  for (let i = 0; i < shows.length; i++) {
    if (!matchShows.has(shows[i][1].first.id)) {
      matchShows.set(shows[i][1].first.id, {...shows[i][1], media: {nodes: [shows[i][1].media.nodes]}})
    } else {
      const prev = matchShows.get(shows[i][1].first.id)
      matchShows.set(shows[i][1].first.id, {...prev, media: {nodes: [...prev.media.nodes, shows[i][1].media.nodes]}})
    }
  }

  return [...matchShows].map(m => m[1])
}

