import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Consulta } from './consulta.component';

describe('Consulta', () => {
  let component: Consulta;
  let fixture: ComponentFixture<Consulta>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Consulta]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Consulta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
