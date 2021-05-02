import React, { useState } from 'react'
import './Todo.css';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar,ImageIcon, Button, Modal, makeStyles, Input } from '@material-ui/core'
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props) {
    const classes=useStyles();
    const [open, setOpen] = useState(false);
    const [input,setInput]=useState('');

    const handleOpen=() =>{
        setOpen(true);
    };

    const handleClose=() =>{
        setOpen(false);
    };

    const updateTodo=() =>{
        //update todo with new input text
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, {merge: true});
        setOpen(false);
    };
    return (
        <>
        <Modal 
          open={open}
          onClose={handleClose}
        >
            
            <div className={classes.paper}>
                <h1>I am a modal</h1>
                <Input placeholder ={props.todo.todo} value={input} onChange={event =>setInput(event.target.value)}/>
                <Button color="primary" onClick={updateTodo}>Update Todo</Button>
            </div>
        </Modal>
        <List className="todo_list">
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="dummy deadline"/>
            </ListItem>
            <button onClick= {e =>setOpen(true)}>Edit</button>
            <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}></DeleteForeverIcon>
        </List>
        </>
    )
}

export default Todo

