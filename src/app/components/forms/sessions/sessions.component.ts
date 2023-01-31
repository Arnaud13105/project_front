import { Component, OnInit } from '@angular/core';
import { Sessions } from 'src/app/interfaces/sessions';
import { SessionsService } from 'src/app/shared/sessions/sessions.service'
import { Formation } from 'src/app/interfaces/formation';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  session: Sessions = {} ;
  sessions: Sessions[] = [];
  formations: Formation[] = [];
  
 
  constructor(private sessionsService: SessionsService,
    private route: ActivatedRoute) {}
 
 ngOnInit(): void {
   this.getAll();

 }
 
  getAll() {
   this.sessionsService.getAllSession().subscribe(res => {
     this. sessions = res;
   })
 }
 

 getSessionsByFormationId(id: number){
  this.sessionsService.getSessionsByFormationId(id).subscribe(res => {
    this.sessions = res;
  })
 }
 
 }
