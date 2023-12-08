import { Listbox } from '@headlessui/react'


const SearchDropdown = ({current, setOptions}) => {


  
  return(
    <>
      <button className="bi bi-arrow-left-right border-2 border-triadic-200 rounded-full text-sm text-triadic" onClick={() => setOptions()}> {current === 0 ? 'Voice Actors' : 'Titles'} </button>
      {/*<Listbox value={current} onChange={() => setOptions()}>
        <div className="relative max-phone:self-end max-phone:mt-6 w-36 sm:w-40"> 
          <Listbox.Button className="flex justify-between border-2 border-slate-700 relative focus-within:ring w-full cursor-default rounded-lg bg-white py-1.5 pl-3 text-slate-700 text-sm shadow"> 
            {current === 0 ? 'Voice Actors' : 'Titles'} 
            <span className="bi bi-chevron-expand"> </span>
          </Listbox.Button>
          <Listbox.Options className="border-2 border-zinc-100 z-10 absolute max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {['Voice Actors', 'Titles'].map((option, index) => (
              <Listbox.Option
                className="w-full relative cursor-default select-none py-2 pl-4 pr-4 ui-selected:bg-slate-300 ui-not-selected:hover:bg-slate-100 ui-selected:text-jet ui-not-selected:text-zinc-700 text-sm"
                key={index}
                value={index}
              >
                {option}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>*/}
      
    </>
  )
}

export default SearchDropdown