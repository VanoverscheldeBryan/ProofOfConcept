import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/models/signInData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly mockedUser = new SignInData("bryan@hotmail.com", "123")
  isAuthenticated = false

  constructor(private router: Router){

  }
  authenticate(signInData: SignInData): boolean {
    if(this.checkCredentials(signInData)){
      this.isAuthenticated = true
      this.router.navigate(['shoppingCart'])
      return true
    }
    this.isAuthenticated = false
    return false
  }
  private checkCredentials(signInData : SignInData) : boolean{
    return this.checkUserName(signInData.getEmail()) && this.checkPassword(signInData.getPassword())
  }

  private checkUserName(email: string): boolean{
    return email === this.mockedUser.getEmail()
  }
  private checkPassword(password: string): boolean{
    return password === this.mockedUser.getPassword()
  }


  logout(){

    this.isAuthenticated = false
    this.router.navigate([''])
  }
  // show = true;
  // constructor(private router: Router) { }


  // loggedIn(){
  //   setTimeout(()=>{

  //   const token = localStorage.getItem('username')
  //   if(token === 'Bryan'){
  //     this.show = !this.show
  //     this.router.navigate(['/shoppingCart']);
  //     console.log('loggedIn')

      
  //   }
  // }, 3000);
  // }
  
  
  // loggedOut(){
  //   console.log("loggedOut")
  //   localStorage.clear()
  //   this.show = !this.show
  //   this.router.navigate(['']);
  //   // location.reload()
  // }
  }

