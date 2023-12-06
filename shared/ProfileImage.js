import Image from 'next/image'

//CHECK! - no dynamic height? 
const ProfileImage = ({siteUrl, height = 'h-44 phone:h-56 md:h-64', objectFit = 'object-cover', width = 'w-full'}) => {
  return(
    <>
      <div className={`${height} ${width} flex justify-content-start relative`}>
        <Image src={siteUrl} alt="No image" fill  style={{objectPosition: 'top'}} sizes="(max-width: 768px) 100vw" className={`rounded-tr rounded-tl ${objectFit}`} />
      </div>
    </>
  )
}

export default ProfileImage