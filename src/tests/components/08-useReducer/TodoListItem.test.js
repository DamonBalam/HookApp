import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";


describe('Pruebas en TodoListItem', () => {
    
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow( 
        <TodoListItem  
            todo={ demoTodos[0] }
            index={ 0 }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
        /> 
    );

    test('Debe de mostrar correctamente <TodoListItem />', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de llamar la función handleDelete', () => {
        
        wrapper.find('button').simulate('click');

        expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id );


    });

    test('Debe de llamar la función handleToggle', () => {
        wrapper.find('p').simulate('click');

        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
    });
    
    test('Debe de mostrar el texto correctamente', () => {
        const p = wrapper.find('p');

        expect( p.text() ).toBe(`1. ${demoTodos[0].desc}`);
    
    });

    test('Debe de tener la clase complete si el todo.done es true', () => {

        const todo = demoTodos[0];

        todo.done = true;
        
        const wrapper = shallow(
            <TodoListItem todo={ todo } index={0} handleDelete={handleDelete} handleToggle={handleToggle} />
        );

        expect( wrapper.find('p').hasClass('complete')  ).toBe(true);

    });

})
