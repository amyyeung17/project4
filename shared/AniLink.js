const AniLink = ({info, linkStyle}) => {
  console.log(info)
  return (
    <>
      <a className={linkStyle} href={info.siteUrl} target="_blank"> {info.name.full}  <span className="bi bi-box-arrow-up-right relative bottom-0.5 left-0.5 text-xs"> </span></a>
      {info.name.native !== null &&
        <p className="break-all leading-snug text-zinc-500 line-clamp-1 mb-2 mx-2 text-sm max-sm:text-xs"> ({info.name.native}) </p>
      }
    </>
  )
}

export default AniLink