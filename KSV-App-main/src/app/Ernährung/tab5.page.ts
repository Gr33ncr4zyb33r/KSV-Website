import { Component, OnInit } from '@angular/core';
import {ErnaehrungComponent} from "./Ernaehrung.component";

@Component({
  selector: 'app-Ernährung',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  component = ErnaehrungComponent;

}
