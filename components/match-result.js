import MediaAdditional from './match-additional'
import Media from './match-media'
import Title from '@/shared/Title'
import ListItem from '@/shared/ListItem'

const MatchResult = ({info}) => {
  const divStyle = 'md:col-span-2 flex-col-center justify-center max-sm:hidden'
  const itemStyle = {card: 'card-result', lang: false, link: 'self-center text-sm', info: 'h-fit mb-2', name: 'text-lg', native: 'text-sm'}
  return(
    <>
      <div className="flex-col-center px-3 py-2">
        <Title show={info.media.nodes[0]} titleStyle="a-title sm:hidden my-1 text-2xl" />
        <div className="flex justify-evenly sm:grid-cols-3 sm:grid md:grid-cols-4 px-3 pt-2 pb-1 mb-1 w-full">
          <ListItem character={info.first} itemStyle={itemStyle} />
          <Media show={info.media.nodes[0]} divStyle={divStyle} height="h-60" titleStyle="a-title mt-2 text-lg" />
          <ListItem character={info.second} itemStyle={itemStyle} />
        </div>
        {info.media.nodes.length > 1 &&
          <MediaAdditional info={info.media.nodes.slice(1, info.media.nodes.length)} />
        }
      </div>
    </>
  )
}

export default MatchResult