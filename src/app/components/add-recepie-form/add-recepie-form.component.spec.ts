import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecepieFormComponent } from './add-recepie-form.component';

describe('AddRecepieFormComponent', () => {
  let component: AddRecepieFormComponent;
  let fixture: ComponentFixture<AddRecepieFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRecepieFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecepieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
