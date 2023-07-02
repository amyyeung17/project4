// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { searchQuery } from '@/lib/getQuery'
import { fetchHeaders } from '@/lib/getHeaders'

export default async function voice(req, res) {
  const { method } = req
  const { searchInput } = JSON.parse(req.body)

  switch(method) {
    case 'POST':
      try {
  
        //CHECK! - used headers instead of header, but post through client is header? 
        //https://github.com/postmanlabs/postman-app-support/issues/8211
        const response = await fetch('https://graphql.anilist.co', fetchHeaders({query: searchQuery, variables: {search: searchInput}}))
        const responseData = await response.json()
        res.status(200).json(responseData.data)

      } catch (err){
        console.log('error!')
        console.log(err)
      }
      break
    default:
      break
  }
}
