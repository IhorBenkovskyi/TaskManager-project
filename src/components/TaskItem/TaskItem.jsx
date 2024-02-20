import React from 'react';
import './TaskItem.css';
import { BiCheckCircle, BiTrash } from 'react-icons/bi';
import { useState, useEffect } from 'react';


const TaskItem = ({ id, taskName, deadline, onDelete, onToggle }) => {
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        const completedStatus = JSON.parse(localStorage.getItem(`task_${id}_completed`));
        if (completedStatus) {
            setIsCompleted(completedStatus);
        }
    }, [id]);

    const handleToggle = () => {
        setIsCompleted(!isCompleted);
        onToggle(id, !isCompleted);
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
                <button className="delete-button" onClick={() => onDelete(id)}>
                    <BiTrash className="delete-icon" />
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
