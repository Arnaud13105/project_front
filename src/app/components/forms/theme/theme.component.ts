import { Component } from '@angular/core';
import { Formation } from 'src/app/interfaces/formation';
import { ThemesService } from 'src/app/shared/themes/themes.service';
import { Router } from '@angular/router';
import { FormationsComponent } from '../formations/formations.component';








@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {

  url: string = 'http://localhost:8080/api/formations';

  themes: Formation[] = [];
  formation: Formation = {};


  constructor(private themesService: ThemesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getAll();
    console.log(this.themes)
  }

  getAll() {
    this.themesService.getAll().subscribe(res => {
      this.themes = res;
      
    })
  }

  goTo(id: number) {
    this.themesService.getOne(id).subscribe((data: any) => {
      this.formation = data;
      // this.getAll;
      console.log(this.formation.id)
      localStorage.setItem('formation', JSON.stringify(this.formation.id));
    })
    this.router.navigate(['session/:session.id'])
  }
}