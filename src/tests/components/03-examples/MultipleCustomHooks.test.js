import { shallow } from "enzyme";
import { MultipleCustomHook } from "../../../components/03-examples/MultipleCustomHook";
import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";


jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Prueba en MultipleCustomHooks', () => {

    beforeEach(() => {
        useCounter.mockReturnValue({
            counter: 10,
            increment: () => {},
        });
    });
 
    
    test('Debe mostrarse correctamente <MultipleCustomHooks />', () => {

        useFetch.mockReturnValue({
            data:null, 
            loading: true,
            error:null
        });
        
        const wrapper = shallow( <MultipleCustomHook />);

        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de mostrar la información', () => {
        useFetch.mockReturnValue({
            data: [{
                author:'Arturo',
                quote: 'Hola mundo'
            }],
            loading: false,
            error: null,
        });

        
        const wrapper = shallow(<MultipleCustomHook />);

        expect( wrapper.find('.alert').exists()).toBe(false);
        expect( wrapper.find('.mb-0').text().trim()).toBe('Hola mundo');
        expect( wrapper.find('footer').text().trim()).toBe('Arturo');
    });
    
    



})
