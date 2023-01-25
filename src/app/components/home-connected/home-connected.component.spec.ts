import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConnectedComponent } from './home-connected.component';

describe('HomeConnectedComponent', () => {
  let component: HomeConnectedComponent;
  let fixture: ComponentFixture<HomeConnectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeConnectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeConnectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
