import Header from "./component/header";
import Tasks from "./component/Tasks";
import { useState } from "react"
import AddTasl from "./component/AddTasl"
const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    { 
        id: 1,
        text: 'hello' ,
        day:'may' ,
        reminder: false
    },
    { 
      id: 2,
      text: 'hello wayray' ,
      day:'may' ,
      reminder: false
  }  ,
  { 
      id: 3,
      text: 'hello jam' ,
      day:'may' ,
      reminder: true
  }    

])
// add task
const addtask =(task) => {
const id = Math.floor(Math.random() * 10000) + 1
const newTask = {id, ...task}
setTasks([...tasks, newTask])

}
// delete task
  const deleteTask =(id) =>{
  setTasks(tasks.filter((task)=>task.id !==id))
 }  

 // Toogle remainder 
 const toogleReminder = (id) =>{
setTasks(tasks.map((task)=> task.id == id ? 
{...task,reminder:!task.reminder}:task))
 }
  return (
    <div className="container">
     
   <Header onAdd={() => setShowAddTask(!showAddTask)}
   showAdd={showAddTask} />
   {showAddTask && <AddTasl onAdd={addtask}/>}
   {tasks.length > 0 ? (< Tasks tasks={tasks}
    onDelete={deleteTask} 
   onToogle={toogleReminder}/> )
   : ("")}
    </div>
  )
}



export default App;
