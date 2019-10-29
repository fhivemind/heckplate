import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RealtimeComponent } from './rt.component';

const routes: Routes = [
  { path: '', component: RealtimeComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class RealtimeRoutingModule {
  static components = [ RealtimeComponent ];
}
