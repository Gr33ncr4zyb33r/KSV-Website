import { Component, OnInit } from '@angular/core';
import {MotivationComponent} from "./Motivation.component";

@Component({
  selector: 'app-Motivation',
  templateUrl: './tab8.page.html',
  styleUrls: ['./tab8.page.scss'],
})
export class Tab8Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  component = MotivationComponent;
}
