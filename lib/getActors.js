const getLanguage = ({lang, va}) => {
  if (lang === 'All Languages') {
    return va[0]
  }
  const currentVa = va.find(v => v.languageV2 === lang)

  return typeof(currentVa) !== 'undefined' ? currentVa : va[0]
}

export function getActorsShared({lang, vaData}) {
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
    return sortedVa.length > 10 ? sortedVa.slice(1, 11) : sortedVa
  }
  const filteredVa = sortedVa.filter(s => s[1].languageV2 === lang)
  return filteredVa.length > 10 ? filteredVa.slice(1, 11) : filteredVa
}

