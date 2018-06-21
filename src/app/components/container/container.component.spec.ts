import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerComponent } from './container.component';
import { HeaderComponent } from '../header/header.component';
import { ContentComponent } from '../content/content.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { ContentContainerComponent } from '../content-container/content-container.component';
import { SearchFormComponent } from '../search-form/search-form.component';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialsModule } from '../../materials/materials.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormUtilsService } from '../../services/form-utils.service';
import { HttpModule } from '@angular/http';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

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
        FlightCardComponent
      ],
      imports: [
        RouterTestingModule,
        MaterialsModule,
        ReactiveFormsModule,
        HttpModule
      ],
      providers: [FormUtilsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
