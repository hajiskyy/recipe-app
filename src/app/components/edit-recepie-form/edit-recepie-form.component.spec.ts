import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecepieFormComponent } from './edit-recepie-form.component';

describe('EditRecepieFormComponent', () => {
  let component: EditRecepieFormComponent;
  let fixture: ComponentFixture<EditRecepieFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRecepieFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecepieFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
