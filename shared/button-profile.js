import Link from 'next/link'

const ButtonProfile = ({buttonStyle, children, path = 'actors', id}) => {
 
  return(
    <>
      <Link href={`/${path}?id=${id}`} className={`${buttonStyle}`}>  
        {children}
      </Link>
    </>
  )
}

export default ButtonProfile