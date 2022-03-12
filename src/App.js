import './App.css';
import TodoList from './Todo/TodoList'
import React, {useState, useEffect} from 'react'
import Context from './Todo/Context'
import AddTodo from './Todo/AddTodo'
import Loader from './Loader'



function App() {
  const [todos, setTodos] = useState([]);
  const [loader, setLoader] = useState(true)

  // const [todos, setTodos]=useState([
  //   // {id: 1, completes: false, title: 'купити хліб'},
  //   // {id: 2, completes: true, title: 'купити масло'},
  //   // {id: 3, completes: false, title: 'купити молоко'},
  // ]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTodos(todos)
        setLoader(false)
      })
  }, [])

  // useEffect(async () => {
  //   let response = await fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5');
  //   let arr = await response.json();
  //   setTodos(arr);
  // }, [])

  function toggleTodo(id) {
    setTodos(todos.map(todo =>{
      if (todo.id===id) {
        todo.completes=!todo.completes
      }
      return todo
    }
    ))
}

function removeTodo (id) {
  setTodos(todos.filter(todo => todo.id!=id))
}

function addTodo(title) {
  setTodos([...todos, {id: Date.now(), completes: false, title: title}])
}

  return (
    <Context.Provider value={{removeTodo}} >

        <div className="wrapper">
          <AddTodo onCreate={addTodo} />
          { loader && <Loader/> }
          {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : 
          loader ? '' : <p>No Todos </p>}
          
        </div>
    </Context.Provider>
    )
}

export default App;
