import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpensurveysComponent } from './opensurveys.component';

describe('OpensurveysComponent', () => {
  let component: OpensurveysComponent;
  let fixture: ComponentFixture<OpensurveysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpensurveysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpensurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
