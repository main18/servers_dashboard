import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
    providedIn: 'root'
})

export class UsersService {
    usersList: { id: number, name: string }[] = [
        new User(1,'Aymane'),
        new User(2, 'Zakaria'),
        new User(3, 'Souhail'),
    ]

    getUsersList() : User[]{
        return this.usersList;
    }

    getUser(id:number):User{
        return this.usersList.find((user)=>user.id==id);
    }
}