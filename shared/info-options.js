import { useContext } from 'react'
import { SessionContext } from '@/lib/getContext'
import removeItems from '@/lib/removeItems'

const InfoOptions = ({info, type, id, routeFun}) => {
  const [selected, setSelected] = useContext(SessionContext).choices
  const [prevPath, _] = useContext(SessionContext).prev

  const getSelected = () => {
    const {characters, ...cred} = info
    setSelected(s => ({...s, [type]: [...s[type], cred]}))
    routeFun('/search')
  }
  return(
    <>
      {prevPath !== '/match' &&
        <>
          {![...selected[type].map(s => s.id)].includes(parseInt(id)) ?
            <button aria-label="Select for match" className="btn-add" isdisabled={(selected[type].length === 2).toString()} onClick={() => getSelected()}> Select </button>
          :
            <button aria-label="Unselect for match" className="btn--secondary-sm my-1 py-1" onClick={() => removeItems({index: [...selected[type].map(s => s.id)].indexOf(parseInt(id)), type, setSelected})}> Unselect </button>
          }
        </>
      }
    </>
  )
}

export default InfoOptions