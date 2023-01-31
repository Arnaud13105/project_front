import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Formation} from 'src/app/interfaces/formation';
import { Sessions } from 'src/app/interfaces/sessions';
import { SessionsService } from 'src/app/shared/sessions/sessions.service';
import { ThemesService } from 'src/app/shared/themes/themes.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {

  themes: Formation[] = [];
  sessions: Sessions[] = [];
  formations: Formation[] = [];

  constructor(private themesService: ThemesService,
    private sessionsService: SessionsService,
    private router: Router) { }
  
  ngOnInit(): void {
    this.getAll();
    this.getAll2();
  }
  
  getAll() {
    this.themesService.getAll().subscribe(res => {
      this.themes = res;
    })
  }
  
  getAll2() {
    this.sessionsService.getAllSession().subscribe(res => {
      this. sessions = res;
    })
  }
  
 
  getSessionsByFormationId(id: number){
   this.sessionsService.getSessionsByFormationId(id).subscribe(res => {
     this.sessions = res;
     console.log(this.sessions);
   })
  }
goto(){
  alert("inscription a la session prise en compte")
  this.router.navigate(['/homeConnected'])
}
 
  }
