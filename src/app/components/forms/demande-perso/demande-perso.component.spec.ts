import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandePersoComponent } from './demande-perso.component';

describe('DemandePersoComponent', () => {
  let component: DemandePersoComponent;
  let fixture: ComponentFixture<DemandePersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandePersoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandePersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
