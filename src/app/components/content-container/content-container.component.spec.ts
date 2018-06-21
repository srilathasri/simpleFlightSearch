import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentContainerComponent } from './content-container.component';
import { MaterialsModule } from '../../materials/materials.module';
import { AppModule } from '../../app.module';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ContainerComponent } from '../container/container.component';
import { ContentComponent } from '../content/content.component';
import { HeaderComponent } from '../header/header.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { SearchFormComponent } from '../search-form/search-form.component';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonConfig } from '../../test-config/CommonConfig';

describe('ContentContainerComponent', () => {
  let component: ContentContainerComponent;
  let fixture: ComponentFixture<ContentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContainerComponent,
        HeaderComponent,
        ContentComponent,
        ContainerComponent,
        HeaderComponent,
        ContentComponent,
        SidenavComponent,
        ContentContainerComponent,
        SearchFormComponent,
        FlightCardComponent],
      imports: [...CommonConfig.config.imports]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentContainerComponent);
    component = fixture.componentInstance;
    component.readResults = [
      {
        price: '4200', carrier: 'Air India', to: {
          code: 'AI201', path: 'HYD > BOM', dep: '2017-08-12', arr: '2017-09-01',
          fro: { code: 'AI202', path: 'BOM > HYD', dep: '2017-09-12', arr: '2017-08-11' },
        }
      },
      {
        price: '4200', carrier: 'Air India', to: {
          code: 'AI201', path: 'HYD > BOM', dep: '2017-08-12', arr: '2017-09-01',
          fro: { code: 'AI202', path: 'BOM > HYD', dep: '2017-09-12', arr: '2017-08-11' },
        }
      }
    ]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
