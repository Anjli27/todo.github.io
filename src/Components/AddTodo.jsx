import { addDoc, collection } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react'
import { db } from '../Firebase';
import '../App.css'

function AddTodo() {
    const [title, setTitle] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title !== "") {
            await addDoc(collection(db, "todos"), {
                title,
                completed: false,
            })
            setTitle("");
        }
    }
  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
        <div className="input-container">
            <input type="text" placeholder="Enter todo..." value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="btn-container">
            <button>Add</button>
        </div>
    </form>
    </div>
  )
}

export default AddTodo