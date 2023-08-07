import ListItem from '@/shared/ListItem'

const MatchShows = ({info}) => {
  const itemStyle = {card: 'card-result', lang: false, link: 'self-center text-sm', info: 'grow mb-2', name: 'text-lg max-sm:text-base', native: 'text-sm max-sm:text-xs'}
  return(
    <>
      <div className="flex space-evenly w-full"> 
        <ListItem character={info.chara} itemStyle={itemStyle}/>
        <ListItem character={info.va} itemStyle={itemStyle}/>
        <ListItem character={info.chara2} itemStyle={itemStyle}/>
      </div>
    </>
  )
}

export default MatchShows