import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SignInData } from 'src/app/models/signInData';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})


export class LoginComponent implements OnInit {
  public user: FormGroup;
  public errorMessage: string = '';

  areCredentialsInvalid = false;
  model : any = {

  }
  constructor(public authService : AuthService, private router: Router, public progressBar: ProgressBarService, private progress: NgProgress, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.user = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  onSubmit(){
    const signInData = new SignInData(this.user.value.username, this.user.value.password);
    this.authService.authenticate(signInData);

    const validationWithToken = localStorage.getItem("ACCESS_TOKEN");

    if(validationWithToken === "abcd"){
      console.log("backend await...");
        this.router.navigate(['']);

    }else{
      this.errorMessage = 'could not login'
      console.log(this.errorMessage);
    }


          
        
      }
  }


