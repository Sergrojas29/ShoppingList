import React, { useEffect, useState } from 'react'

const saveData = {
  name: "Guest",
  list: ['Eggs', "cheese", "milk", "Bread"],
  darktheme: true,
  duplicates: false,
  saveOld: true,
  autoComplete: true,

}


export default function Home() {
  const [data, setData] = useState(saveData)

  useEffect(() => {
    if (!window.localStorage.getItem('saveData')) {
      window.localStorage.setItem("saveData", JSON.stringify(saveData))
    }
  }, [])
  
  function handleKeyUp(event) {
    if (event.key == 'Enter') {
      addItems(event.target.value)
    }
  }


  function addItems(itemToAdd) {
    setData([...data, list: itemToAdd])
    save()
  }

  function save(){
    window.localStorage.setItem('saveData', JSON.stringify(saveData))
  }
  
  return (
    <>
      <h1>Home Page { }</h1>

      <h2>Add Item</h2>
      <input size="1" type="text" className='itemInput' onKeyUp={handleKeyUp} />
      <button onClick={() => { }}>Enter</button>
      <ul>
        {list && list.map((item, index) => {
          return (
            <ol key={index}>{item}</ol>
          )
        })}
      </ul>
    </>
  )
}
