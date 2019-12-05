import { Component, OnInit } from '@angular/core';
import { plugins } from '../../config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menu = [];

  constructor() { }

  ngOnInit() {
    this.menu.push(...plugins);
  }
}
