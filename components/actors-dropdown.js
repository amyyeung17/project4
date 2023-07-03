import { Listbox } from '@headlessui/react'

const ActorsDropdown = ({originalLang, currentLang, chooseLang}) => {
  const allLang = ['All Languages', 'Artist Language', 'Japanese', 'English', 'Korean', 'Chinese', 'Spanish',
    'French', 'Italian', 'Portuguese', 'German', 'Hebrew', 'Hungarian'  
  ]
  
  allLang.splice(allLang.findIndex((a) => a === originalLang), 1)

  const updatedLang = [...allLang.map((l, i) => ({id: i, name: l}))]
  
  return(
    <>

      <Listbox value={currentLang} onChange={chooseLang}>
        <div className="relative top-16 sm:top-12 mr-3 self-end w-40"> 
          <Listbox.Button className="border-2 border-slate-300 relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"> {currentLang} </Listbox.Button>
          <Listbox.Options className=" z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {updatedLang.map((lang, id) => (
              <Listbox.Option
                className="relative cursor-default select-none py-2 pl-10 pr-4 ui-selected:bg-slate-300 ui-active:bg-slate-100 ui-active:text-jet ui-not-active:text-gray-900"
                key={id}
                value={lang.name === 'Artist Language' ? originalLang : lang.name}
              >
                {lang.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
      
    </>
  )
}

export default ActorsDropdown