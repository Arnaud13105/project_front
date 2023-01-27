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
 formationId!: any;

 constructor(private sessionsService: SessionsService) { this.formationId = localStorage.getItem('formationId');}

ngOnInit(): void {
  this.getAll();
}


 getAll() {
  this.sessionsService.getAll().subscribe(res => {
    this. sessions = res;
  })
}

}
