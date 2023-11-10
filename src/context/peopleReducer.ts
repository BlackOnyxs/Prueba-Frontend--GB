

import { Person } from '../interfaces';
import { PeopleState } from './';

export type PeopleType = 
| { type: '[People] - ToogleLoading' }
| { type: '[People] - Load From Storage', payload: Person[]  }
| { type: '[People] - Add', payload: Person }
| { type: '[People] - Set Error Message', payload: string }

export const peopleReducer = ( state: PeopleState, action: PeopleType): PeopleState => {
    switch (action.type) {
        case '[People] - ToogleLoading':
            return {
                ...state,
                isLoading: !state.isLoading
            }
        case '[People] - Load From Storage': 
        return {
            ...state,
            people: action.payload,
        }
        case '[People] - Add': 
        return {
            ...state,
            people: [...state.people, action.payload ]
        }
        case '[People] - Set Error Message': 
        return {
            ...state,
            errorMessage: action.payload
        }
        default:
            return state;
    }
}