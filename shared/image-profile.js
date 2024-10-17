import Image from 'next/image'

const ImageProfile = ({siteUrl, height = 'h-44 phone:h-56', objectFit = 'object-cover', objectPosition = 'top', width = 'w-2/3 phone:w-full'}) => {
  return(
    <>
      <div className={`${height} ${width} flex justify-content-start relative`}>
        <Image priority src={siteUrl} alt="No image" fill  style={{objectPosition}} sizes="(max-width: 768px) 100vw" className={`rounded-tr rounded-tl ${objectFit}`} />
      </div>
    </>
  )
}

export default ImageProfile