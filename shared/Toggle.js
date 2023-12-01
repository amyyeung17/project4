import { Tab } from '@headlessui/react'

//w-full py-2 text-base font-medium leading-5 text-slate-500 ring-white ring-opacity-60 ring-offset-2 ring-offset-slate-400 focus:outline-none hover:border-slate-700 ui-selected:text-slate-700 ui-selected:border-slate-700 hover:bg-slate-50 hover:text-slate-700 border-b-2 border-transparent
//w-full rounded-xl py-2 text-base font-medium leading-5 text-slate-500 ring-white ring-opacity-60 ring-offset-2 ring-offset-slate-400 focus:outline-none focus:ring-2 ui-selected:bg-slate-700 ui-selected:shadow ui-selected:text-slate-100 hover:bg-slate-200 hover:text-slate-700
//w-1/2 rounded-lg p-1 text-base font-medium leading-5 text-slate-500 ring-white ring-opacity-60 ring-offset-2 ring-offset-slate-400 focus:outline-none focus:ring-2 ui-selected:bg-slate-700 ui-selected:shadow ui-selected:border-slate-700 ui-selected:text-slate-100 hover:bg-slate-200 hover:text-slate-700 border-2 border-slate-100
//w-1/2 max-w-[7.5rem] py-2 text-base font-medium leading-5 text-slate-500 ring-white ring-opacity-60 ring-offset-2 ring-offset-slate-400 focus:outline-none hover:border-slate-700 ui-selected:text-slate-700  ui-selected:border-slate-700 hover:bg-slate-50 hover:text-slate-700 border-b-2 border-transparent
//text-sm w-1/2 max-w-[7.5rem] py-1 text-base font-medium rounded-lg leading-5 text-slate-500 ring-white ring-opacity-60 ring-offset-2 ring-offset-slate-400 focus:outline-none hover:border-slate-700  ui-selected:bg-slate-100 ui-selected:text-slate-700  ui-selected:border-slate-700 hover:bg-slate-50 hover:text-slate-700 border-2 border-slate-300
export default function Toggle({searchType, setSearchType, divStyle}) {
  const type = searchType ? 1 : 0
  return (
    <div className={`flex mb-2 w-full sm:w-3/4 ${divStyle}`}>
      <Tab.Group selectedIndex={type} onChange={() => setSearchType(s => !s)} >
        <Tab.List className="flex space-x-2 rounded-xl py-1 mb-1">
          {['Voice actors', 'Titles'].map((category) => (
            <Tab
              key={category}
              className="w-[7.5rem] py-2 text-base font-medium leading-5 text-slate-500 ring-white ring-opacity-60 ring-offset-2 ring-offset-slate-400 focus:outline-none hover:border-slate-700 ui-selected:text-slate-700  ui-selected:border-slate-700 ui-selected:bg-slate-100 hover:bg-slate-50 hover:text-slate-700 border-b-2 border-slate-300"
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  )
}
