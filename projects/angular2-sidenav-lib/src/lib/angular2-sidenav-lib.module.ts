import { NgModule } from '@angular/core';
import { Angular2SidenavLibComponent } from './angular2-sidenav-lib.component';
import { SideNavModule } from './sidenav-container/sidenav.module';

@NgModule({
  declarations: [Angular2SidenavLibComponent],
  imports: [
    SideNavModule
  ],
  exports: [Angular2SidenavLibComponent,SideNavModule]
})
export class Angular2SidenavLibModule { }
