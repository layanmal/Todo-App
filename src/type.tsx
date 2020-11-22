export type item ={
task:string;
done:boolean;
action:string
}
export type itemClicked = (selectedItem:item) => void ;
export type addnewTask = (newTask:string) => void ;
export type itemDelete = (task:item) => void ;