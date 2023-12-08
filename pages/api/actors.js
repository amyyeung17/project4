import throttledQueue from "throttled-queue"
import { actorQuery, similarQuery } from '@/lib/getQuery'
import { fetchHeaders } from '@/lib/getHeaders'

export default async function actors(req, res) {
  const { method } = req
  const { query } = JSON.parse(req.body)

  switch(method) {
    case 'POST':
      try {
        const throttled = throttledQueue(5, 1000, true)
        const response = await fetch('https://graphql.anilist.co', fetchHeaders({query: actorQuery, variables: {id: query}}))
        const responseData = await response.json()
        const filteredItems = responseData.data.Staff.characters.nodes.map(n => [...n.media.nodes.filter(m => !['MUSIC', 'MANGA', 'NOVEL', 'ONE_SHOT'].includes(m.format))][0]).slice(0, 15)
          const getCharas = async({id}) => {
            const charaResponse = await fetch('https://graphql.anilist.co', fetchHeaders({query: similarQuery, variables: {id}}))
            const charaJson = await charaResponse.json()
            return charaJson
          }
         
          const charas = await Promise.all(filteredItems.map((show) => throttled(() => getCharas({id: show.id}))))
          
          //res.status(200).json({staff: testObject, shared: testArray})
    
          res.status(200).json({staff: responseData.data.Staff, shared: charas})
      } catch(err) {
        console.log(err)
      }
    default:
      break
  }
}