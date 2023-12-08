import { useState } from 'react'
import { Listbox } from '@headlessui/react'


const Dropdown = ({originalLang, chooseLang, type = 'show'}) => {
  const [currentLang, setCurrent] = useState(originalLang)
  const typeText = type === 'show' ? `Origin (${originalLang}) ` : 'Artist Language'
  const allLang = [typeText, 'Japanese', 'English', 'Korean', 'Chinese', 'Spanish',
    'French', 'Italian', 'Portuguese', 'German', 'Hebrew', 'Hungarian'  
  ]

  allLang.splice(allLang.findIndex((a) => a === originalLang), 1)
  const updatedLang = [...(type === 'show' ? allLang : ['All Languages', ...allLang]).map((l, i) => ({id: i, name: l}))]


  
  return(
    <>
      <Listbox value={currentLang} onChange={(e) => {chooseLang(e); setCurrent(e)}}>
        <div className="relative mr-3 self-end w-36 sm:w-40 mb-4"> 
          <Listbox.Button className="flex justify-between border-2 border-slate-500 relative focus-within:ring w-full cursor-default rounded-lg bg-white max-sm:py-1 py-1.5 pl-3 text-slate-700 text-sm shadow"> 
            {currentLang} 
            <span className="bi bi-chevron-expand"> </span>
          </Listbox.Button>
          <Listbox.Options className="border-2 border-zinc-100 z-10 absolute max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {updatedLang.map((lang, id) => (
              <Listbox.Option
                className="relative cursor-default select-none py-2 pl-4 pr-4 ui-selected:bg-slate-300 ui-not-selected:hover:bg-slate-100 ui-selected:text-jet ui-not-selected:text-zinc-700 text-sm"
                key={id}
                value={lang.name === typeText ? originalLang : lang.name}
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

export default Dropdown