
import { getLangActor } from './getLang'

const filterMatchActors = ({shows}) => {
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
  
  return filterMatchActors({shows: [...matchedMedia]} )
}


export const getMatchShows = ({lang, info}) => {
  const {first, second} = info
  const seenSet = new Set()
  const match = []
  const firstShow = first.characters.edges.map(c => {
    const f = getLangActor({lang, data: c})
    if (f.va.id !== null) {
      seenSet.add(f.va.id)
    }
    return f.va.id !== null ? {id: f.va.id, ...f} : {...f}
  })
 
  second.characters.edges.forEach(c => {
    const fs = getLangActor({lang, data: c})
    if (fs.va.id !== null && seenSet.has(fs.va.id)) {
      match.push({...firstShow.find(f => f.id === fs.va.id), chara2: fs.chara})
    }
  })

  return match
}