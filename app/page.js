"use client"
import React, { useState } from 'react'



import TodoInput from './Components/TodoInput';
import Todolist from './Components/TodoList';
function page() {

  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== '')
      setListTodo([...listTodo, inputText]);
  }
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1)
    setListTodo([...newListTodo])
  }
  return (
    <>

      <div className='My_Todo'>
        <h1>My Todo</h1></div>
      <div className="main-container">

        <div className="center-container">
          <TodoInput addList={addList} />
          <h3 className="app-heading">TODO:-</h3>
          <hr />
          {listTodo.map((listItem, i) => {
            return (
              <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem} />
            )
          })}
        </div>
      </div>
    </>

  )
}

export default page