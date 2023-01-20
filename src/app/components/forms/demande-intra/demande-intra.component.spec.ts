import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeIntraComponent } from './demande-intra.component';

describe('DemandeIntraComponent', () => {
  let component: DemandeIntraComponent;
  let fixture: ComponentFixture<DemandeIntraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeIntraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeIntraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
