import { shallow } from "enzyme";
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";

describe('Pruebas en el RealExampleRef', () => {
    
    const wrapper = shallow( <RealExampleRef />);

    test('Debe mostrarse correctamente  <RealExampleRef />', () => {
        
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('MultipleCustomHook').exists() ).toBe(false);

    });

    test('Debe mostrarse el componente <MultipleCustomHook />', () => {

        wrapper.find('button').simulate('click');

        expect(wrapper.find('MultipleCustomHook').exists()).toBe(true);
        
    });
    
    
});
