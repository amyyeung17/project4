import Link from 'next/link'
//{path === 'actors' ? 'Profile' : 'Info'}
const ProfileButton = ({buttonStyle, children, path = 'actors', id}) => {
 
  return(
    <>
      <Link href={`/${path}?id=${id}`} className={`${buttonStyle}`}>  
        {children}
      </Link>
    </>
  )
}

export default ProfileButton