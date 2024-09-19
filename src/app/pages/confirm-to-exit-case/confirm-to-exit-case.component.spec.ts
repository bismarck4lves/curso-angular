import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmToExitCaseComponent } from './confirm-to-exit-case.component';

describe('ConfirmToExitCaseComponent', () => {
  let component: ConfirmToExitCaseComponent;
  let fixture: ComponentFixture<ConfirmToExitCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmToExitCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmToExitCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
