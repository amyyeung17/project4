import { searchQuery, showQuery } from '@/lib/getQuery'
import { fetchHeaders } from '@/lib/getHeaders'
import { getMatchActors }from '@/lib/getMatch'
import { getLangOrigin } from '@/lib/getLang'

export default async function voice(req, res) {
  const { method } = req
  const { selected, searchType } = JSON.parse(req.body)

  switch(method) {
    case 'POST':
      try {
    
        const firstResponse = await fetch('https://graphql.anilist.co', fetchHeaders({query: (searchType ? showQuery : searchQuery), variables: {id: selected[0].id}}))
        const firstData = await firstResponse.json()
  
        const secondResponse = await fetch('https://graphql.anilist.co', fetchHeaders({query: (searchType ? showQuery : searchQuery), variables: {id: selected[1].id}}))
        const secondData = await secondResponse.json()
        

        if (searchType) {
          const originalLang = getLangOrigin({origin: firstData.data.Media.countryOfOrigin, charaData: firstData.data.Media.characters})
          res.status(200).json({data: {first: firstData.data.Media, second: secondData.data.Media}, originalLang})
        } else {
          const matchedShows = getMatchActors({firstVa: firstData.data.Page.staff[0], secondVa: secondData.data.Page.staff[0]})
          res.status(200).json({roles: matchedShows})
        }
      } catch (err){
        console.log(err)
      }
      break
    default:
      break
  }
}
