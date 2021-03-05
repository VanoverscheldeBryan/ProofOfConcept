import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})


export class LoginComponent implements OnInit {

  constructor(private router: Router, public progressBar: ProgressBarService, public authService : AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {

    const loginObserver = {
      next : x => console.log('user logged in')
    }

    this.progressBar.startLoading();
    localStorage.setItem('username', f.value.username)
    setTimeout(()=>{
      this.progressBar.completeLoading();
      this.router.navigate(['/']);
      // console.log(f.value);  // { first: '', last: '' }
      // console.log(f.valid);  // false                       //<<<---using ()=> syntax
 }, 1000);

  }


}
