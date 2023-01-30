import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/shared/users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {



  utilisateur2: Users = {};
  utilisateurs2!: Users[];
  interval!: NodeJS.Timer;

  constructor(private usersService: UsersService,
    private router: Router
  ) { }



  ngOnInit() {
    // Bonjout tt le monde
    this.getAll();
    this.interval = setInterval(() => {
      this.getAll();
    }, 5000);
  }

  getAll() {
    this.usersService.getAll().subscribe(res => {
      this.utilisateurs2 = res;
    })
  }

  add(form: NgForm) {

    if (this.utilisateur2.id != null) {
      this.usersService.update(this.utilisateur2.id, this.utilisateur2).subscribe(res => {
        this.getAll();
        form.resetForm();
        alert("création de compte réussi"), 5000
        this.router.navigate(['/login'])
      })
    } else {
      this.usersService.add(this.utilisateur2).subscribe(res => {
        this.getAll();
        form.resetForm();
        alert("création de compte réussi"), 5000
        this.router.navigate(['/login'])
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
      this.utilisateur2 = res;
      this.getAll();
    })
  }

  GoTo() {
    alert("création de compte réussi"), 5000
    this.router.navigate(['/login'])
  }

}



