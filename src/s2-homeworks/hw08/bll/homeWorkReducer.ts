import {UserType} from '../HW8'
import User from "../User";
import React from "react";

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const sortedState = [...state].sort((a, b) => {
                if (a.name > b.name) return action.payload === 'up' ? 1 : -1;
                if (a.name < b.name) return action.payload === 'up' ? -1 : 1;
                return 0;
            });
            return sortedState;


            // need to fix
        }
        case 'check': {

            return state.filter(el => el.age >= 18) // need to fix
        }
        default:
            return state
    }
}
