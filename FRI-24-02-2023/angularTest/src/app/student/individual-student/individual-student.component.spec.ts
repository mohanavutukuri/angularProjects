import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualStudentComponent } from './individual-student.component';

describe('IndividualStudentComponent', () => {
  let component: IndividualStudentComponent;
  let fixture: ComponentFixture<IndividualStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualStudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividualStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
