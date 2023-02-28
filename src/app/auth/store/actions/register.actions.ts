import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { RegisterRequestInterface } from '../../auth/types/registerRequest.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

export const registerActions = createAction(
  ActionTypes.REGISTER,
  props<{ request : RegisterRequestInterface}>()
);


export const registerSuccessAction =createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{currentUser:CurrentUserInterface}>()
)

export const registerfailuerAction =createAction(ActionTypes.REGISTER_FAILUARE)