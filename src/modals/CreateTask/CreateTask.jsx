import React from 'react';
import ReactDOM from 'react-dom';
import './CreateTask.css';
import { useState } from 'react';
import { BiWindowClose } from 'react-icons/bi';


const CreateTask = ({ isOpen, onClose, addTaskToList }) => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleTaskNameChange = (e) => {
        setTaskName(e.target.value);
    }

    const handleTaskDescriptionChange = (e) => {
        setTaskDescription(e.target.value);
    }

    const handleDeadlineChange = (e) => {
        setDeadline(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            taskName,
            taskDescription,
            deadline
        }
        const trimmedTaskName = taskName.trim();
        const trimmedTaskDescription = taskDescription.trim();
        if (!trimmedTaskName || !trimmedTaskDescription) {
            alert('Please fill in all the fields');
            return;
        }
        addTaskToList(newTask);
        setTaskName('');
        setTaskDescription('');
        setDeadline('');
        onClose();
    }

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal">
                <BiWindowClose className="close-icon" onClick={() => { onClose(); setTaskName(''); setTaskDescription(''); setDeadline('') }} />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="taskName">Task Name:</label>
                        <input type="text" id="taskName" value={taskName} onChange={handleTaskNameChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="taskDescription">Task Description:</label>
                        <textarea id="taskDescription" value={taskDescription} onChange={handleTaskDescriptionChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="deadline">Deadline:</label>
                        <input type="date" id="deadline" value={deadline} onChange={handleDeadlineChange} required />
                    </div>
                    <button type="submit">Add Task</button>
                </form>
            </div>
        </div>,
        document.getElementById('modal-root')
    );
};

export default CreateTask;
