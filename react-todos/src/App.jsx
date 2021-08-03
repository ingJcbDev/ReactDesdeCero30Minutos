import React, {Fragment, useState } from 'react';
import { TodoList } from './components/TodoList';

export function App() {
    const [todos, setTodos] = useState([
        { id: 1, task: "Tarea 1", completed: false },
    ]);
    return (
        <Fragment>
            <TodoList todos={todos} />
            <input type="text" placeholder="Nueva tare" />
            <button>Agregar</button>
            <button>Eliminar</button>
        </Fragment>
    ); 
}