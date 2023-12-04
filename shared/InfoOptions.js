import { useContext } from 'react'
import { SessionContext } from '@/lib/getContext'
import { removeItem } from '@/lib/getOptions'

const InfoOptions = ({info, type, id, routeFun}) => {
  const [selected, setSelected] = useContext(SessionContext).choices
  const [prevPath, _] = useContext(SessionContext).prev

  const getSelected = () => {
    const {characters, ...cred} = info
    setSelected(s => ({...s, [type]: [...s[type], cred]}))
    routeFun('/select')
  }
  return(
    <>
      {prevPath !== '/match' &&
        <>
          {![...selected[type].map(s => s.id)].includes(parseInt(id)) ?
            <button className="btn-add" isDisabled={selected[type].length === 2} onClick={() => getSelected()}> Select </button>
          :
            <button className="btn--secondary my-1 py-1" onClick={() => removeItem({index: [...selected[type].map(s => s.id)].indexOf(parseInt(id)), type, setSelected})}> Unselect </button>
          }
        </>
      }
    </>
  )
}

export default InfoOptions