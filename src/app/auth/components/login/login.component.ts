import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SignInData } from 'src/app/models/signInData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})


export class LoginComponent implements OnInit {

  areCredentialsInvalid = false;
  model : any = {

  }
  constructor(public authService : AuthService, private router: Router, public progressBar: ProgressBarService, ) { }

  ngOnInit(): void {

   
  }

  onSubmit(f: NgForm) {

    console.log(f.value)
    const signInData = new SignInData(f.value.email, f.value.password)
    this.authService.authenticate(signInData)
    this.checkCredentials(f)

//     setTimeout(()=>{

//     console.log(this.model)
//     if(this.model.username === "Bryan" && this.model.password === '123'){
//     this.progressBar.startLoading();
//     localStorage.setItem('username', "Bryan")
//     setTimeout(()=>{
//       this.progressBar.completeLoading();
//       this.router.navigate(['/shoppingCart']);
//       // console.log(f.value);  // { first: '', last: '' }
//       // console.log(f.valid);  // false                       //<<<---using ()=> syntax
//  }, 1000);}


//  else{
//    console.log('Error: username must be Bryan && password must be 123')
//    localStorage.clear()
//  }
// }, 2000);

  }

  private checkCredentials(f: NgForm){
    const signInData = new SignInData(f.value.email, f.value.password)
    if(!this.authService.authenticate(signInData)){
      this.areCredentialsInvalid = true
    }
  }

}
