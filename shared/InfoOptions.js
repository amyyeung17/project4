import { useContext } from 'react'
import { SessionContext } from '@/lib/getContext'
import AddButton from './AddButton'
import RemoveButton from './RemoveButton'


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
          <AddButton addFun={() => getSelected()} isDisabled={selected[type].length === 2}/>
          :
          <RemoveButton index={[...selected[type].map(s => s.id)].indexOf(parseInt(id))} type={type} setSelected={setSelected}/>
          }
        </>
      }
    </>
  )
}

export default InfoOptions