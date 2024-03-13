const AniListLink = ({hidden = false, linkStyle = 'self-start text-sm', arrowStyle = 'text-xs' ,siteUrl}) => {
  return (
    <>
      <a aria-label="Go to AniList" href={siteUrl} className={`mx-2 mt-2 my-1 text-slate-700 hover:text-slate-500 w-fit ${linkStyle}`} target="_blank"> 
        <span className={hidden ? 'hidden' : ''}>  AniList </span>
        <span className={`bi bi-box-arrow-up-right ${arrowStyle}`}></span>
      </a>
    </>
  )
}

export default AniListLink