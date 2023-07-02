
const Title = ({show, titleStyle}) => {

  return(
    <>
      <a className={titleStyle} href={show.siteUrl} target="_blank"> 
        {show.title.english !== null ? show.title.english : show.title.native} 
        {(show.title.english !== null && show.title.native !== null) &&
          <span className="text-sm"> ({show.title.native}) </span>
        } 
        <span className="bi bi-box-arrow-up-right text-xs"></span>
      </a>
    </>
  )
}

export default Title