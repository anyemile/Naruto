import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JinchurikisComponent } from './jinchurikis.component';

describe('JinchurikisComponent', () => {
  let component: JinchurikisComponent;
  let fixture: ComponentFixture<JinchurikisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JinchurikisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JinchurikisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
