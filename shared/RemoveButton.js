const RemoveButton = ({text = 'Unselect', index, type, setSelected}) => {
  
  const removeItem = () => 
    setSelected(s => ({...s, [type]: 
      (s[type].length === 1 ?
        []
        :
        (index === 0 ? [s[type][1]] : [s[type][0]])
      )
    }))

  return(
    <>
    <button className="btn--secondary my-1 py-1" onClick={() => removeItem()}> 
      {text}
    </button>
  </>
  )
}

export default RemoveButton