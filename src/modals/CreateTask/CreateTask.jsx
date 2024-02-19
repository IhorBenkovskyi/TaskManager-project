import React from 'react';
import ReactDOM from 'react-dom';
import './CreateTask.css';
import { useState } from 'react';


const CreateTask = ({ isOpen, onClose, onSubmit }) => {
    const [task, setTask] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-btn" onClick={onClose}>Close</button>
                <h2>Add New Task</h2>
            </div>
        </div>,
        document.getElementById('modal-root')
    );
};

export default CreateTask;
