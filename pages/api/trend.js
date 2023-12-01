// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { trendActorQuery, trendShowQuery } from '@/lib/getQuery'
import { fetchHeaders } from '@/lib/getHeaders'
import { trendingActors } from '@/lib/getActors'
import { renameShowObj } from '@/lib/getShows'

export default async function trend(req, res) {
  const { method } = req
  
  switch(method) {
    case 'POST':
      
      const { searchType } = JSON.parse(req.body)
     
      const trendResponse = await fetch('https://graphql.anilist.co', fetchHeaders({query: (searchType ? trendShowQuery : trendActorQuery)}))
      const trendData = await trendResponse.json()
    
      if (searchType) {
        res.status(200).json({data: trendData.data.Page.media.map(s => renameShowObj({show: s}))})
      } else {
        res.status(200).json({data: trendingActors({media: trendData.data.Page.media})})
      }

      break
    default:
      break
  }
}
