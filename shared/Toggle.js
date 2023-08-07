import { Tab } from '@headlessui/react'


export default function Toggle({searchType, setSearchType}) {
  const type = searchType ? 1 : 0
  return (
    <div className="flex justify-center max-w-md px-2 sm:px-0 w-full">
      <Tab.Group selectedIndex={type} onChange={() => setSearchType(s => !s)} >
        <Tab.List className="w-4/5 flex space-x-1 rounded-xl bg-slate-100 p-1 my-1">
          {['Voice actors', 'Titles'].map((category) => (
            <Tab
              key={category}
              className="w-full rounded-lg py-2 text-base font-medium leading-5 text-slate-500 ring-white ring-opacity-60 ring-offset-2 ring-offset-slate-400 focus:outline-none focus:ring-2 ui-selected:bg-slate-700 ui-selected:shadow ui-selected:text-slate-100 hover:bg-slate-200 hover:text-slate-700"
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  )
}
