import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Formation} from 'src/app/interfaces/formation';
import { ThemesService } from 'src/app/shared/themes/themes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {

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

goTo(): void{
  this.router.navigate(['/form']);
}
}