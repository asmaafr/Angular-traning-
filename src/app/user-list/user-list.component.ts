import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  //get user from local storage or emty array if user not exist in local storage 
  @Input() users; 

  @Output() updateUser =new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  

  deleteUser(i){
    this.users.splice(i, 1 ); //replace or update
    // save users in local storage 
    localStorage.setItem("users", JSON.stringify(this.users))
  }

updateUserAction(i){
  this.updateUser.emit(i);
}

}