import React from 'react'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'

const TodoPage = () => {
  return (
    <div className='px-10 space-y-10'>
      <AddTodo/>
      <TodoList/>
    </div>
  )
}

export default TodoPage