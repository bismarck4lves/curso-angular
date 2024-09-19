import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyQueryParamsComponent } from './study-query-params.component';

describe('StudyQueryParamsComponent', () => {
  let component: StudyQueryParamsComponent;
  let fixture: ComponentFixture<StudyQueryParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyQueryParamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyQueryParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
