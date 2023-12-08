import Card from '../../shared/card-og'
import CardExternal from '@/shared/card-external'


const MatchResult = ({info}) => {

  return(
    <>
        <div className="flex w-full">
          <CardExternal cardStyle="card-result shadow" info={info.chara} divStyle="flex flex-col items-end w-full sm:w-1/2 pr-2" width="full"/>
          <div className="flex flex-col items-start w-full sm:w-1/2 pl-2">
            <Card cardStyle="card-result" info={info.va} width="w-full" />
          </div>
        </div>
    </>
  )
}

export default MatchResult