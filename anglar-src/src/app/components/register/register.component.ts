import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../Services/validate.service'
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})  
export class RegisterComponent implements OnInit {
name: String;
username: String;
email: String;
password: String;


  constructor(private validateService: ValidateService, private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }
  
  onRegisterSubmit(){
        const user = {
        name: this.name,
        email:this.email,
        username:this.username,
        password:this.password

        }
  
    if(!this.validateService.validateRegister(user)){
    this.flashMessage.show('Please fill in all fields',{cssClass: 'alert-denger',timeout:3000});
    return false;
  }
    if(!this.validateService.validateEmail(user.email)){
   this.flashMessage.show('Please use a valid email',{cssClass: 'alert-denger',timeout:3000});
  return false;
  }

  
  }
  
  //Required Fields
  

}
