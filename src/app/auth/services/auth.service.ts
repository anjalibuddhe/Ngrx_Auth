import { Injectable } from "@angular/core";
import { RegisterComponent } from "../components/register/register.component";
import { Observable, map } from "rxjs";
import {HttpClient} from "@angular/common/http"
import { environment } from "src/environments/environment";
import { AuthResponceInterface } from "../auth/types/authResponce.interface";
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface";

@Injectable()
export class AuthService{

    constructor(private http:HttpClient){}
    register(data:RegisterComponent):Observable<CurrentUserInterface>{
        const url =environment.apiUrl + '/users'
        return this.http.post<AuthResponceInterface>(url,data).pipe(map((response:AuthResponceInterface)=>response.user))
    }
}