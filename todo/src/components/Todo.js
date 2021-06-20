import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Todo() {
const [edit, setEdit]=useState({
    id:null,
    value:''
})

const completeTodo =id=>{
    let updatetodo =todos.map(todo =>{
        if(todo.id ===id){
            todo.isComplete =!todo.isComplete
        }
        return todo
    })
    setToddos(updatetodo)
}

    return tod.map((todo,index)=>(
        <div
        className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className='icons'>
          <RiCloseCircleLine
          />
          <TiEdit
           />
        </div>
      </div>

    ));
};

export default Todo
