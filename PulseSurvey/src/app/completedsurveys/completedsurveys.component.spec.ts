import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedsurveysComponent } from './completedsurveys.component';

describe('CompletedsurveysComponent', () => {
  let component: CompletedsurveysComponent;
  let fixture: ComponentFixture<CompletedsurveysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedsurveysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedsurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
