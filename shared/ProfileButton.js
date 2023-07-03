import Link from 'next/link'

const ProfileButton = ({buttonStyle, id}) => {

  return(
    <>
      <Link href={'/actors?id=' +id} className={`${buttonStyle} btn-profile`}>  Profile </Link>
    </>
  )
}

export default ProfileButton