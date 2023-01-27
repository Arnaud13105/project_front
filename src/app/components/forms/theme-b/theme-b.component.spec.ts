import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeBComponent } from './theme-b.component';

describe('ThemeBComponent', () => {
  let component: ThemeBComponent;
  let fixture: ComponentFixture<ThemeBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
