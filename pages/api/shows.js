import { showQuery } from '@/lib/getQuery'
import { fetchHeaders } from '@/lib/getHeaders'
import { renameShowObj } from '@/lib/getShows'
import { getLangOrigin } from '@/lib/getLang'
export default async function shows(req, res) {
  const { method } = req
  const { query } = JSON.parse(req.body)

  switch(method) {
    case 'POST':
      try {
        const response = await fetch('https://graphql.anilist.co', fetchHeaders({query: showQuery, variables: {id: query}}))
        const responseData = await response.json()
    
        const renamedShow = renameShowObj({show: responseData.data.Media})
        res.status(200).json({data: renamedShow, originalLang: getLangOrigin({origin: renamedShow.countryOfOrigin, charaData: renamedShow.characters})})
      } catch(err) {
        console.log(err)
      }
    default:
      break
  }
}