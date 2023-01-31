import { Component, OnInit } from '@angular/core';
import { Demandeintra } from 'src/app/interfaces/demandeintra';
import { NgForm } from '@angular/forms';
import { DemandeintraService } from 'src/app/shared/demandeintra/demandeintra.service';
import { Formation } from 'src/app/interfaces/formation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demande-intra',
  templateUrl: './demande-intra.component.html',
  styleUrls: ['./demande-intra.component.css']
})
export class DemandeIntraComponent {

  demandeintra: Demandeintra = {};
  demandeintras: Demandeintra[] = [];
  formations: Formation[] = [];
  formation: Formation = {};
  interval!: NodeJS.Timer;
  

  constructor(private demandeintraService: DemandeintraService, 
    private router: Router) { }

  ngOnInit() {
    this.getAll();
    this.interval = setInterval(() => {
      this.getAll();
    }, 5000);

    this.getAll2();
  }

  getAll() {
    this.demandeintraService.getAll().subscribe(res => {
      this.demandeintras = res;
    })
  }

  getAll2() {
    this.demandeintraService.getAllFormation().subscribe(res => {
      this.formations = res;
    })
  }



  add(form: NgForm) {
    var formationId= this.formation.id!;
    this.demandeintraService.add(formationId, this.demandeintra).subscribe(res => {
      this.getAll();
      form.resetForm();
      this.router.navigate(['/home']);
      alert("demande intra enregistrée");
      })
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
