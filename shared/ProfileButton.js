import Link from 'next/link'

const ProfileButton = ({buttonStyle, path = 'actors', id}) => {
 
  return(
    <>
      <Link href={`/${path}?id=${id}`} className={`${buttonStyle} btn-profile`}>  
        {path === 'actors' ? 'Profile' : 'More info'}
      </Link>
    </>
  )
}

export default ProfileButton