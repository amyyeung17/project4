import { trendActorQuery, trendShowQuery } from '@/lib/getQuery'
import { fetchHeaders } from '@/lib/getHeaders'
import { getTrendActors } from '@/lib/getTrend'
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
        res.status(200).json({data: getTrendActors({media: trendData.data.Page.media})})
      }

      break
    default:
      break
  }
}
