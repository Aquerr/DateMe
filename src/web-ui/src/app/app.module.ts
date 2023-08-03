import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from '../components/authentication/sign-in/sign-in.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { SharedModule } from '../modules/shared.module';
import { SearcherComponent } from '../components/searcher/searcher.component';
import { NgxTranslateModule } from '../modules/ngx-translate.module';
import { NgOptimizedImage } from '@angular/common';
import { ProfilePanelComponent } from '../components/profile/panel/profile-panel.component';
import { ProfileEditComponent } from '../components/profile/edit/profile-edit.component';
import { NgxMaskDirective } from 'ngx-mask';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../state/auth/auth.effects';
import { metaReducers, reducers } from '../state/app.reducers';
import { CommonEffects } from '../state/common/common.effects';
import { SignUpComponent } from '../components/authentication/sign-up/sign-up.component';
import { VehicleCardComponent } from '../components/vehicles/vehicle-card/vehicle-card.component';
import { VehicleListComponent } from '../components/vehicles/vehicle-list/vehicle-list.component';
import { FooterComponent } from '../components/footer/footer.component';
import { ContactComponent } from '../components/contact/contact.component';
import { ReservationComponent } from '../components/reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    NotFoundComponent,
    SearcherComponent,
    ProfilePanelComponent,
    ProfileEditComponent,
    SignUpComponent,
    VehicleCardComponent,
    VehicleListComponent,
    ContactComponent,
    FooterComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgxTranslateModule,
    NgOptimizedImage,
    NgxMaskDirective,
    BrowserModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    EffectsModule.forRoot([AuthEffects, CommonEffects])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
