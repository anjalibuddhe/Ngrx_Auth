import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { AuthService } from "../../services/auth.service";
import { switchMap ,map, of, catchError } from "rxjs";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";
import { registerSuccessAction,registerActions,registerfailuerAction } from "../actions/register.actions";


@Injectable()
export class RegisterEffect {
    register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerActions),
      switchMap(({request}) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            return registerSuccessAction({currentUser})
          }),

           catchError(() => {
             return of(registerfailuerAction())
          })
        )
      })
    )
  )

    constructor(private actions$: Actions, private authService: AuthService) { }
}