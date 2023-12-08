import { searchQuery, searchShowQuery } from '@/lib/getQuery'
import { fetchHeaders } from '@/lib/getHeaders'
import { renameShowObj } from '@/lib/getShows'


export default async function search(req, res) {
  const { method } = req
  const { searchInput, searchType } = JSON.parse(req.body)

  switch(method) {
    case 'POST':
      try {
        const response = await fetch('https://graphql.anilist.co', fetchHeaders({query: (searchType ? searchShowQuery : searchQuery), variables: {search: searchInput}}))
        const responseData = await response.json()
        if (searchType) {
          const updatedData = responseData.data.Page.media.map(r => renameShowObj({show: r}))
          res.status(200).json(updatedData)
        } else {
          const filteredData = responseData.data.Page.staff.filter(va => va.characters.nodes.length !== 0)
          res.status(200).json(filteredData)
        }

      } catch (err){
        console.log(err)
      }
      break
    default:
      break
  }
}
