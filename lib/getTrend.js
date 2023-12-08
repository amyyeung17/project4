export const getTrendActors = ({media}) => {
  const actorsMap = new Map()
  const seenActors = new Set()
  for (let i = 0; i < media.length; i++ ) {
    for (let j = 0; j < media[i].characters.edges.length; j++) {
      for (let k = 0; k <  media[i].characters.edges[j].voiceActors.length; k++) {
        const c = media[i].characters.edges[j].voiceActors[k]
        if (!seenActors.has(c.id)) {
          seenActors.add(c.id)
          actorsMap.set(c.id, {...c, appearances: 1})
        } else {
          const currentActor = actorsMap.get(c.id)
          actorsMap.set(c.id, {...currentActor, appearances: currentActor.appearances + 1})
        }
      }
    }
  }

  const sortedVa = [...actorsMap.entries()].sort((a, b) => b[1].appearances - a[1].appearances)
  return sortedVa.slice(1, 25).map(s => s[1])
}
