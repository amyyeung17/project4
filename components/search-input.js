import { useRef } from 'react'
//CHECK! - SSR and document
const SearchInput = ({editInput, isDisabled = false}) => {
  const searchRef = useRef(null)
  const buttonStyle = 'border-y-2 border-r-2 border-slate-300 rounded-e-lg text-slate-700 enabled:hover:bg-slate-100 px-4'
  const inputStyle = 'border-2 border-slate-300 hover:bg-slate-50 px-2 rounded-s-lg w-full'

  return(
    <>
      <div className="flex my-2 rounded-lg shadow w-full sm:w-3/4" >
        <input 
          className={inputStyle}
          disabled={isDisabled} 
          placeholder="Start search with at least the first 3 letters..."
          ref={searchRef}
          onChange={(e) => searchRef.current.value = e.target.value} 
        />
        <button disabled={isDisabled} className={buttonStyle} onClick={() => editInput(searchRef.current.value)}> <span className="bi bi-search"></span> </button>
      </div>
    </>
  )
}

export default SearchInput