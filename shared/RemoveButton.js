const RemoveButton = ({text = 'Unselect for match', index, setSelected}) => {
  
  const removeItem = () => (
    setSelected(s => (
      s.length === 1 ?
      []
      :
      (index === 0 ? [s[1]] : [s[0]])
    )))

  return(
    <>
    <button className="btn--secondary my-1 py-1" onClick={() => removeItem()}> 
      {text}
    </button>
  </>
  )
}

export default RemoveButton