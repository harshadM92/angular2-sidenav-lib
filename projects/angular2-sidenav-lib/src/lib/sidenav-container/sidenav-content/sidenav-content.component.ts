import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'asid-sidenav-content',
  templateUrl: './sidenav-content.component.html',
  styleUrls: ['./sidenav-content.component.scss']
})
export class SidenavContentComponent implements OnInit {
  
  @ViewChild("content") content: ElementRef;

  constructor() { }

  ngOnInit() {
  }

}
