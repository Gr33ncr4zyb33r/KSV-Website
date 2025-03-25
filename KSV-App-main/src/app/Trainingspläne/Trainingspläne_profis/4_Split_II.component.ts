import { Component } from '@angular/core';
import {BeineIIComponent} from "./Pläne/Beine_II.component";
import {Brust_Trizeps_IIComponent} from "./Pläne/Brust_Trizeps_II.component";
import {Ruecken_Bizeps_IIComponent} from "./Pläne/Rücken_Bizeps_II.component";
import {Schultern_Nacken_IIComponent} from "./Pläne/Schultern_Nacken_II.component";
import {TrainingsplNe_UebersichtComponent} from "../Trainingspläne_Uebersicht.component";


@Component({
  selector: 'app-page-viersplitII',
  styleUrls: ['../../Trainingspläne/tab6.page.scss'],
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-nav-link router-direction="forward" [component]="Uebersicht">
            <ion-button><ion-icon name="arrow-back-outline"></ion-icon></ion-button>
          </ion-nav-link>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>


    <ion-content class="ganz">
      <ion-card>
        <ion-card-header>
          <ion-card-title>4-Split</ion-card-title>
          <ion-card-subtitle>Trainingsplan</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>

          <ion-chip color="darkred">
            <ion-icon name="bar-chart-outline"></ion-icon>
            <ion-label>Profis</ion-label>
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
            <h2 style="font-size: 18px; font-weight: bold">Brust/Trizeps</h2>

            <ol>
              <li>Bankdrücken</li>
              <li>Schrägbankdrücken (Multipresse)</li>
              <li>Flys (Maschine)</li>
              <li>Dips (Trizeps)</li>
              <li>Trizepsdrücken über Kopf am Seil</li>
            </ol>

            <ion-nav-link router-direction="forward" [component]="BrustTri">
              <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" id="open-modal" >
                Trainieren
                <ion-icon slot="end" name="chevron-forward-outline"></ion-icon>
              </ion-button>
            </ion-nav-link>
          </div>

          <div style="border-color: black; border-width: 2px; border-style: solid; padding: 2vh; border-radius: 10px; margin: 2vh">
            <h2 style="font-size: 18px; font-weight: bold">Rücken/Bizeps</h2>

            <ol>
              <li>Überzüge am Seil</li>
              <li>T-Bar Rudern (Maschine)</li>
              <li>Latziehen Breiter Griff</li>
              <li>Vorgebeugtes Rudern Untergriff Langhantel</li>
              <li>Bizepscurls SZ-Stange</li>
              <li>Hammercurls mit dem Seil</li>
            </ol>

            <ion-nav-link router-direction="forward" [component]="RueckenBi">
              <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" id="open-modal" >
                Trainieren
                <ion-icon slot="end" name="chevron-forward-outline"></ion-icon>
              </ion-button>
            </ion-nav-link>
          </div>

          <div style="border-color: black; border-width: 2px; border-style: solid; padding: 2vh; border-radius: 10px; margin: 2vh">
            <h2 style="font-size: 18px; font-weight: bold">Schultern/Nacken</h2>

            <ol>
              <li>Schulterdrücken KH</li>
              <li>Seitheben KH im Sitzen</li>
              <li>Schulterdrücken (Maschine)</li>
              <li>Frontheben sitzend KH</li>
              <li>Reverse Flys (Maschine)</li>
              <li>Nackenziehen Multipresse</li>
            </ol>

            <ion-nav-link router-direction="forward" [component]="Schultern">
              <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" id="open-modal" >
                Trainieren
                <ion-icon slot="end" name="chevron-forward-outline"></ion-icon>
              </ion-button>
            </ion-nav-link>
          </div>

          <div style="border-color: black; border-width: 2px; border-style: solid; padding: 2vh; border-radius: 10px; margin: 2vh">
            <h2 style="font-size: 18px; font-weight: bold">Beine</h2>

            <ol>
              <li>Beinbeuger</li>
              <li>Kniebeuge Multipresse</li>
              <li>Beinstrecker</li>
              <li>Ausfallschritte</li>
              <li>Stehendes Wadenheben (Multipresse)</li>
              <li>Plank</li>
            </ol>

            <ion-nav-link router-direction="forward" [component]="Beine">
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
export class VierSplitIIComponent {
  BrustTri=Brust_Trizeps_IIComponent;
  RueckenBi=Ruecken_Bizeps_IIComponent;
  Schultern=Schultern_Nacken_IIComponent;
  Beine=BeineIIComponent;
  protected readonly Uebersicht = TrainingsplNe_UebersichtComponent;
}
