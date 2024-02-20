import Completed from "../Completed/Completed";
import InProgress from "../InProgress/InPogress";
import './Content.css';
import React, { useEffect } from 'react';
import CreateTask from "../../modals/CreateTask/CreateTask";
import { useState } from 'react';
import TaskItem from "../TaskItem/TaskItem";


const Content = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
            setTaskList(JSON.parse(savedTasks));
        }
    }, []);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const addTaskToList = (task) => {
        const updatedTaskList = [...taskList, task];
        setTaskList(updatedTaskList);
        localStorage.setItem('tasks', JSON.stringify(updatedTaskList));
    }

    const deleteTask = (id) => {
        const updatedTaskList = taskList.filter(task => task.id !== id);
        setTaskList(updatedTaskList);
        localStorage.setItem('tasks', JSON.stringify(updatedTaskList));
        localStorage.removeItem(`task_${id}_completed`);
    }

    const toggleTaskStatus = (id, isCompleted) => {
        const updatedTaskList = taskList.map(task => {
            if (task.id === id) {
                return { ...task, isCompleted };
            }
            return task;
        });
        setTaskList(updatedTaskList);
        localStorage.setItem('tasks', JSON.stringify(updatedTaskList));
    }

    const completedTasks = taskList.filter(task => JSON.parse(localStorage.getItem(`task_${task.id}_completed`)));
    const inProgressTasks = taskList.filter(task => !JSON.parse(localStorage.getItem(`task_${task.id}_completed`)));

    return (
        <div className="content">
            <h1>My Tasks</h1>
            <div className="cardItem">
                <button className="addTaskBtn" onClick={openModal}>Add New Task</button>
                <InProgress inProgressCount={inProgressTasks.length} totalCount={taskList.length} />
                <Completed completedCount={completedTasks.length} totalCount={taskList.length} />
            </div>
            <CreateTask isOpen={isModalOpen} onClose={closeModal} addTaskToList={addTaskToList}></CreateTask>
            <div className="taskList">
                {taskList.map((task) => (
                    <TaskItem
                        key={task.id}
                        id={task.id}
                        taskName={task.taskName}
                        deadline={task.deadline}
                        onDelete={deleteTask}
                        onToggle={toggleTaskStatus}
                    />
                ))}
            </div>
        </div>
    );
}

export default Content;