import { Component, OnInit } from '@angular/core';
import { Demandeintra } from 'src/app/interfaces/demandeintra';
import { NgForm } from '@angular/forms';
import { DemandeintraService } from 'src/app/shared/demandeintra/demandeintra.service';
import { getLocaleCurrencyCode } from '@angular/common';

@Component({
  selector: 'app-demande-intra',
  templateUrl: './demande-intra.component.html',
  styleUrls: ['./demande-intra.component.css']
})
export class DemandeIntraComponent {

  demandeintra: Demandeintra = {};
  demandeintras: Demandeintra[] = []; 
  interval!: NodeJS.Timer;

  constructor(private demandeintraService: DemandeintraService) { }

 ngOnInit() {
    this.getAll();
    this.interval = setInterval(() => {
      this.getAll();
    }, 5000);
  }

  getAll() {
    this.demandeintraService.getAll().subscribe(res => {
      this.demandeintras = res;
    })
  }

  add(form: NgForm) {
    if (this.demandeintra.id != null) {
      this.demandeintraService.update(this.demandeintra.id, this.demandeintra).subscribe(res => {
        this.getAll();
        form.resetForm();
      })
    } else {
      this.demandeintraService.add(this.demandeintra).subscribe(res => {
        this.getAll();
        form.resetForm();
      })
    }
  }
  
  get(id: number) {
    this.demandeintraService.getOne(id).subscribe(res => {
      this.demandeintra = res;
      this.getAll();
    })
  }
  
  delete(id: number) {
    this.demandeintraService.delete(id).subscribe(data => {
      this.getAll();
    })   
  }
}
