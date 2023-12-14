import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudusuarioPerfilListarComponent } from './solicitudusuario-perfil-listar.component';

describe('SolicitudusuarioPerfilListarComponent', () => {
  let component: SolicitudusuarioPerfilListarComponent;
  let fixture: ComponentFixture<SolicitudusuarioPerfilListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitudusuarioPerfilListarComponent]
    });
    fixture = TestBed.createComponent(SolicitudusuarioPerfilListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
