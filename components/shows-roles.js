import ListItem from '@/shared/ListItem'

const MatchResult = ({info}) => {
  const itemStyle = {card: 'card-result', lang: false, link: 'self-center text-sm', info: 'grow mb-2', name: 'text-lg max-sm:text-base', native: 'text-sm max-sm:text-xs'}

  return(
    <>
        <div className="border-2 border-stone-100 flex p-2 w-full">
          <ListItem character={info.chara} itemStyle={itemStyle} />
          <ListItem character={info.va} itemStyle={itemStyle} />
        </div>
    </>
  )
}

export default MatchResult