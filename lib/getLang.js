export const getLangOrigin = ({origin, charaData}) => {
  const originCode = {'JP' : 'Japanese', 'US' : 'English', 'CA': 'English', 'KR': 'Korean', 'CN': 'Chinese', 
   'HK': 'Chinese', 'TW': 'Chinese', 'ES' : 'Spanish', 'MX' : 'Spanish', 'FR' : 'French', 'IT' : 'Italian', 'PT' : 'Portguese',
   'DE': 'German', 'IL' : 'Hebrew', 'HU': 'Hungarian'}
 
   return (origin in originCode ? originCode[origin] : charaData.edges[0].voiceActors.languagev2)
 }

 export const getLangActor = ({lang, data}) => {
  const naImage = 'https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg'
  const emptyVa = {name: {full: 'No available VA info in language', native: null}, image: {large: naImage}, languageV2: null, id: null}
  const findVa = data.voiceActors.find(v => v.languageV2 === lang)
  return {chara: data.node, va: (typeof(findVa) !== 'undefined' ? findVa : emptyVa)}
}

 