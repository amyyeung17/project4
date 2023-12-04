export const removeItem = ({index, type, setSelected}) => 
  setSelected(s => ({...s, [type]: 
      (s[type].length === 1 ?
        []
        :
        (index === 0 ? [s[type][1]] : [s[type][0]])
      )
    })
  )