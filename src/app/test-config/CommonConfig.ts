import { RouterTestingModule } from "@angular/router/testing";
import { MaterialsModule } from "../materials/materials.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "../app.component";
import { ContainerComponent } from "../components/container/container.component";
import { HeaderComponent } from "../components/header/header.component";
import { ContentComponent } from "../components/content/content.component";
import { SidenavComponent } from "../components/sidenav/sidenav.component";
import { ContentContainerComponent } from "../components/content-container/content-container.component";
import { SearchFormComponent } from "../components/search-form/search-form.component";
import { FlightCardComponent } from "../components/flight-card/flight-card.component";
import { FormUtilsService } from "../services/form-utils.service";
import { XHRBackend } from "@angular/http";
import { MockBackend } from "@angular/http/testing";
import { HttpClient } from "@angular/common/http";
import { Http } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";

export class CommonConfig {
    static config = {
        imports: [
            RouterTestingModule,
            MaterialsModule,
            ReactiveFormsModule,
            HttpClientModule
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
        providers: [FormUtilsService,
            { provide: Http, useClass: HttpClient },
            { provide: XHRBackend, useClass: MockBackend },
            MockBackend
        ]
    }
}