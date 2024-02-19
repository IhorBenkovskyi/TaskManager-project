import Content from "../../components/Content/Content";
import Sidebar from "../../components/Sidebar/Sidebar";
import './TaskManager.css';

const TaskManager = () => {
    return (
        <div className="taskBoard" >
            <Sidebar />
            <div className="taskBoard__content">
                <Content />
            </div>
        </div>
    );
}

export default TaskManager;