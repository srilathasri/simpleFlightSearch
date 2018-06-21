import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentComponent } from './content.component';
import { ContainerComponent } from '../container/container.component';
import { HeaderComponent } from '../header/header.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { ContentContainerComponent } from '../content-container/content-container.component';
import { SearchFormComponent } from '../search-form/search-form.component';
import { FlightCardComponent } from '../flight-card/flight-card.component';
import { MaterialsModule } from '../../materials/materials.module';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormUtilsService } from '../../services/form-utils.service';

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;

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
      imports: [MaterialsModule, RouterModule, HttpModule, ReactiveFormsModule],
      providers: [FormUtilsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
