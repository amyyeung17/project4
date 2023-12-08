import { Tab } from '@headlessui/react'

export default function Toggle({current, options, setOptions, itemStyle}) {
  const searchStyle = 'ui-selected:font-semibold py-2 text-sm text-slate-500 ring-white ring-opacity-60 ring-offset-2 ring-offset-slate-400 focus:outline-none hover:font-semibold hover:border-slate-700 ui-selected:text-slate-700 ui-selected:border-slate-700 ui-selected:bg-slate-100 hover:bg-slate-100 hover:text-slate-700 border-2 border-slate-300 rounded-full'
  const otherStyle = 'ui-selected:font-semibold py-1 text-slate-500 ring-white ring-opacity-60 ring-offset-2 ring-offset-slate-400 focus:outline-none hover:font-semibold ui-selected:text-triadic hover:text-triadic '
  return (
    <div className="flex my-2">
      <Tab.Group selectedIndex={current} onChange={(index) => setOptions(index)} >
        <Tab.List className="flex space-x-2 py-1">
          {Object.entries(options).map(([key, category]) => (
            <>
            <Tab
              key={key}
              className={itemStyle === 'search' ? searchStyle : otherStyle}
            >
              {category}
              
            </Tab>
            {(itemStyle !== 'search' && key === "0") && <div className="border-l-2 border-triadic-200 mx-1"></div>}
            </>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  )
}
