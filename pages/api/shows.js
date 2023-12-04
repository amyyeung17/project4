import { showQuery } from '@/lib/getQuery'
import { fetchHeaders } from '@/lib/getHeaders'
//import testObject from '@/lib/testObject'
//import testArray from '@/lib/testArray'
import { renameShowObj } from '@/lib/getShows'
export default async function shows(req, res) {
  const { method } = req
  const { query } = JSON.parse(req.body)

  switch(method) {
    case 'POST':
      try {
        const response = await fetch('https://graphql.anilist.co', fetchHeaders({query: showQuery, variables: {id: query}}))
        const responseData = await response.json()
        //res.status(200).json({staff: testObject, shared: testArray})
        res.status(200).json(renameShowObj({show: responseData.data.Media}))
      } catch(err) {
        console.log(err)
      }
    default:
      break
  }
}