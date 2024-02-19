import Completed from "../Completed/Completed";
import InProgress from "../InProgress/InPogress";
import './Content.css';
import React from 'react';
import CreateTask from "../../modals/CreateTask/CreateTask";
import { useState } from 'react';

const Content = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div className="content">
            <h1>My Tasks</h1>
            <div className="cardItem">
                <button className="addTaskBtn" onClick={openModal}>Add New Task</button>
                <InProgress />
                <Completed />
            </div>
            <CreateTask isOpen={isModalOpen} onClose={closeModal}></CreateTask>
        </div>
    );
}

export default Content;