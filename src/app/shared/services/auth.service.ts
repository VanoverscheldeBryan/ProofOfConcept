import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from 'src/app/models/signInData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly mockedToken = "abcd"
  private readonly mockedUser = new SignInData("b", "b")
  public isAuthenticated = false

  constructor(private router: Router){

  }


  authenticate(signInData: SignInData): boolean {
    if(this.checkCredentials(signInData)){
      
      this.setToken(this.mockedToken)

      return true;
    }

    this.isAuthenticated = false;
    return false;
  }

  setToken(token) {
    this.isAuthenticated = true;  
    localStorage.setItem('ACCESS_TOKEN', token);
}

  private checkCredentials(signInData : SignInData) : boolean{
    return this.checkUserName(signInData.getEmail()) && this.checkPassword(signInData.getPassword());
  }

  private checkUserName(email: string): boolean{
    return email === this.mockedUser.getEmail();
  }
  private checkPassword(password: string): boolean{
    return password === this.mockedUser.getPassword();
  }


  logout(){

    this.isAuthenticated = false
    localStorage.clear()
    this.router.navigate(['login'])
  }

  }

