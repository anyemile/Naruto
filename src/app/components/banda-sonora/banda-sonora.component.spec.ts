import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandaSonoraComponent } from './banda-sonora.component';

describe('BandaSonoraComponent', () => {
  let component: BandaSonoraComponent;
  let fixture: ComponentFixture<BandaSonoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandaSonoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandaSonoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
