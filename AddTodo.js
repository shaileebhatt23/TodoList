

import React, { useState } from 'react';

export const AddTodo = ({addTodo}) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const submit = (e) =>{

        e.preventDefault();
        if(!title || !desc){
            alert("title or description cannot be blank");
        }
        else{
    addTodo(title,desc);
    settitle("");
    setdesc("");
        }

    }
    return (
        <div className="container">
            <h3>Add a Todo</h3>
            <>
                <form onSubmit={submit}>
                    <div className="mb-3">
                        <label htmlfor="title" className="form-label">Todo Title</label>
                        <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
                            <div id="text" className="form-text"></div>
  </div>
                        <div className="mb-3">
                            <label htmlfor="desc" className="form-label">Todo Description</label>
                            <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}}className="form-control" id="exampleInputPassword1"/>
  </div>
                            
                                <button type="addTodo" className="btn btn-sm btn-success">Add Todo</button>
</form>
</>
                    </div>
    )
}
