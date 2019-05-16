import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'asid-sidenav-menu',
  templateUrl: './sidenav-menu.component.html',
  styleUrls: ['./sidenav-menu.component.scss']
})
export class SidenavMenuComponent implements OnInit {
  @ViewChild("sidenav") sidenav: ElementRef;
  constructor() { }

  ngOnInit() {
  }

}
