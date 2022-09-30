import React from 'react'
import { useState } from 'react'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
export default function Todo({ todo, toggleComplete, handleDelete, handleEdit,}) {

    const [newTtile, setNewTtile] = useState(todo.title);

    const handleChange = (e)=> {
        e.preventDefault();
        if (todo.complete === true) {
            setNewTtile(todo.title);
        } else {
            todo.title = "";
            setNewTtile(e.target.value);
        }
    };
  return (
    <div className="todo">
        <input type="text" 
        style={{ textDecoration: todo.completed && "line-through" }}
        value={todo.title === "" ? newTtile : todo.title} className="list"
        onChange={handleChange} />

        <div>
            <button className="button-complete"
            onClick={()=> toggleComplete(todo)}>
                <CheckCircleIcon id="i" />
            </button>
            <button className="button-edit"
            onClick={()=> handleEdit(todo, newTtile)}>
                <EditIcon id="i" />
            </button>
            <button className="button-delete"
            onClick={()=> handleDelete(todo.id)}>
                <DeleteIcon id="i"/>
            </button>
        </div>
    </div>
  )
}
