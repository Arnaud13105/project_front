import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { getLocaleCurrencyCode } from '@angular/common';
import { DemandepersoService } from 'src/app/shared/demandeperso/demandeperso.service';
import { Demandeperso } from 'src/app/interfaces/demandeperso';



@Component({
  selector: 'app-demande-perso',
  templateUrl: './demande-perso.component.html',
  styleUrls: ['./demande-perso.component.css']
})
export class DemandePersoComponent {

  demandeperso: Demandeperso = {};
  demandepersos: Demandeperso[] = []; 
  interval!: NodeJS.Timer;

  constructor(private demandepersoService: DemandepersoService) { }

 ngOnInit() {
    this.getAll();
    this.interval = setInterval(() => {
      this.getAll();
    }, 5000);
  }

  getAll() {
    this.demandepersoService.getAll().subscribe(res => {
      this.demandepersos = res;
    })
  }

  add(form: NgForm) {
    if (this.demandeperso.id != null) {
      this.demandepersoService.update(this.demandeperso.id, this.demandeperso).subscribe(res => {
        this.getAll();
        form.resetForm();
      })
    } else {
      this.demandepersoService.add(this.demandeperso).subscribe(res => {
        this.getAll();
        form.resetForm();
      })
    }
  }
  
  get(id: number) {
    this.demandepersoService.getOne(id).subscribe(res => {
      this.demandeperso = res;
      this.getAll();
    })
  }
  
  delete(id: number) {
    this.demandepersoService.delete(id).subscribe(data => {
      this.getAll();
    })   
  }
}
