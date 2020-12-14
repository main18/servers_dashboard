import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UsersService } from './users.service';

@Component({
    selector: 'users-app',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})

export class Users implements OnInit{

    usersList : User[];

    constructor(private usersService: UsersService){}

    ngOnInit(){
        this.usersList = this.usersService.getUsersList();
    }

}