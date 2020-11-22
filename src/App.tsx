import React, { useState } from 'react';
import Tasks from'./Tasks'
import {item,itemClicked,addnewTask, itemDelete} from './type'
import AddForm from './AddForm'
import theImage from './download3.png'


const todoListItems: Array<item> =[]

const App: React.FC=()=>{

  const [todoItems,settodoItems]=useState(todoListItems)

  const itemClicked :itemClicked=(selectedItem)=>{
     const newtodoItems=todoItems.map(choice=> 
      { if(choice===selectedItem && !selectedItem.done) {
        return{
          ...choice,
          done:!choice.done,
          action:"Undo"
        }
      }
      else if(choice===selectedItem && selectedItem.done) {
        return{
          ...choice,
          done:!choice.done,
          action:"Complete"
      }
      }
return choice;
});
settodoItems(newtodoItems);
}
const itemDelete:itemDelete=(task)=>{
  const newtodoItems=todoItems.filter(choice => choice !== task)

settodoItems(newtodoItems);
}

const addnewTask:addnewTask= newTask=>{
  newTask.trim() !== "" && settodoItems([...todoItems,{task:newTask,done:false,action:"complete"}])
}
  return (
<div className="container">
  <div className="upper-page">
    <React.Fragment>
    <span className="title"><h1>To-Do App!</h1></span>
    </React.Fragment>
    <React.Fragment>
    <span className="title"><h5 >Add New To-Do</h5></span>
    </React.Fragment>
    <React.Fragment>
    <AddForm addnewTask={addnewTask}/>
    </React.Fragment>
  </div>
  <div className="bottom-page">
    <div><h2 className="middle-title">Let's get some work done!</h2></div>
    <hr></hr>
  <React.Fragment>
    <Tasks tasks={todoItems} itemClick={itemClicked} itemDelete={itemDelete}/>
  </React.Fragment>
  </div>
  <div className="footer">
    <div>
       <React.Fragment>
       <img src={theImage}/>
      </React.Fragment>
      <h2 className="footer-title">proudly powered by Cosmic JS</h2>
      </div>
  </div>
</div>
  );
}

export default App;
