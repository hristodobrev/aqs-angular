import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AqsDataComponent } from './aqs-data.component';

describe('AqsDataComponent', () => {
  let component: AqsDataComponent;
  let fixture: ComponentFixture<AqsDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AqsDataComponent]
    });
    fixture = TestBed.createComponent(AqsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
