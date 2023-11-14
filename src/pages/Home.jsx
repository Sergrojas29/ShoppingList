import React, { useEffect, useState } from 'react';
import { saveData, save, check, UpdateList , deleteItem, handleCheck } from '../assets/Utility';



export default function Home() {
  const [data, setData] = useState(saveData);
  const [food, setfood] = useState('');
  const [crossOut, setCrossOut] = useState(false);

  //! Load or Create SaveDate
  useEffect(() => {
    if (!window.localStorage.getItem('saveData')) {
      window.localStorage.setItem("saveData", JSON.stringify(saveData));
      console.log('save Created');
    } else {
      setData(JSON.parse(window.localStorage.getItem('saveData')));
      console.log('loaded');
    }
  }, []);


  //! Save after Update
  useEffect(() => {
    save(data);
  }, [data]);

  // function UpdateList(newItem) {
  //   setData({ ...data, list: [...data.list, newItem] });
  //   document.querySelector('.itemInput').value = '';
  // }
  // function deleteItem(key) {
  //   const updatedList = data.list.filter((item, index) => index != key);
  //   setData({ ...data, list: updatedList });
  // }

  // function save() {
  //   window.localStorage.setItem('saveData', JSON.stringify(data));
  // }

  // function check() {
  //   if (food === '') {
  //     console.log('No string');
  //     return false;
  //   } else if (data.duplicates) {
  //     console.log('duplicates are true');
  //     console.log('and all food will be added to list');
  //     return true;
  //   } else if (data.list.includes(food)) {
  //     console.log('its include in list will not add');
  //     return false;
  //   } else {
  //     console.log('food was include to list');
  //     return true;
  //   }

  // }

  // function handleCheck(grocery) {
  //   setData({ ...data, checked: [...data.checked, grocery] })
  // }

  return (
    <>
      <h1>Home Page</h1>
      <h2>Add Item</h2>
      <input
        placeholder='Add Items'
        style={{ textTransform: 'uppercase', color: 'black' }}
        size="1"
        type="text"
        className='itemInput'
        onChange={e => setfood(e.target.value.toUpperCase())} />
      <button onClick={() => {
        if (check(food, data)) {
          UpdateList(food, data, setData);
        }
      }}>Enter</button>
      <button
        style={{ background: 'red' }}
        onClick={() => {
          window.localStorage.clear();
          location.reload();
        }}>debug Reset</button>
      <ul>
        {data.list && data.list.map((item, index) => {
          return (
            <ol 
            key={index} 
            style={ {textDecoration: data.checked.includes(item) ? 'line-through' : 'none'}}
            
            
            >
              {/* {data.list.includes({item}) ? 'line-through' : 'none'} */}
              {item}
              <button
                style={{ background: "red" }}
                onClick={(e) => {
                  deleteItem(e.target.id, data, setData);
                  console.log(e.target.id);
                }}
                id={Number(index)}
              > Remove </button>

              <button
                id={item}
                onClick={() => {
                  handleCheck(item, data, setData)
                }}
              >
                Check
              </button>

            </ol>
          );
        })}
      </ul>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {data.name && <h2> {data.name}</h2>}
      {data.autoComplete && <h2> Autocomplte On</h2>}
      {data.darktheme && <h2> datktheme On</h2>}
      {data.duplicates && <h2> duplicates On</h2>}
      {data.saveOld && <h2> Save Old On </h2>}
    </>
  );
}
