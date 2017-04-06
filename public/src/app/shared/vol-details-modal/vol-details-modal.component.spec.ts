import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolDetailsModalComponent } from './vol-details-modal.component';

describe('VolDetailsModalComponent', () => {
  let component: VolDetailsModalComponent;
  let fixture: ComponentFixture<VolDetailsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolDetailsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
