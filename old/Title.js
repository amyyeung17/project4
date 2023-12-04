
const Title = ({show, titleStyle}) => {

  return(
    <>
      <a className={`${titleStyle}`} href={show.siteUrl} target="_blank"> 
        <span>{show.title.english !== null ? show.title.english : show.title.native} </span>
        {(show.title.english !== null && show.title.native !== null) &&
          <span className="text-xs sm:text-sm"> ({show.title.native}) </span>
        } 
        <span className="bi bi-box-arrow-up-right relative bottom-0.5 left-0.5 text-xs"> </span>
      </a>
    </>
  )
}

export default Title