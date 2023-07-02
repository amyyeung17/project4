// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { searchQuery } from '@/lib/getQuery'
import { fetchHeaders } from '@/lib/getHeaders'
import { getMatch, filterMatch }from '@/lib/getMatch'

export default async function voice(req, res) {
  const { method } = req
  const { selected } = JSON.parse(req.body)

  switch(method) {
    case 'POST':
      try {
  
        //CHECK! - used headers instead of header, but post through client is header? 
        //https://github.com/postmanlabs/postman-app-support/issues/8211
        const firstResponse = await fetch('https://graphql.anilist.co', fetchHeaders({query: searchQuery, variables: {id: selected[0].id}}))
        const firstData = await firstResponse.json()
        const secondResponse = await fetch('https://graphql.anilist.co', fetchHeaders({query: searchQuery, variables: {id: selected[1].id}}))
        const secondData = await secondResponse.json()

        const matchedMedia = getMatch({firstVa: firstData.data.Page.staff[0], secondVa: secondData.data.Page.staff[0]})
        const filteredMedia  = filterMatch({shows: [...matchedMedia]} )
   
       
        res.status(200).json({roles: filteredMedia})

      } catch (err){
        console.log('error!')
        console.log(err)
      }
      break
    default:
      break
  }
}
