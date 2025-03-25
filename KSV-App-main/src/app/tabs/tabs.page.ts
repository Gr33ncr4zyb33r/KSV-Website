import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  selectedTab: string = "Startseite"; // Definition der Eigenschaft selectedTab


  constructor(private router: Router, private menu: MenuController) {}

  navigateTo(url: string, tab: string) {
    this.router.navigateByUrl(url);
    this.selectedTab = tab; // Aktualisierung des ausgewählten Tabs
  }

  printTab(){
    console.log(this.selectedTab);
  }

}
