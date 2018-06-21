import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormComponent } from './search-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { MaterialsModule } from '../../materials/materials.module';;
import { FormUtilsService } from '../../services/form-utils.service';

import { AppModule } from '../../app.module';
import { AppComponent } from '../../app.component';
import { ContainerComponent } from '../container/container.component';
import { HeaderComponent } from '../header/header.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { ContentComponent } from '../content/content.component';
import { ContentContainerComponent } from '../content-container/content-container.component';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { RouterModule } from '@angular/router';
import { CommonConfig } from '../../test-config/CommonConfig';
import { MockBackend } from '@angular/http/testing';
describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;
  let backend: MockBackend;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ContainerComponent,
        HeaderComponent,
        SidenavComponent,
        ContentComponent, // 9948250435
        ContentContainerComponent,
        SearchFormComponent,
        FlightCardComponent,
      ],
      imports: [...CommonConfig.config.imports],
      providers: [...CommonConfig.config.providers]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    backend = TestBed.get(MockBackend);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('disable search button if form invalid', () => {
    if (component.searchForm.errors) {
      const button: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('button.search--btn');
      expect(button.disabled).toBeTruthy();
    }
  });

  it('enable search button if form invalid', () => {
    component.searchForm.setValue({
      origin: 'Hyderabad ~ HYD',
      destination: 'Mumbai ~ BOM',
      departure: '2017-09-12',
      passengers: 2,
      pricerange: [0, 3400],
      return: '2017-09-11'
    })
    if (component.searchForm.errors) {
      const button: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('button.search--btn');
      expect(button.disabled).toBeFalsy();
    }
  });
});
