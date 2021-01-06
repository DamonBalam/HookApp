import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en el useForm', () => {
    const initialForm = {
        name: 'Arturo',
        email: 'damonbalam@gmail.com',
    };

    test('Debe regresar un formulario por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));

        const [values, handleInputChange, reset] = result.current;

        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('Debe de cambiar el valor de formulario de name', () => {
        const { result } = renderHook(() => useForm(initialForm));

        const [, handleInputChange] = result.current;

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Angel',
                },
            });
        });

        const [values] = result.current;

        expect(values.name).toEqual('Angel');
    });

    test('Debe de restablecler el formulario con reset', () => {
        const { result } = renderHook(() => useForm(initialForm));

        const target = {
            name: 'name',
            value: 'Angel',
        };

        act(() => {
            const [, handleInputChange, reset] = result.current;
            handleInputChange({ target });

            reset();
        });

        const [values] = result.current;

        expect(values).toEqual(initialForm);
    });
});
