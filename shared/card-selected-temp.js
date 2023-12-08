

const CardSelectedTemp = ({length, text}) => {
 
  return (
    <>
      {[...Array(2 - length)].map((_, index) => {
        return(
          <div key={"temp" + index} className="max-phone:flex-row flex-col-center max-sm:w-1/2  max-sm:shrink-0 max-phone:w-full max-w-[25rem] grow"> 
            <div className="card-select h-1/2 max-phone:items-center justify-center sm:max-h-[33.5rem] max-phone:min-h-[11rem] phone:min-h-[25.25rem] max-sm:max-h-[27rem]">
              <p className="max-sm:text-2xl text-3xl text-center h-fit text-slate-500"> {text} #{length === 0 ? index + 1 : 2}</p>
            </div>
          </div>
        )})
      }
    </>
  )
}

export default CardSelectedTemp