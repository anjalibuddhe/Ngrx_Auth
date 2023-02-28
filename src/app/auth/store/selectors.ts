import { createSelector } from '@ngrx/store';
import { AppStatesInterface } from 'src/app/shared/types/appState.interface';
import { AuthStatesInterface } from '../auth/types/authStates.interface';

export const authFeatureSelector =(
    state:AppStatesInterface):AuthStatesInterface=>state.auth


export const isSubmittingSelector=createSelector(authFeatureSelector,(authState:AuthStatesInterface)=>{
    authState.isSubmitting
})