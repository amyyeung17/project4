const AniLink = ({info, linkStyle, nativeStyle}) => {

  return (
    <>
      <a aria-label="Go to AniList" className={linkStyle} href={info.siteUrl} target="_blank"> {info.name.full}  <span className="bi bi-box-arrow-up-right relative bottom-0.5 left-0.5 text-xs"> </span></a>
      {info.name.native !== null &&
        <p className={`break-all leading-snug text-jet-light text-base max-sm:text-sm line-clamp-1 ${nativeStyle}`}> ({info.name.native}) </p>
      }
    </>
  )
}

export default AniLink