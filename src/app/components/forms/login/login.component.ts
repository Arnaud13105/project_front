import { Component } from '@angular/core';
import { Login } from 'src/app/interfaces/login';
import { LoginService } from 'src/app/shared/login/login.service';
import { Users } from 'src/app/interfaces/users'
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email!: string;
  password!: string;





  res!: any;

  constructor(
    private loginservice: LoginService,
    private router: Router,
    
    
    ) { }


  loginHandler() {

    let loginSend: Login = {
      email : this.email,
      password : this.password
    }
   

   


    this.loginservice.login(loginSend).subscribe( (res:any) => {
      this.res = res;
      console.log(this.res.id);
      console.log(loginSend)
      
      if (this.res.id !== undefined) {
        this.router.navigate(['/homeConnected']),
        localStorage.setItem('user', res)
      } else { console.log('error');
      alert("email ou password invalide")
       }
    })

    
  }


 


}
