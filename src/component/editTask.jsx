import './TodoList.css';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import { useContext } from 'react';
import Context from './Context';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function EditTask({isVisible , taskID, onClose, onSaveSuccess} ) {
    if (!isVisible) return null;
    const tasks = useContext(Context);
    const task = tasks.find(t => t.id === taskID);

    const [updatedTask, setUpdatedTask] = useState({
        title: task.title,
        details: task.details
    });

     function saveTask(){
        task.title = updatedTask.title;
        task.details = updatedTask.details;
        setUpdatedTask({ title: '', details: '' });
        onClose();
        onSaveSuccess();
    }

    return (
        <div id='edit-task'>
            <h2>Edit Task</h2>
            <Container>
                <TextField className='textField' value={updatedTask.title} onChange={e => setUpdatedTask({ ...updatedTask, title: e.target.value })} label="Task Title" variant="outlined" fullWidth margin="normal" />
                <TextField className='textField' value={updatedTask.details} onChange={e => setUpdatedTask({ ...updatedTask, details: e.target.value })} label="Task Details" variant="outlined" fullWidth margin="normal" multiline rows={4} />
            </Container>
            <Button onClick={saveTask} variant="contained" color="primary">
                Save Changes
            </Button>
            <Button onClick={onClose} variant="outlined" color="secondary" style={{ marginLeft: '10px' }}>
                Cancel
            </Button>

        </div>
    );
}
