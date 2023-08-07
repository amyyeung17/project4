//CHECK! - does this show if there's no additional? -> no right? 
import Chevron from './Chevron'

const ShowButton = ({display, setDisplay, text = ''}) => {

  return(
    <>
      <button className="btn--secondary-0 " onClick={() => setDisplay(d => !d)}>
        {`Show ${display ? 'less' : 'more'} ${text}`} 
        <span className="mx-1"> </span>
        <Chevron direction={display}/>
      </button>
    </>
  )
}

export default ShowButton