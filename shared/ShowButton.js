//CHECK! - does this show if there's no additional? -> no right? 
const ShowButton = ({display, setDisplay, text = ''}) => {

  return(
    <>
      <button className="btn--secondary-0 my-2" onClick={() => setDisplay(d => !d)}>
        {`Show ${display ? 'less' : 'more'} ${text}`} 
        <span className="mx-1"> </span>
        <span className={`bi bi-chevron-${display ? 'up' : 'down'}`}></span> 
      </button>
    </>
  )
}

export default ShowButton