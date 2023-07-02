export default function getShared({vaData}) {
  const sharedVa = new Map()
  const editedVaData = vaData.map(s => s.data.Media.characters.edges)
  for(let i = 0; i < editedVaData.length; i++) {
    for (let j = 0; j < editedVaData[i].length; j++) {
      if (editedVaData[i][j].voiceActors.length !== 0) {
        const currentVa = editedVaData[i][j].voiceActors[0]
        if(!sharedVa.has(currentVa.id)) {
          sharedVa.set(currentVa.id, {name: {...currentVa.name}, image: {medium: currentVa.image.medium}, siteUrl: currentVa.siteUrl, languageV2: currentVa.languageV2, appearances: 1})
        } else {
          const sharedVaCurrent = sharedVa.get(currentVa.id)
          sharedVa.set(currentVa.id, {...sharedVaCurrent, appearances: sharedVaCurrent.appearances + 1 })
        }
      } 
    }
  }
 
  const sortedVa = [...sharedVa.entries()].sort((a, b) => b[1].appearances - a[1].appearances).slice(1, 11)

  return sortedVa
}