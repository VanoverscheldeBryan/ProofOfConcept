import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  show = true;
  constructor(private router: Router) { }


  loggedIn(){
    localStorage.setItem ('Loginstatus', '1');
    console.log('loggedIn')
    const token = localStorage.getItem('Loginstatus')
    if(token === '1'){
      this.show = !this.show
      
    }
  
  }
  loggedOut(){
    console.log("loggedOut")
    localStorage.clear()
    this.show = !this.show
    this.router.navigate(['/']);
    location.reload()
  }
  }

