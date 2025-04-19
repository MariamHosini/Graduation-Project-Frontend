import { Injectable } from '@angular/core';
import { IuserEmail } from '../models/iuser-email';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  Email: IuserEmail | undefined = {} as IuserEmail;
  existEmail: IuserEmail = {} as IuserEmail;

  Users: IuserEmail[] = [
    {
      userImage: '../../../assets/meme.jpg',
      userName: 'Mariam Hossini',
      email: 'hossinimariam93@gmail.com',
      password: 'mariam',
    },
  ];
  constructor() {}

  addUser(user: IuserEmail) {
    this.existEmail.email = user.email;
    this.existEmail.password = user.password;
    this.existEmail.userName = user.userName;
    this.Users.push(this.existEmail);
  }
}
