import MediaAdditional from './match-additional'
import Media from './match-media'
import Title from '@/shared/Title'
import ListItem from '@/shared/ListItem'

const MatchActors = ({info}) => {
  const divStyle = 'md:col-span-2 flex-col-center justify-center max-sm:hidden'
  const itemStyle = {card: 'card-result', lang: false, link: 'self-center text-sm', info: 'h-fit mb-2', name: 'text-lg', native: 'text-sm'}
  
  return(
    <>
      <div className="rounded flex-col-center px-3 py-2">
        <Title show={info.media.nodes[0]} titleStyle="a-title text-center sm:hidden my-1 text-xl" />
        <div className="media-div">
          < character={info.first} itemStyle={itemStyle} height="h-40" />
          <Media show={info.media.nodes[0]} divStyle={divStyle} height="h-60" titleStyle="a-title text-center mt-2 text-lg" />
          <ListItem character={info.second} itemStyle={itemStyle} height="h-40" />
        </div>
        {info.media.nodes.length > 1 &&
          <MediaAdditional info={info.media.nodes.slice(1, info.media.nodes.length)} />
        }
      </div>
    </>
  )
}

export default MatchActors