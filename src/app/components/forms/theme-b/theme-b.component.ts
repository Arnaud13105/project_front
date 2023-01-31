import { Component } from '@angular/core';
import { ThemesService } from 'src/app/shared/themes/themes.service';
import { Formation } from 'src/app/interfaces/formation';
import { Sessions } from 'src/app/interfaces/sessions';
import { SessionsService } from 'src/app/shared/sessions/sessions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-theme-b',
  templateUrl: './theme-b.component.html',
  styleUrls: ['./theme-b.component.css']
})
export class ThemeBComponent {

  themes: Formation[] = [];
  session: Sessions = {};
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
   })
  }
  
  formationDetail(id: number){
    this.router.navigate(['sessions', id]);
  }
  }
  
