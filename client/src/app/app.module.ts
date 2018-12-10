import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //FormsModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: environment.TOASTER_TIMEOUT,
      preventDuplicates: environment.PREVENT_DUPLICATES,
    })
  ],
  providers: [
    // LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
