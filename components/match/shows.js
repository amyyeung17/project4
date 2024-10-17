import Card from '../../shared/card-og'
import CardExternal from '@/shared/card-external'
import LinkNative from '@/shared/link-native'

const MatchShows = ({info}) => {

  return(
    <>
      <LinkNative info={info.va} linkStyle="a-title text-center sm:hidden my-1 text-xl" nativeStyle="sm:hidden" />
      <div className="flex space-evenly w-full px-3 py-2 "> 
        <CardExternal cardStyle="card-result" info={info.chara} width="w-full" divStyle="flex-col-center max-sm:pr-2"/>
        <div className="flex-col-center justify-center max-sm:hidden"> 
          <Card info={info.va} width="w-full"/>
        </div>
        <CardExternal cardStyle="card-result" info={info.chara2} width="w-full" divStyle="flex-col-center max-sm:pl-2"/>
      </div>
    </>
  )
}

export default MatchShows