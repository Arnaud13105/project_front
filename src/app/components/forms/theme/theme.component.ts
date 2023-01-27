import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Theme } from 'src/app/interfaces/themes';
import { ThemesService } from 'src/app/shared/themes/themes.service';



@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {


theme1: Theme = {}
themes: Theme[] = [];

constructor(private themesService: ThemesService) { }

ngOnInit(): void {
  this.getAll()
}

getAll() {
  this.themesService.getAll().subscribe(res => {
    this.themes = res;
  })
}


getTheme1(theme: string){
  this.themesService.getTheme(theme).subscribe(res => {
    this.theme1 = res;
    this.getAll();
  })
}







}
