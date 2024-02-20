import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import 'moment/locale/en-gb';
import React, { useState } from 'react';
import './Sidebar.css';
import { BiBookAlt, BiSolidReport, BiStats, BiTask } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { atom, useAtom } from 'jotai';

moment.locale('en-gb');

export const selectedDateAtom = atom(new Date());

const Sidebar = () => {
    const [selectedDate, setSelectedDate] = useAtom(selectedDateAtom);
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <BiBookAlt className="sidebar__logo__icon" />
                <h2>My ToDo</h2>
            </div>
            <Calendar className="myCalendar" locale="en-GB" onChange={handleDateChange} value={selectedDate} />
            <div className='sidebar__menu'>
                <Link to='/alltasks' className='item'>
                    <BiSolidReport className='icon' />
                    All Tasks
                </Link>
                <Link to='/completedtasks' className='item'>
                    <BiTask className='icon' />
                    Completed Tasks
                </Link>
                <Link to='/inprogress' className='item'>
                    <BiStats className='icon' />
                    In Progress
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;