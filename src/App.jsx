import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskManager from './pages/TaskManager/TaskManager';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TaskManager />
      </div>
    </BrowserRouter>
  );
}

export default App;
