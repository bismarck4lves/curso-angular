import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyNestedRoutesComponent } from './study-nested-routes.component';

describe('StudyNestedRoutesComponent', () => {
  let component: StudyNestedRoutesComponent;
  let fixture: ComponentFixture<StudyNestedRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudyNestedRoutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyNestedRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
