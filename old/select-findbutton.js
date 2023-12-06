
import Link from 'next/link'

const SelectFindButton = ({length}) => {

  return(
    <>
      {length !== 2 ?
        <button className="btn-match" disabled> Find matches </button>
        :
        <Link className="btn-match" href="/match"> Find matches </Link> 
      }
    </>
  )
}

export default SelectFindButton