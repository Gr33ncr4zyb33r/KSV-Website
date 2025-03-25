import { Component } from '@angular/core';
import {TrainingsplNe_UebersichtComponent} from "../Trainingspläne_Uebersicht.component";


@Component({
  selector: 'app-page-pushpullbeineII',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-nav-link router-direction="forward" [component]="Uebersicht">
            <ion-button><ion-icon name="arrow-back-outline"></ion-icon></ion-button>
          </ion-nav-link>
        </ion-buttons>
        <ion-title>Push Pull Beine (PPL) II</ion-title>
      </ion-toolbar>
    </ion-header>




  `,
})
export class Push_Pull_BeineIIComponent {
  protected readonly Uebersicht = TrainingsplNe_UebersichtComponent;
}
