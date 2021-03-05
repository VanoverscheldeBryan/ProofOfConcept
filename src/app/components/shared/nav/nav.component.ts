import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgProgress } from 'ngx-progressbar';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  constructor(private progress: NgProgress, public progressBar: ProgressBarService, public authService : AuthService, private router: Router) { }


  ngOnInit(): void {
    this.progressBar.progressRef = this.progress.ref('progressBar')
    
  }

  onClickMe(){
    console.log("pressed")
    localStorage.clear()
    this.router.navigate(['/']);
    location.reload()
  }


}
