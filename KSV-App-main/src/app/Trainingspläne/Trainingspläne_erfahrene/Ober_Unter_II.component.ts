import { Component } from '@angular/core';
import {OberIIComponent} from "./pläne/OberII_component";
import {UnterIIComponent} from "./pläne/UnterII.component";
import {TrainingsplNe_UebersichtComponent} from "../Trainingspläne_Uebersicht.component";


@Component({
  selector: 'app-page-oberunterII',
  styleUrls: ['../../Trainingspläne/tab6.page.scss'],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-nav-link router-direction="forward" [component]="Uebersicht">
            <ion-button><ion-icon name="arrow-back-outline"></ion-icon></ion-button>
          </ion-nav-link>        </ion-buttons>

      </ion-toolbar>
    </ion-header>
    <ion-content class="ganz">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Ober/ Unterkörper II</ion-card-title>
          <ion-card-subtitle>Trainingsplan</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>

          <ion-chip color="darkred">
            <ion-icon name="medal-outline"></ion-icon>
            <ion-label>Erfahrene</ion-label>
          </ion-chip>
          <ion-chip color="darkred">
            <ion-icon name="barbell-outline"></ion-icon>
            <ion-label>Krafttraining</ion-label>
          </ion-chip>
          <ion-chip color="darkred">
            <ion-icon name="bicycle-outline"></ion-icon>
            <ion-label>Geräte</ion-label>
          </ion-chip>
          <ion-chip color="darkred">
            <ion-icon name="repeat-outline"></ion-icon>
            <ion-label>4x pro Woche</ion-label>
          </ion-chip>
          <ion-chip color="darkred">
            <ion-icon name="timer-outline"></ion-icon>
            <ion-label>60-75 Minuten pro Einheit</ion-label>
          </ion-chip>





          <div style="border-color: black; border-width: 2px; border-style: solid; padding: 2vh; border-radius: 10px; margin: 2vh">
            <h2 style="font-size: 18px; font-weight: bold">Oberkörper</h2>

            <ol>
              <li>Bankdrücken</li>
              <li>Flys (Maschine)</li>
              <li>Latzug</li>
              <li>T-Bar Rudern</li>
              <li>KH Seitheben</li>
              <li>Preachercurls</li>
              <li>Trizepsdrücken V-Griff</li>
            </ol>

            <ion-nav-link router-direction="forward" [component]="OberII">
              <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" id="open-modal" >
                Trainieren
                <ion-icon slot="end" name="chevron-forward-outline"></ion-icon>
              </ion-button>
            </ion-nav-link>
          </div>

          <div style="border-color: black; border-width: 2px; border-style: solid; padding: 2vh; border-radius: 10px; margin: 2vh">
            <h2 style="font-size: 18px; font-weight: bold">Unterkörper</h2>

            <ol>
              <li>Beinpresse</li>
              <li>Beinstrecker</li>
              <li>Beinbeuger</li>
              <li>Hyperextensions</li>
              <li>Stehendes Wadenheben (Multipresse)</li>
              <li>Plank</li>
            </ol>

            <ion-nav-link router-direction="forward" [component]="UnterII">
              <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" id="open-modal" >
                Trainieren
                <ion-icon slot="end" name="chevron-forward-outline"></ion-icon>
              </ion-button>
            </ion-nav-link>
          </div>


        </ion-card-content>
      </ion-card>
    </ion-content>




  `,
})
export class Ober_Unter_IIComponent {

  OberII = OberIIComponent;
  UnterII = UnterIIComponent;
  protected readonly Uebersicht = TrainingsplNe_UebersichtComponent;
}


