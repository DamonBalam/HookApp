import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { HookApp } from '../HookApp';

describe('Pruebas en el HookApp', () => {
    
    test('Debe mostrar el componente <HookApp/> correctamente', () => {
    
        let wrapper = shallow( <HookApp />);


        expect( wrapper ).toMatchSnapshot();
    });

})
