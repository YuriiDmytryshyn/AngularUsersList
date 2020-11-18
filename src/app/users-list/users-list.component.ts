import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  editColor: string;
  deleteColor: string;
  inputLoginPlaceholder = 'Enter login';
  inputPasswordPlaceholder = 'Enter password';
  inputEmailPlaceholder = 'Enter email';
  inputAutocomplete = 'off';
  newUserLogin: string;
  newUserPassword: string;
  newUserEmail: string;
  users: Array<any> = [];
  editIndex: number;
  isCheck = true;

  constructor() { }

  ngOnInit(): void {
  }

  addUser(): void {
    if (this.newUserLogin.length !== 0 && this.newUserPassword.length !== 0 && this.newUserEmail.length !== 0) {
      const user = {
        login: this.newUserLogin,
        password: this.newUserPassword,
        email: this.newUserEmail
      };
      this.users.push(user);
      this.newUserLogin = '';
      this.newUserPassword = '';
      this.newUserEmail = '';
    }
  };

  deleteUser(index: number): void {
    this.users.splice(index, 1);
  };

  edit(index: number): void {
    this.deleteColor = 'tomato';
    this.editColor = 'sandybrown';
    this.isCheck = !this.isCheck;
    this.editIndex = index;
    this.newUserLogin = this.users[index].login;
    this.newUserPassword = this.users[index].password;
    this.newUserEmail = this.users[index].email;
  };

  editUser(): void {
    this.deleteColor = 'orangered';
    this.editColor = 'orange';
    this.isCheck = !this.isCheck;
    this.users[this.editIndex].login = this.newUserLogin;
    this.users[this.editIndex].password = this.newUserPassword;
    this.users[this.editIndex].email = this.newUserEmail;
    this.editIndex = null;
    this.newUserLogin = '';
    this.newUserPassword = '';
    this.newUserEmail = '';
  };
}
