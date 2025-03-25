import { Component, OnInit } from '@angular/core';
import {MaschinenuebersichtComponent} from "./Maschinenuebersicht.component";

@Component({
  selector: 'app-Geräte',
  templateUrl: './tab7.page.html',
  styleUrls: ['./tab7.page.scss'],
})
export class Tab7Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  component=MaschinenuebersichtComponent;

}
