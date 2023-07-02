//CHECK! - does this show if there's no additional? -> no right? 
const ShowButton = ({display, setDisplay, text = ''}) => {
  return(
    <>
      <button className="btn--secondary-0" onClick={() => setDisplay(d => !d)}>
        {`Show ${display ? 'less' : 'more'} ${text}`} 
        <span className="mx-1"> </span>
        <span className={display ? 'bi bi-chevron-up' : 'bi bi-chevron-down'}></span> 
      </button>
    </>
  )
}

export default ShowButton