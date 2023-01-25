import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Users } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/shared/users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {



  utilisateur: Users = {};
  utilisateurs!: Users[];
  interval!: NodeJS.Timer;

  constructor(private usersService: UsersService) { }

  

  ngOnInit() {
    // Bonjout tt le monde
    this.getAll();
    this.interval = setInterval(() => {
      this.getAll();
    }, 5000);
  }

  getAll() {
    this.usersService.getAll().subscribe(res => {
      this.utilisateurs = res;
    })
  }

  add(form: NgForm) {
    
    if (this.utilisateur.id != null) {
      this.usersService.update(this.utilisateur.id, this.utilisateur).subscribe(res => {
        this.getAll();
        form.resetForm();
      })
    } else {
      this.usersService.add(this.utilisateur).subscribe(res => {
        this.getAll();
        form.resetForm();
      })
    }
  }

  delete(id: number) {
    this.usersService.delete(id).subscribe(data => {
      this.getAll();
    })
  }

  get(id: number) {
    this.usersService.getOne(id).subscribe(res => {
      this.utilisateur = res;
      this.getAll();
    })
  }



}



