import { mount, shallow } from "enzyme";
import { HomeScreen } from "../../../components/09-useContext/HomeScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe('Pruebas en el HomeScreen', () => {
    
    const user = {
        name:'Arturo',
        email: 'damonbalam@gmail.com'
    }

    const setUser = ()=> {};


    const wrapper = mount( 
        <UserContext.Provider value={{user}}>
            <HomeScreen/>
        </UserContext.Provider>
    );

    test('Debe de mostrarse correctamente el <HomeScreen />', () => {

        expect( wrapper ).toMatchSnapshot();

    });
    
});
