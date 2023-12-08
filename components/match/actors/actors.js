import { renameShowObj } from '@/lib/getShows'
import ActorsAdditionalShows from './additional-shows'
import Card from '../../../shared/card-og'
import CardExternal from '@/shared/card-external'
import LinkNative from '@/shared/link-native'


const MatchActors = ({info}) => {

  return(
    <>
      <div className="rounded flex-col-center px-3 py-2">
        <LinkNative info={renameShowObj({show: info.media.nodes[0]})} linkStyle="a-title text-center sm:hidden mb-1 text-xl" nativeStyle="sm:hidden mb-2"/>
        <div className="flex space-evenly w-full px-3 py-2">
          <CardExternal info={info.first} cardStyle="card-result"  width="w-full" divStyle="flex-col-center max-sm:pr-2" />
          <div className="flex-col-center justify-center max-sm:hidden"> 
            <Card info={renameShowObj({show: info.media.nodes[0]})}  />
          </div>
          <CardExternal info={info.second} cardStyle="card-result"  width="w-full" divStyle="flex-col-center max-sm:pl-2"/>
        </div>
        {info.media.nodes.length > 1 &&
          <ActorsAdditionalShows info={info.media.nodes.slice(1, info.media.nodes.length)} />
        }
      </div>
    </>
  )
}

export default MatchActors