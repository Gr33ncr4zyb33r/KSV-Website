import { Component, OnInit } from '@angular/core';
import {TrainingsplNe_UebersichtComponent} from "./Trainingspläne_Uebersicht.component";
import {Router} from "@angular/router";
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-Trainingspläne',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page implements OnInit {



  selectedTab: string = ""; // Definition der Eigenschaft selectedTab


  constructor(private router: Router, private menu: MenuController) {}

  navigateTo(url: string, tab: string) {
    this.router.navigateByUrl(url);
    this.selectedTab = tab; // Aktualisierung des ausgewählten Tabs
  }

  ngOnInit() {
  }

  component = TrainingsplNe_UebersichtComponent;
}
