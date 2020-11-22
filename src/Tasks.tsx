import React, { PureComponent } from 'react';
import {item,itemClicked,itemDelete} from './type';
import TasksList from './TasksList';

interface TasksInterface{
    tasks:Array<item>
    itemClick: itemClicked;
    itemDelete:itemDelete ;

}
export const Tasks :React.FC<TasksInterface> =({tasks,itemClick,itemDelete})=>{
    return (
<ul>
{
tasks.map(item=>{return <TasksList key={item.task} item={item} itemClick={itemClick} itemDelete={itemDelete}  />})
}
</ul>
    )
}
export default Tasks
