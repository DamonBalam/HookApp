import PropTypes from "prop-types";
import React from 'react'
import { TodoListItem } from "./TodoListItem";

export const TodoList = ( { todos, handleDelete, handleToggle } ) => {
    return (
        <ul className='list-group list-group-flush'>
            {todos.map((todo, index) => (
                // TodoListItem, todo, index
                <TodoListItem 
                  key={ todo.id }
                  todo={ todo }
                  index={ index }
                  handleDelete={ handleDelete }
                  handleToggle= { handleToggle }
                />
            ))}
        </ul>
    );
}

TodoList.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired
}
