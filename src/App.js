import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'
function App() {
  const [showAddTask, setShowAddTask] = useState (false)
  const [tasks, setTasks] = useState([{
    id: 1,
    text: 'Doctors Appointment 1',
    day: 'Feb 5th at 2:30pm',
    reminder: true,
},
{
    id: 2,
    text: 'Doctors Appointment 2',
    day: 'Feb 5th at 3:30pm',
    reminder: false,
},
{
    id: 3,
    text: 'Doctors Appointment 3',
    day: 'Feb 5th at 4:30pm',
    reminder: true,
},])

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random()* 10000)+ 1
  const newTask = {id , ...task}
  setTasks([...tasks, newTask])
}
// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
}
  return (
    <div style={{width:'500px', margin:'auto'}}>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
     : 'No Tasks To Show'}
     
    </div>
  );
}

export default App;
