

const acceptType = 'application/json'
const headerOptions = {
  'Accept': acceptType,
  'Content-Type': acceptType
}


const apiHeaders = ({method, info}) => {
  return {method, header: headerOptions, body: JSON.stringify(info)}
}

const fetchHeaders = ({query, variables}) => {
  return(
    {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }, 
      body: JSON.stringify({query, variables})
    }
  )
}

export { apiHeaders, fetchHeaders }
