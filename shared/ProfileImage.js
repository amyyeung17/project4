import Image from 'next/image'

//CHECK! - no dynamic height? 
const ProfileImage = ({siteUrl, height = 'h-40 sm:h-48', width = 'w-4/5'}) => {
  return(
    <>
      <div className={`${height} ${width} flex justify-content-start relative`}>
        <Image src={siteUrl} alt="No image" fill  style={{objectFit: "contain"}} sizes="(max-width: 768px) 100vw" className="py-2" />
      </div>
    </>
  )
}

export default ProfileImage