import { Component, OnInit, ContentChild, ViewChild, Input, EventEmitter, Output, ChangeDetectorRef, ElementRef, HostListener } from '@angular/core';
import { SidenavMenuComponent } from './sidenav-menu/sidenav-menu.component';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';
import { Constant } from './sideNav.constant';


@Component({
  selector: 'asid-sidenav-container',
  templateUrl: './sidenav-container.component.html',
  styleUrls: ['./sidenav-container.component.scss']
})
export class SidenavContainerComponent {
  @ContentChild(SidenavMenuComponent) sidenavMenuComponent: SidenavMenuComponent;
  @ContentChild(SidenavContentComponent) sidenavContentComponent: SidenavContentComponent;
  @ViewChild("backdrop") backdrop: ElementRef;
  @Input() semiNav: boolean;
  @Input() navMode: string;
  @Input() sideNavWidth: string;
  @Input() semiSideNavWidth: string;
  @Input() responsive: boolean;
  @Output() openChanged: EventEmitter<boolean> = new EventEmitter();
  private mobileQuery: any = {};
  public opened: boolean = false;

  constructor() {
  }

  ngAfterViewInit() {
    this.mobileQuery.matches = window.innerWidth <= Constant.mobileMinWidth ? true : false;
    if (this.mobileQuery.matches && this.responsive) {
      this.convertSideNavForMobile();
    } else if (this.navMode === "push") {
      this.toggle();
    }
  }
  @HostListener('window:resize', ['$event'])
  resize(event:any) {
      this.mobileQuery.matches = window.innerWidth <= Constant.mobileMinWidth ? true : false;
      this._mobileQueryListener();
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  private _mobileQueryListener() {
    if (this.mobileQuery.matches && this.responsive) {
      this.convertSideNavForMobile();
    } else {
      this.convertSideNavForDesktop();
    }
  }
  private convertSideNavForDesktop() {
    this.navMode = "push";
    this.opened = true;
    this.dispatchSideNavChanged();
    this.toggleNav();
  }
  private convertSideNavForMobile() {
    this.navMode = "overlay";
    this.opened = false;
    this.dispatchSideNavChanged();
    this.toggleNav();
  }
  toggle() {
    this.opened = !this.opened;
    this.dispatchSideNavChanged();
    this.toggleNav();
  }

  private toggleNav() {
    switch (this.navMode) {
      case "push":
        this.pushNavToggle();
        break;
      case "overlay":
        this.overLaySideNavToggle();
        break;
      default:
        this.pushNavToggle();
        break;
    }
  }
  private overLaySideNavToggle() {
    if (this.opened) {
      let sideNavWidth = Constant.sideNavWidth;
      if (this.sideNavWidth) {
        sideNavWidth = this.sideNavWidth;
      }
      this.changeStyleSideNav(sideNavWidth);
      this.backdrop.nativeElement.style.visibility = "visible";
      if(this.sidenavContentComponent.content.nativeElement.offsetTop > 10) {
        this.backdrop.nativeElement.style.top = `${this.sidenavContentComponent.content.nativeElement.offsetTop}px`;
      }
    } else {
      this.changeStyleSideNav(Constant.sideNavWidthClose);
      if (this.backdrop) {
        this.backdrop.nativeElement.style.visibility = "hidden";
      }
    }
    if (this.mobileQuery.matches) {
      this.changeStyleNavContent(Constant.sideNavWidthClose);
    }
  }
  private pushNavToggle() {
    let sideNavWidth;
    if (this.opened) {
      sideNavWidth = Constant.sideNavWidth;
      if (this.sideNavWidth) {
        sideNavWidth = this.sideNavWidth;
      }
      this.changeStyleSideNav(sideNavWidth);
      this.changeStyleNavContent(sideNavWidth);
    } else {
      if (this.semiNav) {
        sideNavWidth = Constant.semiSideNavWidth;
        if (this.semiSideNavWidth) {
          sideNavWidth = this.semiSideNavWidth;
        }
      } else {
        sideNavWidth = Constant.sideNavWidthClose;
      }
      this.changeStyleSideNav(sideNavWidth);
      this.changeStyleNavContent(sideNavWidth);
    }
  }
  private changeStyleSideNav(navWidth: string) {
    this.sidenavMenuComponent.sidenav.nativeElement.style.width = navWidth;
  }
  private changeStyleNavContent(navWidth: string) {
    this.sidenavContentComponent.content.nativeElement.style.marginLeft = navWidth;
  }
  private dispatchSideNavChanged() {
    this.openChanged.emit(this.opened);
  }

}
