
const ButtonShow = ({display, setDisplay, text = ''}) => {

  return(
    <>
      <button aria-label={`Show ${display ? 'less' : 'more'} ${text}`} className="btn--secondary-0 my-2" onClick={() => setDisplay(d => !d)}>
        {`Show ${display ? 'less' : 'more'} ${text}`} 
        <span className="mx-1"> </span>
        <span className={`bi bi-chevron-${display ? 'up' : 'down'}`}></span> 
      </button>
    </>
  )
}

export default ButtonShow