// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { searchQuery, showQuery } from '@/lib/getQuery'
import { fetchHeaders } from '@/lib/getHeaders'
import { getMatchActors, filterMatchActors }from '@/lib/getActors'


export default async function voice(req, res) {
  const { method } = req
  const { selected, searchType } = JSON.parse(req.body)

  switch(method) {
    case 'POST':
      try {
  
        //CHECK! - used headers instead of header, but post through client is header? 
        //https://github.com/postmanlabs/postman-app-support/issues/8211
    
        const firstResponse = await fetch('https://graphql.anilist.co', fetchHeaders({query: (searchType ? showQuery : searchQuery), variables: {id: selected[0].id}}))
        const firstData = await firstResponse.json()
  
        const secondResponse = await fetch('https://graphql.anilist.co', fetchHeaders({query: (searchType ? showQuery : searchQuery), variables: {id: selected[1].id}}))
        const secondData = await secondResponse.json()
        
        if (searchType) {
          res.status(200).json({first: firstData.data.Media, second: secondData.data.Media})
        } else {
          const matchedMedia = getMatchActors({firstVa: firstData.data.Page.staff[0], secondVa: secondData.data.Page.staff[0]})
  
          const filteredMedia = filterMatchActors({shows: [...matchedMedia]} )
      
          res.status(200).json({roles: filteredMedia})
        }
      } catch (err){
        console.log(err)
      }
      break
    default:
      break
  }
}
