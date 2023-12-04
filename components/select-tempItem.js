
const SelectTempItem = ({length, text, navFun}) => {
 
  return (
    <>
      {[...Array(2 - length)].map((_, index) => {
        return(
          <div key={"temp" + index} className="flex-col-center max-sm:w-1/2 max-sm:shrink-0 max-w-[25rem] grow"> 
            <div className="card-select justify-center" style={{minHeight: '392px'}}>
              <p className="max-sm:text-2xl text-3xl text-center text-slate-500"> {text} #{length === 0 ? index + 1 : 2}</p>
            </div>
            <button className="btn-add" onClick={() => navFun()}> Add </button>
          </div>
        )})
      }
    </>
  )
}

export default SelectTempItem