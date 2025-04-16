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
      UserImage: '../../../assets/meme.jpg',
      UserName: 'Mariam Hossini',
      Email: 'hossinimariam93@gmail.com',
      Password: 'mariam',
    },
  ];
  constructor() {}

  addUser(user: IuserEmail) {
    this.existEmail.Email = user.Email;
    this.existEmail.Password = user.Password;
    this.existEmail.UserName = user.UserName;
    this.Users.push(this.existEmail);
  }
}
