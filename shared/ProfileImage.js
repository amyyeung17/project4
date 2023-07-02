import Image from 'next/image'

//CHECK! - no dynamic height? 
const ProfileImage = ({siteUrl, height = 'h-40', width = 'w-4/5'}) => {
  return(
    <>
      <div className={`${height} ${width} flex justify-content-start relative`}>
        <Image src={siteUrl} alt="No image" fill style={{ width: '100%' }}  objectFit='contain' className="py-2" />
      </div>
    </>
  )
}

export default ProfileImage