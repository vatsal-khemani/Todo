import Reacct, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl,Input,InputLabel } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos]=useState([]);
  const [input,setInput]=useState('');

  useEffect(()=>{
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc => ({id: doc.id , todo: doc.data().todo})))
    })
   //activates when app.js loads
  },[]);



  const addTodo=(event)=>{
    //this activates on button cllick
    ///... is push back so earlier content doen't get lost
   
    event.preventDefault(); //will stop auto refresh on button press
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    
    setInput('');

  }
  return (
    <div className="App">
      <h1> Hello World!</h1>
        <form>
         <FormControl>
           <InputLabel>Write a Todo</InputLabel>
           <Input  value={input} onChange={event =>setInput(event.target.value)} />
        </FormControl>
         <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Todo
         </Button>
        </form>


      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/> 
          //<li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
