import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTechComponent } from './new-tech.component';

describe('NewTechComponent', () => {
  let component: NewTechComponent;
  let fixture: ComponentFixture<NewTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
