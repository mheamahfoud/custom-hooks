import React from 'react';
import { useLocalStorage, useSessionStorage } from './useStorage';

const StorageComponent = () => {
  
    const [name,setName,removeName]=useLocalStorage('name','mehya');
    const [age,setAge,removeAge]=useSessionStorage('age',26)

  return (
    <div>
      <div>
        {name} -  {age}
      </div>
      <button  onClick={()=>{setName('jone')}}>Set Name</button>
      <button  onClick={()=>{setAge(33)}}>Set Age</button>

      <button  onClick={removeName}>Remove Name</button>

      <button  onClick={removeAge}>Remove Age</button>

    </div>
  );
}

export default StorageComponent;
