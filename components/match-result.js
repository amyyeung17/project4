import MediaAdditional from './match-additional'
import Media from './match-media'
import Title from '@/shared/Title'
import ListItem from '@/shared/ListItem'

const MatchResult = ({info}) => {
  const divStyle = 'md:col-span-2 flex-col-center justify-center max-sm:hidden'

  return(
    <>
      <div className="flex-col-center px-3 py-2">
        <Title show={info.media.nodes[0]} titleStyle="a-title sm:hidden my-1 text-2xl" />
        <div className="flex justify-evenly sm:grid-cols-3 sm:grid md:grid-cols-4 px-3 pt-2 pb-1 mb-1 w-full">
          <ListItem character={info.first} cardStyle="card-result" linkStyle="self-center text-sm" />
          <Media show={info.media.nodes[0]} divStyle={divStyle} height="h-60" titleStyle="a-title mt-2 text-lg"/>
          <ListItem character={info.second} cardStyle="card-result" linkStyle="self-center text-sm" />
        </div>
        {info.media.nodes.length > 1 &&
          <MediaAdditional info={info.media.nodes.slice(1, info.media.nodes.length)} />
        }
      </div>
    </>
  )
}

export default MatchResult