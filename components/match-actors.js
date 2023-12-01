import { renameShowObj } from '@/lib/getShows'
import AniLink from '@/shared/AniLink'
import Card from '@/shared/Card'
import MediaAdditional from './match-additional'
import SearchResult from './search-result'

const MatchActors = ({info}) => {

  return(
    <>
      <div className="rounded flex-col-center px-3 py-2">
        <AniLink info={renameShowObj({show: info.media.nodes[0]})} linkStyle="a-title text-center sm:hidden my-1 text-xl" nativeStyle="sm:hidden"/>
        <div className="media-div">
          <Card info={info.first} cardStyle="card-result" divStyle="flex flex-col items-center md:items-end max-sm:pr-2 max-md:pr-1 w-full" />
          <div className="md:col-span-2 flex-col-center justify-center max-sm:hidden"> 
            <SearchResult info={renameShowObj({show: info.media.nodes[0]})}/>
          </div>
          <Card info={info.second} cardStyle="card-result" divStyle="flex flex-col items-center md:items-start max-sm:pl-2 max-md:pl-1 w-full"/>
        </div>
        {info.media.nodes.length > 1 &&
          <MediaAdditional info={info.media.nodes.slice(1, info.media.nodes.length)} />
        }
      </div>
    </>
  )
}

export default MatchActors