import React, { useState } from 'react'

function MainSe(props) {
  const [inputTxt,setInputTxt] = useState('');
  
  return (
    <div className='mainSection container bg-dark'>
        <div className='input-container bg-dark'>
          <input
           type="text" 
           value={inputTxt}
           className='inputTodo' placeholder='Enter Task'
           onChange={e=>{
            setInputTxt(e.target.value);
           }}
           />
          <button className='btn-add ms-2 btn btn-primary' onClick={()=>{
            props.addList(inputTxt)
            setInputTxt("");

          }}>+</button>
          
        </div>
    </div>
  )
}

export default MainSe;