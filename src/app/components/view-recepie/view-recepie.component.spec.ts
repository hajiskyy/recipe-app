import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRecepieComponent } from './view-recepie.component';

describe('ViewRecepieComponent', () => {
  let component: ViewRecepieComponent;
  let fixture: ComponentFixture<ViewRecepieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRecepieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRecepieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
