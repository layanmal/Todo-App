import React, { ChangeEvent, FormEvent, PureComponent, useState } from 'react';
import {item,itemClicked,addnewTask} from './type'

interface AddFormsinterface{
   addnewTask:addnewTask
}

const AddForm:React.FC<AddFormsinterface>=({addnewTask})=>{

    const [newTask,setnewItems]=useState("");

    const handlechange=(e:ChangeEvent<HTMLInputElement>)=>{
     setnewItems(e.target.value)

    };
    const handleSubmit=(e:FormEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        addnewTask(newTask)
    };

    return(
        <form >
            <div className="form-group">
            <input className="form-control" type="text" value={newTask} onChange={handlechange}></input>
            </div>
            <div className="pos"><button className="btn btn-add " type="submit" onClick={handleSubmit}>Add </button></div>
        </form>
    );
}
export default AddForm
