import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { SurveysComponent } from './surveys/surveys.component';
import { SettingsComponent } from './settings/settings.component';
import { ActiveComponent } from './active/active.component';
import { ClosedComponent } from './closed/closed.component';
import { MeComponent } from './me/me.component';
import { OpensurveysComponent } from './opensurveys/opensurveys.component';   
import { CompletedsurveysComponent } from './completedsurveys/completedsurveys.component';

const routes: Routes = [
  {path:"me",component:MeComponent,
     children:[
       { path: "opensurveys", component: OpensurveysComponent },
       { path: "completedsurveys", component: CompletedsurveysComponent }
     ]
  },
  {path:"admin",component:AdminComponent,
     children:[
       {path:"survey",component:SurveysComponent,
          children:[
            {path:"active",component:ActiveComponent},
            {path:"closed",component:ClosedComponent}
          ]
       },
       {path:"setting",component:SettingsComponent}
     ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
