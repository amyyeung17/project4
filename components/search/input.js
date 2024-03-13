import { useRef } from 'react'

const SearchInput = ({editInput, isDisabled = false}) => {
  const searchRef = useRef(null)
  const buttonStyle = 'border-y-2 border-r-2 border-slate-300 rounded-e-lg text-slate-700 enabled:hover:bg-slate-100 px-4'
  const inputStyle = 'border-2 border-slate-300 hover:bg-slate-50 px-2 rounded-s-lg w-full'

  return(
    <>
      <div className="flex my-2 rounded-lg shadow w-full sm:w-3/4" >
        <input 
          aria-required="true"
          className={inputStyle}
          disabled={isDisabled} 
          placeholder="Start search with at least the first 3 letters..."
          ref={searchRef}
          type="text"
          onChange={(e) => searchRef.current.value = e.target.value} 
          onKeyDown={(e) => (e.key === 'Enter' && editInput(searchRef.current.value))}
        />
        <button 
          aria-label="Search button"
          className={buttonStyle}
          disabled={isDisabled}  
          onClick={() => editInput(searchRef.current.value)}
        > 
          <span className="bi bi-search"></span> 
        </button>
      </div>
    </>
  )
}

export default SearchInput