import { Component } from '@angular/core';
import { Theme } from 'src/app/interfaces/themes';
import { THEME2 } from 'src/app/interfaces/mock-themes';

@Component({
  selector: 'app-theme-b',
  templateUrl: './theme-b.component.html',
  styleUrls: ['./theme-b.component.css']
})
export class ThemeBComponent {
  theme1 = THEME2;
  selectedFormation?: Theme;
  
  onselect(formation: Theme): void {
    this.selectedFormation = formation;
  }
}
