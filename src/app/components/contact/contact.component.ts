import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
constructor(private router: Router) {}

goTo1(){
  this.router.navigate(['/demandeintra'])
}
goTo2(){
  this.router.navigate(['/demandePerso'])
}
  
}
