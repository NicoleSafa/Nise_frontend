import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudusuarioDetailEditarComponent } from './solicitudusuario-detail-editar.component';

describe('SolicitudusuarioDetailEditarComponent', () => {
  let component: SolicitudusuarioDetailEditarComponent;
  let fixture: ComponentFixture<SolicitudusuarioDetailEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolicitudusuarioDetailEditarComponent]
    });
    fixture = TestBed.createComponent(SolicitudusuarioDetailEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
