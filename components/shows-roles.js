import AniLink from '@/shared/AniLink'
import ProfileImage from '@/shared/ProfileImage'
import ProfileButton from '@/shared/ProfileButton'

const MatchResult = ({info}) => {
  const itemStyle = {card: 'card-result items-strech', lang: false, link: 'self-center text-sm', info: 'grow mb-2', name: 'text-lg max-sm:text-base', native: 'text-sm max-sm:text-xs'}
  console.log(info.va)
  return(
    <>
        <div className="flex justify-evenly p-2 w-full">
          <div className="card"> 
            <ProfileImage siteUrl={info.chara.image.large} />
            <AniLink info={info.chara} linkStyle={'a-title break-words leading-snug text-jet font-bold text-lg mx-2 mt-2 max-sm:text-base'} />
          </div>
          <div className="card"> 
            <ProfileImage siteUrl={info.va.image.large} />
            <AniLink info={info.va} linkStyle={'a-title break-words leading-snug text-jet font-bold text-lg mx-2 mt-2 max-sm:text-base'} />
            <div className="grow"></div>
            <ProfileButton path="actors" id={info.va.id} buttonStyle="btn--main relative" />
          </div>
        </div>
    </>
  )
}

export default MatchResult