import { useRef } from 'react'

//CHECK! - SSR and document
const SearchInput = ({editInput, isDisabled = false}) => {
  const searchRef = useRef(null)
  const buttonStyle = 'border-y-2 border-r-2 border-slate-300 rounded-e-lg text-slate-700 enabled:hover:bg-slate-100'
  const inputStyle = 'border-2 border-slate-300 hover:bg-slate-50 px-2 rounded-s-lg w-full'
  
  return(
    <>
      <div className="flex my-2 rounded-lg shadow-sm w-3/4" >
        <input 
          className={inputStyle}
          disabled={isDisabled} 
          placeholder="Start searching voice actor names... (ex. Junya Enoki...)"
          ref={searchRef}
          onChange={(e) => searchRef.current.value = e.target.value} 
        />
        <button disabled={isDisabled} className={buttonStyle} onClick={() => editInput(searchRef.current.value)}> Search </button>
      </div>
    </>
  )
}

export default SearchInput