import React from 'react'

//exportar de forma nombrada
export function TodoList({todos}) {
    return (
        <ul>
            {todos.map((todo)=>(
                <li>Tareas</li>
            ))}
        </ul>
    );
}
