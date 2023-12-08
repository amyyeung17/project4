import CardSelected from '@/shared/card-selected'

const MatchSelection = ({selected, type}) => {
  return(
    <>
      <div className=" max-phone:gap-y-4 flex-evenly max-sm:gap-x-4 my-4 py-3 px-2">
        <CardSelected person={selected[type][0]} type={type} index={0} />
        <CardSelected person={selected[type][1]} type={type} index={1} />
      </div>
    </>
  )
}

export default MatchSelection