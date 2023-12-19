import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonDetailsComponent } from './telefon-details.component';

describe('TelefonDetailsComponent', () => {
  let component: TelefonDetailsComponent;
  let fixture: ComponentFixture<TelefonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelefonDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelefonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
