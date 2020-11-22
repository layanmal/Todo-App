import React from'react'
import {item,itemClicked,itemDelete} from './type'
import "./TasksList.css"

interface listitems{
    item: item;
    itemClick: itemClicked;
    itemDelete :itemDelete ;
}
const TodoList :React.FC<listitems>=({item,itemClick,itemDelete})=>{

    return(
        <li>
        <label className = {item.done ? "complete" : undefined }>
        <button  className="btn btn-default mr-5"  onClick={()=>itemClick(item)} >{item.action}</button>
        <button className="btn btn-default mr-20" onClick={()=>itemDelete(item)}>Delete</button>
        <span className="item">{item.task}</span>
        </label>
        </li>
    );
}
export default TodoList