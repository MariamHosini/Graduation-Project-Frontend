import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode'; 
import { IuserEmail } from '../models/iuser-email';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { IuserData } from '../models/iuser-data';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData:IuserData = {} as IuserData;
  private apiUrl = 'https://localhost:7157/api/Account/Login';
  private apiUrlregister = 'https://localhost:7157/api/Account/Register';

  // Observable logged user status
  private _logged = new BehaviorSubject<boolean>(false);
  public logged$: Observable<boolean> = this._logged.asObservable();

  loggedUser: IuserEmail | null = null;
  token: string = '';
  loggedUserId : number | null =null;
  constructor(private http: HttpClient) {}

  // Login method to authenticate and get the token
  login(credentials: { userName: string | null; password: string | null }) {
    
    return this.http.post<{ token: string }>(this.apiUrl, credentials);
  }

  register(credentials: { userName: string | null; password: string | null; email: string }) {
    return this.http.post(this.apiUrlregister, credentials, { responseType: 'text' });
  }

  // Set login state
  setLoggedIn(status: boolean) {
    this._logged.next(status);
  }

  // Decode JWT token and extract userId and roles
  decodeToken(token: string) {
    const decoded: any = jwtDecode(token);
    console.log("Decoded JWT:", decoded);

    const userId = decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
    const name = decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    let roles = decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

    // If only one role, wrap it into an array
    if (roles && !Array.isArray(roles)) {
      roles = [roles];
    }

    console.log("User ID:", userId);
    console.log("Name:", name);
    console.log("Roles:", roles);

    return { userId, name, roles };
  }
  getUserData(id:number){
    return  this.http.get<IuserData>(
          `${environment.baseURL}/api/Account/getuser/${id}`
        );
  }
  UpdateUserProfile(id:number , data : {userName : string , profileImageUrl : string}){
    return  this.http.put<IuserData>(
          `${environment.baseURL}/api/Account/getuser/${id}`,data)
        ;
  }
  
}
