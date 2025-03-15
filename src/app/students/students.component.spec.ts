import { ComponentFixture, TestBed } from '@angular/core/testing';

import { studentsComponent } from './students.component';

describe('StudentsComponent', () => {
  let component: studentsComponent;
  let fixture: ComponentFixture<studentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [studentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(studentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
