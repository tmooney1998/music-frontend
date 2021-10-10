import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BackendProvider } from './backend';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.compnent';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { RecommendationsComponent } from './recommendations';
import { FavoritesComponent } from './favorites';
import { JwtInterceptor, ErrorInterceptor} from './backend';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        RecommendationsComponent,
        FavoritesComponent
    ],

    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},

        BackendProvider
    ],

    bootstrap: [AppComponent]
})
export class AppModule { }