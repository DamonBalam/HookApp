import { todoReducer } from '../../../components/08-useReducer/todoReducer';

import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en el todoReducer', () => {
    test('Debe de retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    });

    test('Debe de agregar un todo', () => {
        const newTodo = {
            id: 3,
            desc: 'Aprender Express',
            done: false,
        };

        const action = {
            type: 'add',
            payload: newTodo,
        };

        const state = todoReducer(demoTodos, action);

        expect(state.length).toBe(3);
        expect( state ).toEqual( [...demoTodos, newTodo])
    });

    test('Debe de activar el toggle en un todo', () => {
        

        const action = {
            type: 'toggle',
            payload: 1,
        };

        const state = todoReducer(demoTodos, action);
        
        const todo = state[0];

        expect(todo.done).toBe(true);
        expect(state[1]).toEqual(demoTodos[1]);
    });

    test('Debe de eliminar un todo', () => {
       

        const action = {
            type: 'delete',
            payload: 1,
        };

        const state = todoReducer(demoTodos, action);

        expect( state.length ).toBe(1);
        expect( state ).toEqual([ demoTodos[1] ]);
    });
});
