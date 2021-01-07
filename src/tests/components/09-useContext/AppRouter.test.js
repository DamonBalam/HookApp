import { mount } from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en el AppRouter', () => {

    const user = {
        id:1,
        name: 'Arturo'
    }

    const wrapper = mount(
        <UserContext.Provider value={{user}}>
            <AppRouter />
        </UserContext.Provider>
    );

    test('Debe de cargar correctamente <AppRouter />', () => {
        
        expect( wrapper ).toMatchSnapshot();
    });
});
