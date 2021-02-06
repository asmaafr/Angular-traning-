import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  added: boolean= false;
  nom: string;
  prenom: string;
  mail: string;
  password: string;
  index;
  showupdatebtn: boolean= false;
  public inputStyle = {
    border: "none",
  }
  //get user from local storage or emty array if user not exist in local storage 
  users = JSON.parse(localStorage.getItem("users")) || [];
  
  constructor() { }

  ngOnInit(): void {
  }
//event Binding 
add()
{
  this.added=true;
  // create user object to save it
  let user = {
    nom: this.nom,
    prenom: this.prenom,
    mail : this.mail,
    password: this.password
  };
  // push object  to users
  this.users.push(user);

  // save users in local storage
  localStorage.setItem("users",  JSON.stringify(this.users))
  //  call reset method
  this.reset();

}
reset()
{
  // reset data
  this.nom='';
  this.prenom='';
  this.mail='';
  this.password='';
  // this.inputStyle

  this.added=false;  
}

onUpdate(i){
  this.showupdatebtn=true;
  this.index = i;
  console.log(i);
  var currentUser =this.users[i];
  this.nom= currentUser.nom;
  this.prenom= currentUser.prenom;
  this.mail= currentUser.mail;
  this.password= currentUser.password;
}

update(){
  this.showupdatebtn=false;
  let currentUser = this.users[this.index];
  currentUser.nom =this.nom;
  currentUser.prenom =this.prenom;
  currentUser.mail = this.mail;
  currentUser.password = this.password;
  // modification sur le variable user
  this.users.splice(this.index, 1, currentUser ); 
  // sauvegarder user dans le localStorage
  localStorage.setItem("users",  JSON.stringify(this.users));
  //  call reset method
  this.reset();
}

}

