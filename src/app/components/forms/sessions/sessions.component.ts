import { Component } from '@angular/core';
import { Sessions } from 'src/app/interfaces/sessions';
import { SessionsService } from 'src/app/shared/sessions/sessions.service'

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent {
 session: Sessions = {};
 sessions: Sessions[] = [];
 formation!: any;
 formationId!: any

 constructor(private sessionsService: SessionsService) { this.formation = localStorage.getItem('formation');}

ngOnInit(): void {
  this.getAll();
  console.log(this.formation)
  console.log(this.session.formationId)
}


 getAll() {
  this.sessionsService.getAll().subscribe(res => {
    this. sessions = res;
  })
}

}
