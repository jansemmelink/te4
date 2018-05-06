import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateFormComponent } from './activate-form.component';

describe('ActivateFormComponent', () => {
  let component: ActivateFormComponent;
  let fixture: ComponentFixture<ActivateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
