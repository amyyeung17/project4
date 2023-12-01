import Card from '@/shared/Card'
import SearchResult from './search-result'

const MatchShows = ({info}) => {

  return(
    <>
      <div className="flex space-evenly w-full"> 
        <Card cardStyle="card-result" info={info.chara} />
        <SearchResult info={info.va}/>
        <Card cardStyle="card-result" info={info.chara2} />
      </div>
    </>
  )
}

export default MatchShows