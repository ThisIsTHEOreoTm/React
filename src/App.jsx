import './App.css'
import React from 'react';
import { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { createTheme,ThemeProvider  } from '@mui/material';
import { orange, red, green, purple } from '@mui/material/colors';
import TodoList from './component/AllList';
import Pending from './component/PendingList';
import Completed from './component/CompletedList';
import Context from './component/Context';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
const theme = createTheme({
  palette: {
    primary: {
      main: green[500],   // needs `main`
    },
    secondary: {
      main: orange[500],
    },
    default: {
      main: purple[500],
    },
  },
});

function App() {
let [TaskList, setTaskList] = useState([]);
let [TaskTitle, setTaskTitle] = useState('');

function handleChange(e) {
  setTaskTitle(e.target.value);
}

function addTask() {
  if (TaskTitle.trim() !== '') {
    const newTask = {
      id: TaskList.length + 1,
      title: TaskTitle,
      details: 'this is the details of the task ' + TaskTitle,
      isCompleted: false
    };
    setTaskList([...TaskList, newTask]);
    setTaskTitle('');
  }
 

}

  return (
    <>
    <ThemeProvider  theme={theme}>
      <Context.Provider value={{ tasks: TaskList , setTasks: setTaskList }}>
        <Container id="app_container">
          <Container id="todo-list">
            <h1>My Tasks</h1>
            <Container id="tasksButtons">
                <Button  component={Link} to="/" variant="contained" color="primary">All</Button>
                <Button  component={Link} to="/Completed" variant="contained" color="secondary">Completed</Button>
                <Button  component={Link} to="/Pending" variant="contained" color="default">Pending</Button>
            </Container>
              <Container className="tasksContainer">
                {TaskList.length === 0 ? <p>No tasks available</p> : null}
              <Routes>
                <Route index path="/" element={<TodoList />} />
                <Route path="/All" element={<TodoList />} />
                <Route path="/Completed" element={<Completed />} />
                <Route path="/Pending" element={<Pending />} />
              </Routes>
               </Container>
         <Container id="footer">
           <Button onClick={()=>{addTask()}} variant="contained" color="primary">Add Task</Button>
           <TextField value={TaskTitle} onChange={(e)=>{handleChange(e)}}  id="outlined-basic" label="Add The Title of the Task" variant="outlined" />
         </Container>

        </Container>
     </Container>



      </Context.Provider>
    </ThemeProvider>
    </>
  )
} 
export default App




