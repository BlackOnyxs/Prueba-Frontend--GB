import { createContext } from 'react';

import { Person } from '../interfaces';


interface ContextProps {
    isLoading: boolean;
    people: Person[] | [];
    errorMessage: string;

    loadPeople: () => void;
    addPerson: (person: Person) => void;
    
    toggleLoading: () => void;
    setErrorMessage: ( message: string ) => void;

}


export const PeopleContext = createContext({} as ContextProps);