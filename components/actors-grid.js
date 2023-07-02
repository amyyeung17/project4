import React, { useMemo, useEffect, useState } from 'react'
import ShowButton from '@/shared/ShowButton'
import { debounce } from 'lodash'


const ActorsGrid = ({children, info, text}) => {
  const [display, setDisplay] = useState(false)
  const [size, setSize] = useState(3)

  const showRoles = useMemo(() => {
    return ((info.length > size && display || info.length < size + 1) ? info : info.slice(0, size))
  }, [display, size])

  useEffect(() => {
    const debounceSize = _.debounce(() => {
      setSize(s => (window.innerWidth > 640 ? 3 : 4))
    }, 50)
    window.addEventListener('resize', debounceSize)

    return () => window.removeEventListener('resize', debounceSize)
  }, [])

  return(
    <>
      {info.length !== 0 ?
        <div className="flex-col-center mt-4 overflow-x-hidden">
          <p className="font-semibold mt-4 mb-1 pl-3 self-start text-2xl"> {text} </p>
          <div className="grid-page">
            {React.cloneElement(children, {info: showRoles})}
          </div>
          <div className="px-3 self-end">
            <ShowButton display={display} setDisplay={setDisplay} />
          </div>
        </div>
        :
        <p className="text-status"> No results </p>
      }
    </>
  )
}

export default ActorsGrid