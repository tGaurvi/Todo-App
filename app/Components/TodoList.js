import React from 'react'

function Todolist(props) {
  return (
    <li className="list-item">
        {props.item}
        <span className='icons'>
        <button 
        onClick={e=>{
            props.deleteItem(props.index)
        }}>x</button>
        </span>
    </li>
  )
}

export default Todolist