import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/**
 * RxJs
 */
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';

/**
 * Material Component module
 */
import { MaterialsModule } from './materials/materials.module';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ContentComponent } from './components/content/content.component';
import { ContentContainerComponent } from './components/content-container/content-container.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { FlightCardComponent } from './components/flight-card/flight-card.component';
import { FormUtilsService } from './services/form-utils.service';
import { APP_BASE_HREF } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderComponent,
    SidenavComponent,
    ContentComponent,
    ContentContainerComponent,
    SearchFormComponent,
    FlightCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [FormUtilsService,
    { provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
