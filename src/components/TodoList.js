import React from 'react'

function TodoList(props) {
  return (
    <div className='bg-dark container tododiv'><br/>
        <li className="Todo-li  p-1">
            {props.item}
            <span className='icons'>
                <i className="fa-solid fa-trash-can icont"
                onClick={e=>{
                    props.deleteItem(props.index)
                }}
                >
                </i>
            </span>
        </li>
    </div>
  )
}

export default TodoList