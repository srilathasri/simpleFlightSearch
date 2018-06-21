import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ContentContainerComponent } from './components/content-container/content-container.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { MaterialsModule } from './materials/materials.module';
import { FlightCardComponent } from './components/flight-card/flight-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormUtilsService } from './services/form-utils.service';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialsModule,
        ReactiveFormsModule,
        HttpModule
      ],
      declarations: [
        AppComponent,
        ContainerComponent,
        HeaderComponent,
        ContentComponent,
        SidenavComponent,
        ContentContainerComponent,
        SearchFormComponent,
        FlightCardComponent
      ],
      providers: [FormUtilsService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
