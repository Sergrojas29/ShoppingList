export const saveData = {
    autoComplete: true,
    darktheme: true,
    duplicates: false,
    list: ['EGGS'],
    checked: [],
    name: "Guest",
    saveOld: true,
  
  }

export function save(saveData) {
  window.localStorage.setItem('saveData', JSON.stringify(saveData));
}


export function check(food, data) {
  if (food === '') {
    console.log('No string');
    return false;
  } else if (data.duplicates) {
    console.log('duplicates are true');
    console.log('and all food will be added to list');
    return true;
  } else if (data.list.includes(food)) {
    console.log('its include in list will not add');
    return false;
  } else {
    console.log('food was include to list');
    return true;
  }

}

export function UpdateList(newItem, data, setData) {
  setData({ ...data, list: [...data.list, newItem] });
  document.querySelector('.itemInput').value = '';
}
export function deleteItem(key, data, setData) {
  const updatedList = data.list.filter((item, index) => index != key);
  setData({ ...data, list: updatedList });
}

export  function handleCheck(grocery, data, setData) {
  setData({ ...data, checked: [...data.checked, grocery] })
}

export function handleRemoveCheck(grocery, data, setData){
  const updatedList = data.checked.filter((food) => food != grocery);
  setData({ ...data, checked: updatedList });
}

export function resetData(){
  window.localStorage.clear();
  location.reload();
}

export function  initSaveData(setData) {
  if (!window.localStorage.getItem('saveData')) {
    window.localStorage.setItem("saveData", JSON.stringify(saveData));
    console.log('Save Created');
  } else {
    setData(JSON.parse(window.localStorage.getItem('saveData')));
    console.log('Loaded');
  }
  
}