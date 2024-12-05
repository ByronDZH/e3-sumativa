import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesContactosComponent } from './solicitudes-contactos.component';

describe('SolicitudesContactosComponent', () => {
  let component: SolicitudesContactosComponent;
  let fixture: ComponentFixture<SolicitudesContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolicitudesContactosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudesContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
