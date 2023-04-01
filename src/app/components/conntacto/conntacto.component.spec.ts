import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConntactoComponent } from './conntacto.component';

describe('ConntactoComponent', () => {
  let component: ConntactoComponent;
  let fixture: ComponentFixture<ConntactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConntactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConntactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
