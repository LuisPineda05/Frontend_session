import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreatmentsComponent } from "./physiotherapy/pages/treatments/treatments.component";
import { PhysiotherapistsComponent } from "./physiotherapy/pages/physiotherapists/physiotherapists.component";
import {SessionsComponent} from "./physiotherapy/pages/sessions/sessions.component";


const routes: Routes = [
  { path: 'treatments', component: TreatmentsComponent },
  { path: 'physiotherapists', component: PhysiotherapistsComponent },
  { path: 'sessions', component: SessionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
