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
import Dialog from "@mui/material/Dialog";
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



export default function AllList () {
    const [editingTask, setEditingTask] = useState(false);
    const [taskID, setTaskID] = useState('');
    const [alertOpen, setAlertOpen] = useState(false);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const { tasks, setTasks } = useContext(Context);
    function DeleteTask(id) {
        setTaskID(id);
        setDeleteDialogOpen(true);
    }
    function handleDelete() {
        setTasks(tasks.filter(t => t.id !== taskID));
        setTaskID('');
        setDeleteDialogOpen(false);
        }
    function IsTaskDone(id){
      const task = tasks.find(t => t.id === id);
      return task ? task.isCompleted : false;
    }
    function DONETask(id){
        const task = tasks.find(t => t.id === id);
        if (task) {
            task.isCompleted = true;
            setTasks([...tasks]);
        }
    }
    let completedTasks = tasks.filter(t => t.isCompleted);

    const taskElements = completedTasks.map(task => (
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
            </Stack>
        </div>

    ));


    return (
        <>
                {taskElements}
                {completedTasks.length === 0 ? <p>No completed tasks available</p> : null}
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
      
      <Dialog
          open={deleteDialogOpen}
          onClose={() => {setDeleteDialogOpen(false)}}
        >
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this task?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => {
                setDeleteDialogOpen(false)
                setTaskID('');
            }} color="primary">
              Cancel
            </Button>
            <Button onClick={() => {handleDelete()}} color="secondary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
       
        </>
    );
}





