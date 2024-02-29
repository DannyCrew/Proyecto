import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximamanteComponent } from './proximamante.component';

describe('ProximamanteComponent', () => {
  let component: ProximamanteComponent;
  let fixture: ComponentFixture<ProximamanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProximamanteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProximamanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
