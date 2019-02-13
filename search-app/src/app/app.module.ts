import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component'
import { HomeComponent } from './comps/pages/home/home.component'
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './modules/material/material.module'
import { FilterByNamePipe } from './pipes/filter-by-name.pipe'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SidenavComponent } from './comps/sidenav/sidenav.component'
import { LayoutModule } from '@angular/cdk/layout'
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material'
import { AboutComponent } from './comps/pages/about/about.component'
import { FlexLayoutModule } from '@angular/flex-layout'
import { NamesAutocompleteComponent } from './comps/names-autocomplete/names-autocomplete.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterByNamePipe,
    SidenavComponent,
    AboutComponent,
    NamesAutocompleteComponent,
  ],
  imports: [
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
