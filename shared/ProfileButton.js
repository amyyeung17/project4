import Link from 'next/link'

//flex items-center justify-center my-2 rounded-full w-fit
const ProfileButton = ({buttonStyle, id}) => {

  return(
    <>
      <Link href={'/actors?id=' +id} className={`${buttonStyle} btn-profile`}>  Profile </Link>
    </>
  )
}

export default ProfileButton