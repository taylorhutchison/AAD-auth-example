import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SharedModule } from './shared/shared.module';
import { ConfigService } from './shared/services/config.service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: (config: ConfigService) => {
      return () => config.load(environment);
    },
    deps: [ConfigService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
