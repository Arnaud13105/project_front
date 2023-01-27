import { Component } from '@angular/core';
import { ThemesService } from 'src/app/shared/themes/themes.service';
import { Formation } from 'src/app/interfaces/formation';


@Component({
  selector: 'app-theme-b',
  templateUrl: './theme-b.component.html',
  styleUrls: ['./theme-b.component.css']
})
export class ThemeBComponent {
  themes: Formation[] = [];

constructor(private themesService: ThemesService) { }

ngOnInit(): void {
  this.getAll();
}

getAll() {
  this.themesService.getAll().subscribe(res => {
    this.themes = res;
  })
}
}
