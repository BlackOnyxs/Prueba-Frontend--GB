import {  PeopleType, peopleReducer } from '../../context';

describe('Test on peopleReducer', () => { 

    const initialState = {
        isLoading: true,
        people: [],
        errorMessage: '',
    }

    test('should toggle loading state', () => {
        const newState = peopleReducer( initialState, { type: '[People] - ToogleLoading'});
        expect( newState.isLoading ).toBeFalsy();
    });

    test('should loadPeopleFromStrorage', () => { 
        const loadAction: PeopleType = {
            type: '[People] - Load From Storage',
            payload: [{ completeName: 'Robin Avila', bornDate: '01/10/2000', comments: 'Test'}]
        }

        const newState = peopleReducer( initialState, loadAction );
        expect( newState.people ).toStrictEqual( loadAction.payload );

    });

    test('should add Person', () => { 
        const addAction: PeopleType = {
            type: '[People] - Add',
            payload: { completeName: 'Robin Avila', bornDate: '01/10/2000', comments: 'Test'}
        }

        const newState = peopleReducer( initialState, addAction );
        expect( newState.people.length ).toBeGreaterThan( initialState.people.length );

    });

    test('should set an ErrorMessage', () => { 
        const setErrorAction: PeopleType = {
            type: '[People] - Set Error Message',
            payload: 'No se pudo cargar la información.'
        }

        const newState = peopleReducer( initialState, setErrorAction );
        expect( newState.errorMessage ).toBe( setErrorAction.payload );

    });
})