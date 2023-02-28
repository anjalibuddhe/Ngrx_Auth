import { AuthStatesInterface } from "../auth/types/authStates.interface";
import { Action, createReducer, on } from '@ngrx/store';
import { registerActions } from "./actions/register.actions";


const initialState :AuthStatesInterface={
    isSubmitting:false
}

const authReudcer =createReducer(
    initialState,
    on(
        registerActions,
        (state):AuthStatesInterface=>({
            ...state,
            isSubmitting:true
        })
    )
)

export function reducers(state:AuthStatesInterface,action:Action){
    return authReudcer(state,action)
}