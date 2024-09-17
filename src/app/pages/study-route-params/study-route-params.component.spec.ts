import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyRouteParamsComponent } from './study-route-params.component';

describe('StudyRouteParamsComponent', () => {
  let component: StudyRouteParamsComponent;
  let fixture: ComponentFixture<StudyRouteParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyRouteParamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyRouteParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
