const AddButton = ({text = 'Select to match', addFun, isDisabled = false}) => {
  return(
    <>
      <button className="btn-add" onClick={addFun} disabled={isDisabled}>  
        {text}
      </button>
    </>
  )
}

export default AddButton