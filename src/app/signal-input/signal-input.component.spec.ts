import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalInputComponent } from './signal-input.component';

describe('SignalInputComponent', () => {
  let component: SignalInputComponent;
  let fixture: ComponentFixture<SignalInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
