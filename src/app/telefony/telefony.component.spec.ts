import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonyComponent } from './telefony.component';

describe('TelefonyComponent', () => {
  let component: TelefonyComponent;
  let fixture: ComponentFixture<TelefonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelefonyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelefonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
