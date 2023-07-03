import { useEffect, useRef } from 'react'
import { Listbox } from '@headlessui/react'

const ActorsDropdown = ({currentLang, chooseLang}) => {
  const languages = useRef([
    { id: 0, language: currentLang },
    { id: 1, language: 'JAPANESE' },
    { id: 2, language: 'ENGLISH'},
    { id: 3, language: 'KOREAN' },
    { id: 4, language: 'CHINESE'},
    { id: 5, language: 'SPANISH'},
    { id: 6, language: 'FRENCH'}
  ])
  useEffect(() => {
    const options = ['JAPANESE', 'ENGLISH', 'KOREAN', 'CHINESE', 'SPANISH', 'FRENCH']
    const matchOption = options.findIndex(currentLang)
    if (matchOptions) {

    }
  }, [])

  return(
    <>

      <Listbox value={currentLang} onChange={chooseLang}>
        <Listbox.Button>{selectedPerson.name}</Listbox.Button>
        <Listbox.Options>
          {languages.current.map((lang) => (
            <Listbox.Option
              key={lang.id}
              value={lang}
            >
              {lang.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
      
    </>
  )
}

export default ActorsDropdown