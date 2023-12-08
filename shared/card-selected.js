
import ButtonProfile from '@/shared/button-profile'
import CardInfo from '@/shared/card-info'
import ImageProfile from '@/shared/image-profile'
import LinkAnilist from '@/shared/link-anilist'


const CardSelected = ({children, type,  person}) => {
  const itemStyle = {card: 'card-select pb-2 max-phone:justify-center', lang: true, link: 'max-phone:absolute bottom-1 self-end text-sm', langStyle: 'text-lg max-phone:text-sm', info: 'h-full grow phone:h-fit', name: 'text-2xl max-sm:text-xl max-phone:text-lg', native: 'text-xl max-sm:text-base max-phone:text-sm'}

  return(
    <>
      <div className="flex-col-center max-phone:flex max-phone:w-full max-sm:w-1/2 sm:grow max-w-[25rem]"> 
        <div className="card-select phone:pb-2">
          <ImageProfile siteUrl={person.image.large} height="h-44 phone:h-72 sm:h-96"/>
          <div className="flex flex-col relative w-full">
            <CardInfo person={person} itemStyle={itemStyle} /> 
            <div className="grow"></div>
            <LinkAnilist siteUrl={person.siteUrl} linkStyle={itemStyle.link}/>
          </div>
        </div>
        {children}
      </div>
    </>
  )
}

export default CardSelected