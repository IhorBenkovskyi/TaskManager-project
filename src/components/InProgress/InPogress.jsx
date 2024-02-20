import React from 'react';
import './InProgress.css';

const InProgress = ({ inProgressCount, totalCount }) => {

    return (
        <div className="card">
            <h2>In Progress</h2>
            <p>{inProgressCount}/{totalCount}</p>
        </div>
    );
}

export default InProgress;