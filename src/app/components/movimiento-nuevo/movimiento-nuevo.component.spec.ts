import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientoNuevoComponent } from './movimiento-nuevo.component';

describe('MovimientoNuevoComponent', () => {
  let component: MovimientoNuevoComponent;
  let fixture: ComponentFixture<MovimientoNuevoComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MovimientoNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
