import React, { useMemo, useEffect, useState } from 'react'
import ButtonShow from '@/shared/button-show'
import { debounce } from 'lodash'

const ActorsGrid = ({children, info}) => {
  const [display, setDisplay] = useState(false)
  const [size, setSize] = useState(3)

  const showRoles = useMemo(() => {
    return ((info.length > size && display || info.length < size + 1) ? info : info.slice(0, size))
  }, [display, info, size])

  useEffect(() => {
    setSize(() => (window.innerWidth < 640 ? 2 : (window.innerWidth >= 1024 ? 4 : 3)))
  }, [])

  useEffect(() => {
    const debounceSize = _.debounce(() => {
      setSize(() => (window.innerWidth < 640 ? 2 : (window.innerWidth >= 1024 ? 4 : 3)))
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
            <ButtonShow display={display} setDisplay={setDisplay} />
          </div>
        </div>
        :
         <p className="text-status mt-[6rem]"> No results. Please try again. </p>
      }
    </>
  )
}

export default ActorsGrid