
import AddButton from '@/shared/AddButton'

const SelectTempItem = ({length, navFun}) => {
  return (
    <>
      {[...Array(2 - length)].map((_, index) => {
        return(
          <div key={"temp" + index} className="flex-col-center max-sm:w-1/2 max-sm:shrink-0 grow"> 
            <div className="card-select justify-center" style={{minHeight: '392px'}}>
              <p className="max-sm:text-3xl text-4xl text-center text-slate-500"> Voice actor #{length === 0 ? index + 1 : 2}</p>
            </div>
            <AddButton text="Add" addFun={navFun} />
          </div>
        )})
      }
    </>
  )
}

export default SelectTempItem