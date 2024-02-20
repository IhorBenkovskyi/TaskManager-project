import React from 'react';
import './TaskItem.css';
import { BiCheckCircle, BiTrash } from 'react-icons/bi';
import { useState, useEffect } from 'react';


const TaskItem = ({ taskName, deadline, onDelete }) => {
    const [isCompleted, setIsCompleted] = useState(false);

    const handleToggle = () => {
        setIsCompleted(!isCompleted);
        localStorage.setItem(`task_${id}_completed`, JSON.stringify(!isCompleted));
    };
    return (
        <div className={`task-item ${isCompleted ? 'completed' : ''}`}>
            <div className="task-details">
                <h3>{taskName}</h3>
                <p className='deadline'>Deadline: <span>{deadline}</span></p>
            </div>
            <div className="task-buttons">
                <button className="toggle-button" onClick={handleToggle} >
                    <BiCheckCircle className="toggle-icon" />
                </button>
                <button className="delete-button" onClick={onDelete}>
                    <BiTrash className="delete-icon" />
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
