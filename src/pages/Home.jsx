import { useEffect, useState } from 'react';
import { initSaveData, saveData, save, check, UpdateList, deleteItem, handleCheck, handleRemoveCheck, resetData } from '../assets/Utility';

export default function Home() {
  const [data, setData] = useState(saveData);
  const [food, setfood] = useState('');

  //* Load or Create SaveDate
  useEffect(() => initSaveData(setData), []);
  //* Save after Update
  useEffect(() => save(data), [data]);

  function Items(foods, key) {
    return (
      <div className="itemContianer" key={key}>
        <div style={{ textDecoration: data.checked.includes(foods) ? 'line-through' : 'none' }}>
          {foods}
        </div>

        <button
          style={{ background: "red" }}
          onClick={e => deleteItem(e.target.id, data, setData)}
          id={Number(key)}
        > Remove </button>

        <button
          id={foods}
          onClick={(e) => data.checked.includes(e.target.id) ? handleRemoveCheck(foods, data, setData) : handleCheck(foods, data, setData)}
        >
          Check
        </button>
      </div>
    )
  }


  return (
    <section className='mainContainer'>
      <input
        placeholder='Add Items'
        style={{ textTransform: 'uppercase', color: 'black' }}
        size="1"
        type="text"
        className='itemInput'
        onChange={e => setfood(e.target.value.toUpperCase())}
        onKeyUp={e => e.key == 'Enter' && check(food, data) ? UpdateList(food, data, setData) : null} />
      <button onClick={() => check(food, data) ? UpdateList(food, data, setData) : null}>Enter</button>
      <button style={{ background: 'red' }} onClick={() => resetData()}>debug Reset</button>

      <ul>
        {data.list && data.list.map((item, key) => Items(item, key))}
      </ul>

    </section>
  );
}
