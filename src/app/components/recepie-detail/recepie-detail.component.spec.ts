import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepieDetailComponent } from './recepie-detail.component';

describe('RecepieDetailComponent', () => {
  let component: RecepieDetailComponent;
  let fixture: ComponentFixture<RecepieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecepieDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecepieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
