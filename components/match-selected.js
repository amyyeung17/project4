import SelectItem from '@/components/select-item'

const MatchSelected = ({selected, type}) => {
  return(
    <>
      <div className="flex-evenly max-sm:gap-x-4 my-4 py-3 px-2">
        <SelectItem person={selected[type][0]} type={type} height="h-40 sm:h-48" index={0} />
        <SelectItem person={selected[type][1]} type={type} height="h-40 sm:h-48" index={1} />
      </div>
    </>
  )
}

export default MatchSelected