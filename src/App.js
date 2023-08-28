import NavBar from './components/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import TodoList from './components/TodoList';
import MainSe from './components/MainSe';
import { useState } from 'react';

function App() {
  const [list,setlist] = useState([]);

  const addList = (inputText)=>{
    if(inputText!=='')
      setlist([...list,inputText]);
  }
  const DeleteList = (key)=>{
    let newList = [...list];
    newList.splice(key,1)
    setlist([...newList]);

  }
  return (
    <div>
      <NavBar/>
      <MainSe addList={addList}/><br/>
      
      {list.map((listItem,i)=>{
        return (
          <TodoList key={i} item={listItem} index={i} deleteItem={DeleteList}/>
        )
      })}
    </div>
  );
}

export default App;
