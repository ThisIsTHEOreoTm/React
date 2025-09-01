import './TodoList.css';
import { useContext } from 'react';
import Context from './Context';
import { Route, Routes, Link } from 'react-router-dom';
import { Container, IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import EditTask from './editTask';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import Snackbar from '@mui/material/Snackbar';

import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



export default function AllList () {
    const [editingTask, setEditingTask] = useState(false);
    const [taskID, setTaskID] = useState('');
    const [alertOpen, setAlertOpen] = useState(false);
    const tasks = useContext(Context);
    function DeleteTask(id) {
        // const index = tasks.findIndex(t => t.id === id);
        // if (index !== -1) {
        //     tasks.splice(index, 1);
        // }
        const taskDeleting = tasks.find(t => t.id === id);
        if (taskDeleting) {
            // Show a confirmation dialog or snackbar
        }
    }

    const taskElements = tasks.map(task => (
        <div key={task.id} className="taskCard">
            <div className='tasks'>
            <h2>{task.title}</h2>
            <p>{task.details}</p>
            </div>
            <Stack direction="row" spacing={2}>
            <IconButton onClick={()=>{ DeleteTask(task.id) }}  aria-label="delete" color="primary">
                <DeleteIcon />
            </IconButton>
            <IconButton onClick={() => {
                setEditingTask(true);
                setTaskID(task.id);
            }} aria-label="edit" color="secondary">
                <ModeEditIcon />
            </IconButton>
            <IconButton  aria-label="complete" color="default">
                <DoneIcon />
            </IconButton>
            </Stack>
        </div>

    ));


    return (
        <>
                {taskElements}
                <EditTask 
                isVisible={editingTask} 
                taskID={taskID} 
                onClose={() => setEditingTask(false)}
                onSaveSuccess={() => setAlertOpen(true)} 
                />
                {/* Snackbar Alert */}
      <Snackbar
        open={alertOpen}
        autoHideDuration={3000}
        onClose={() => setAlertOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="success" variant="filled">
          Task updated successfully!
        </Alert>
      </Snackbar>
        </>
    );
}





