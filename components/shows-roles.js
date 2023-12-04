import Card from '@/shared/Card'
import SearchResult from './search-result'

const MatchResult = ({info}) => {

  return(
    <>
        <div className="flex w-full">
          <Card cardStyle="card-result shadow" info={info.chara} divStyle="flex flex-col items-end w-full sm:w-1/2 pr-2"/>
          <div className="flex flex-col items-start w-full sm:w-1/2 pl-2">
            <SearchResult cardStyle="card-result" info={info.va} />
          </div>
        </div>
    </>
  )
}

export default MatchResult