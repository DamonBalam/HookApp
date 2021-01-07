const { shallow } = require("enzyme");
const { NavBar } = require("../../../components/09-useContext/NavBar");

describe('Pruebas en el NavBar', () => {
    
    test('Debe de cargar correctamente el <NavBar />', () => {
        
        const wrapper = shallow( <NavBar /> );

        expect( wrapper ).toMatchSnapshot();
    });
    
})
