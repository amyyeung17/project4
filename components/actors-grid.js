import React, { useMemo, useEffect, useState } from 'react'
import ShowButton from '@/shared/ShowButton'
import StatusText from '@/shared/StatusText'
import { debounce } from 'lodash'

const ActorsGrid = ({children, info}) => {
  const [display, setDisplay] = useState(false)
  const [size, setSize] = useState(3)

  const showRoles = useMemo(() => {
    return ((info.length > size && display || info.length < size + 1) ? info : info.slice(0, size))
  }, [display, info, size])

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
        <div className="flex-col-center overflow-x-hidden">
          <div className="grid-page">
            {React.cloneElement(children, {info: showRoles})}
          </div>
          <div className="px-3 self-end">
            <ShowButton display={display} setDisplay={setDisplay} />
          </div>
        </div>
        :
        <StatusText status="No results" />
      }
    </>
  )
}

export default ActorsGrid