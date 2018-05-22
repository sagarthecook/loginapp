import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {
  AmexioFormsModule, AmexioLayoutModule, AmexioNavModule, AmexioWidgetModule,  CommonDataService,
  DeviceQueryService,IconLoaderService,AmexioChartsModule
} from "amexio-ng-extensions";

const APP_ROUTE: Routes = [
  {path:'',loadChildren:'./home/home.module#HomeModule'}
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AmexioWidgetModule,
    AmexioLayoutModule,
    FormsModule,AmexioNavModule,
    AmexioLayoutModule,AmexioFormsModule,
    RouterModule.forRoot(APP_ROUTE, { useHash: true })

  ],
  providers: [DeviceQueryService,CommonDataService,IconLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
