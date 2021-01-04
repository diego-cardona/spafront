import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciospaComponent } from './serviciospa.component';

describe('ServiciospaComponent', () => {
  let component: ServiciospaComponent;
  let fixture: ComponentFixture<ServiciospaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciospaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciospaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
