import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightCardComponent } from './flight-card.component';
import { CommonConfig } from '../../test-config/CommonConfig';
import { MockBackend } from '@angular/http/testing';
import { ResponseOptions } from '@angular/http/src/base_response_options';

describe('FlightCardComponent', () => {
  let component: FlightCardComponent;
  let fixture: ComponentFixture<FlightCardComponent>;
  let backend: MockBackend;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [...CommonConfig.config.declarations],
      imports: [...CommonConfig.config.imports],
      providers: [...CommonConfig.config.providers]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightCardComponent);
    component = fixture.componentInstance;
    component.flightData = {
      price: '4200', carrier: 'Air India', to: {
        code: 'AI201', path: 'HYD > BOM', dep: '2017-08-12', arr: '2017-09-01',
        fro: { code: 'AI202', path: 'BOM > HYD', dep: '2017-09-12', arr: '2017-08-11' },
      }
    };
    backend = TestBed.get(MockBackend);
    fixture.detectChanges();
  });

  it('should create', () => {
    backend.connections.subscribe(connection => {
      connection.mockRespond(new Response(<ResponseOptions>{
        body: JSON.stringify('s')
      }));
    });
    expect(component).toBeTruthy();
  });
});
