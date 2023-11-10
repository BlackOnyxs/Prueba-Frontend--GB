import { FC, PropsWithChildren, useReducer, useEffect } from 'react';
import { PeopleContext, peopleReducer } from './';
import { Person } from '../interfaces';

export interface PeopleState {
    isLoading: boolean;
    people: Person[] | [];
    errorMessage: string;
}

const People_INITIAL_STATE: PeopleState = {
    isLoading: true,
    people: [],
    errorMessage: '',
}

export const PeopleProvider:FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch ]= useReducer(peopleReducer, People_INITIAL_STATE)

    useEffect(() => {
      loadPeople()
    }, [])
    

    const loadPeople = () => {
        const peopleFromStorage =  localStorage.getItem('people');
        const peopleList: Person[] = JSON.parse(peopleFromStorage!) || []

        dispatch({
            type: '[People] - Load From Storage',
            payload: peopleList
        });
        toggleLoading();
    }

    const addPerson = ( person: Person ) => {
        try {
            localStorage.setItem('people', JSON.stringify([...state.people, person]));
            dispatch({
                type: '[People] - Add',
                payload: person
            })
        } catch (error: any) {
            setErrorMessage(error);
        }
    }

    const setErrorMessage = ( message: string  ) => {
        dispatch({
            type: '[People] - Set Error Message',
            payload: message
        })
    }
    const toggleLoading = () => {
        dispatch({ type: '[People] - ToogleLoading' });
    }

    return (
        <PeopleContext.Provider value={{
            ...state,
            loadPeople,
            addPerson,
            toggleLoading,
            setErrorMessage,
        }}>
            { children }
        </PeopleContext.Provider>
    );
}