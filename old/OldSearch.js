import React, { useEffect, useContext, useState } from 'react'
import { SessionContext } from '@/lib/getContext'
import { useRouter } from 'next/navigation'
import { apiHeaders } from '@/lib/getHeaders'
import SearchResult from '@/components/search-result'
import SearchInput from '@/components/search-input'
import testObject from '@/lib/testObject'
import testSearch from '@/lib/testSearch'
import AddButton from '@/old/AddButton'
import RemoveButton from '@/old/RemoveButton'
//CHECK! - React.StrictMode? - render twice
//7-1 - removed flex-col-center
const Search = () => {
  const [results, setResults] = useState([])
  const [status, setStatus] = useState('')
  const [input, setInput] = useState('')
  const [selected, setSelected] = useContext(SessionContext).choices
  
  const router = useRouter()

 

  //filter out non-voice actors
  useEffect(() => {
    const getSearchResults = async () => {
      try {
        setStatus('Loading...')
        //const data = await fetch('/api/voice', apiHeaders({method: 'POST', info: {searchInput: input}}))
        //const dataJson = await data.json()
        
        //const voiceActors = dataJson.Page.staff.filter(va => va.characters.nodes.length !== 0)
        const voiceActors = testSearch.filter(va => va.characters.nodes.length !== 0)
        setResults(voiceActors)
        setStatus('Finished')
          //const actorData = await fetch('/api/search', apiHeaders({method: 'POST', info: {searchInput, searchType}}))
          //const actorDataJson = await actorData.json()

          //setShared(dataJson.shared)
        //const voiceActors = actorDataJson.Page.staff.filter(va => va.characters.nodes.length !== 0)
          //const voiceActors = testSearch.filter(va => va.characters.nodes.length !== 0)
      } catch (err) {
        console.log(err)
      }
    }
    if (input !== '') {
      getSearchResults()
    }

  }, [input])

 
  const getSelected = (staff) => {
    const {characters, ...info} = staff
    setSelected(s => [...s, info])
    router.push('/select')
  }


  return(
    <>
      <div className="flex-col-center "> 
      <SearchInput editInput={setInput} />
      <div className="grid-page mt-2">
        {results.length !== 0 ?
          results.map((staff, num) => {
            return(
              <React.Fragment key={num}>
                <SearchResult info={staff}>
                  {/*![...selected.map(s => s.id)].includes(staff.id) ?
                    <AddButton addFun={() => getSelected(staff)} isDisabled={selected.length === 2}/>
                    :
                    <RemoveButton index={num} setSelected={setSelected}/>
                  */} 
                </SearchResult>
              </React.Fragment>
            )
          })
        :
          <p className="text-status col-start-2">
            {results.length === 0 && status === 'Finished' ? 'No results': status}
          </p>
        }
      </div>
      </div>
    </>
  )
}

export default Search