import { Injectable } from '@angular/core';
import { IuserEmail } from '../models/iuser-email';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  Email: IuserEmail | undefined = {} as IuserEmail;
  existEmail: IuserEmail = {} as IuserEmail;

  Users: IuserEmail[] = [] as IuserEmail[];
  constructor() {}
  addUser(user: IuserEmail) {
    this.existEmail.Email = user.Email;
    this.existEmail.Password = user.Password;
    this.existEmail.UserName = user.UserName;
    this.Users.push(this.existEmail);
  }
  IsUserExist(user: IuserEmail) {
    this.Email = this.Users.find((exist) => {
      if (exist.Email == user.Email) {
        return true;
      } else {
        return false;
      }
    });
  }
}
