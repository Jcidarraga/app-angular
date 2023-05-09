import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSolicitudComponent } from './message-solicitud.component';

describe('MessageSolicitudComponent', () => {
  let component: MessageSolicitudComponent;
  let fixture: ComponentFixture<MessageSolicitudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageSolicitudComponent]
    });
    fixture = TestBed.createComponent(MessageSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
