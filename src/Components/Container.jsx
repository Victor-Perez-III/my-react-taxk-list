import React from 'react'
import { useState } from 'react';
import FormTodo from './FormTodo';
import TaskList from './TaskList';
import Header from './Header';

const Container = () => {
    const [list, setlist] = useState([]);

    const handleAddItem = addItem => {
        setlist([...list, addItem])
    }
    return (
        <div>
            <Header />
            <FormTodo handleAddItem={handleAddItem} />
            <TaskList list={list} setlist={setlist} />
        </div>
    )
}

export default Container