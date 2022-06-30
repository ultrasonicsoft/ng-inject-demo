import { Injectable } from '@angular/core';
import { User } from '../@models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getAccounts(): User[] {
    return [
      {
        id: 1,
        name: 'John Doe',
      },
      {
        id: 2,
        name: 'Jim Dawn',
      }
    ];
  }


}
