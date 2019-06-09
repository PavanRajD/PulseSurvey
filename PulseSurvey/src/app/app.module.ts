import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { AdminComponent } from './admin/admin.component';
import { SurveysComponent } from './surveys/surveys.component';
import { SettingsComponent } from './settings/settings.component';
import { ActiveComponent } from './active/active.component';
import { ClosedComponent } from './closed/closed.component';
import { MaterialModule } from './material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { UpdatePopUpComponent } from './active/UpdatePopUp.component';
import { MeComponent } from './me/me.component';
import { OpensurveysComponent } from './opensurveys/opensurveys.component';
import { TakesurveyComponent } from './opensurveys/takesurvey/takesurvey.component';
import { CompletedsurveysComponent } from './completedsurveys/completedsurveys.component';
import { SurveyQuestionsComponent } from './opensurveys/survey-questions/survey-questions.component';
import { ConfirmationPopupComponent } from './opensurveys/confirmation-popup/confirmation-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SideNavBarComponent,
    AdminComponent,
    SurveysComponent,
    SettingsComponent,
    ActiveComponent,
    ClosedComponent,
    UpdatePopUpComponent,
    MeComponent,
    OpensurveysComponent,
    TakesurveyComponent,
    CompletedsurveysComponent,
    SurveyQuestionsComponent,
    ConfirmationPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UpdatePopUpComponent, TakesurveyComponent,ConfirmationPopupComponent]
})
export class AppModule { }
