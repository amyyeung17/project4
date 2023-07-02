import headers from '@/lib/getHeaders'

export default async function authenticate(req, res) {
  const { method } = req
 
  switch(method) {
    case 'GET':
      try {
        const response = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}&client_secret=${process.env.NEXT_PUBLIC_CLIENT_SECRET}&grant_type=${process.env.NEXT_PUBLIC_GRANT_TYPE}`, {...headers({method: 'POST'})})
        if (!response.ok) {
          throw new Error('Fetch error')
        }
        const data = await response.json()
       
        
        res.status(200).json({access_token: process.env.NEXT_PUBLIC_TOKEN})
      } catch(err) {
        console.log(err)
      }
      break
    default:
      break
  }
}
