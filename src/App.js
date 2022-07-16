import {useState} from "react";
import Header from "./components/Header";
import Task from "./components/Task";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks,setTask]= useState(
    [
      {
        id:1,
        text: 'Doctor Appoinment',
        day: 'feb 5th 2:00pm',
        reminder:'true'
      },
      {
        id:2,
        text: 'Doctor Appoinment',
        day: 'feb 5th 2:00pm',
        reminder:'true'
      },
      {
        id:3,
        text: 'Doctor Appoinment',
        day: 'feb 5th 2:00pm',
        reminder:'true'
      }
      
      ]
  )
  // add task
  function addTask(task){
    const id= Math.floor(Math.random()*10000)+1
    const newTask = {id, ...task}
    setTask([...tasks, newTask])
  }

  //delete task
  function deleteTask(id){
   setTask(tasks.filter((task)=> task.id !==id))
  }
  //toggle remainder
  function toggleRemaider(id){
    setTask(tasks.map((task) => task.id ===id ? {...task, reminder: !task.reminder} : task))
  }
  
  return (
    <div className="container">
     
      <Header onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length>0 ?( <Task tasks={tasks} onDelete={deleteTask} onToggle={toggleRemaider} />) : ("No tasks to show")}
    </div>
  );
}

export default App;
