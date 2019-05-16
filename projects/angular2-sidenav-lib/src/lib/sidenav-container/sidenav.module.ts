import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavContainerComponent } from './sidenav-container.component';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';

@NgModule({
  declarations: [
    SidenavContainerComponent,
    SidenavMenuComponent,
    SidenavContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidenavContainerComponent,
    SidenavMenuComponent,
    SidenavContentComponent
  ],
})
export class SideNavModule { }
