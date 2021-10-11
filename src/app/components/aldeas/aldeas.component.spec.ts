import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AldeasComponent } from './aldeas.component';

describe('AldeasComponent', () => {
  let component: AldeasComponent;
  let fixture: ComponentFixture<AldeasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AldeasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AldeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
