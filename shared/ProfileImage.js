import Image from 'next/image'

//CHECK! - no dynamic height? 
const ProfileImage = ({siteUrl, height = 'h-48 sm:h-56', objectFit = 'object-cover', width = 'w-full'}) => {
  return(
    <>
      <div className={`${height} ${width} flex justify-content-start relative`}>
        <Image src={siteUrl} alt="No image" fill  style={{objectPosition: 'top'}} sizes="(max-width: 768px) 100vw" className={objectFit}/>
      </div>
    </>
  )
}

export default ProfileImage