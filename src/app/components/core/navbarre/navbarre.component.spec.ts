import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarreComponent } from './navbarre.component';

describe('NavbarreComponent', () => {
  let component: NavbarreComponent;
  let fixture: ComponentFixture<NavbarreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
