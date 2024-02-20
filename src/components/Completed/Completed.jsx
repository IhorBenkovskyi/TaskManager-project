import React from 'react';
import './Completed.css';

const Completed = ({ completedCount, totalCount }) => {
    return (
        <div className='card'>
            <h2>Completed</h2>
            <p>{completedCount}/{totalCount}</p>
        </div>
    );
}

export default Completed;