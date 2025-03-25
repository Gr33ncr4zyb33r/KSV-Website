import { Component } from '@angular/core';
import {NicoPushComponent} from "./Pläne/Push.component";
import{NicoPullComponent} from "./Pläne/Pull.component";
import{NicoBeineComponent} from "./Pläne/Beine.component";
import {TrainingsplNe_UebersichtComponent} from "../Trainingspläne_Uebersicht.component";



@Component({
  selector: 'app-page-nicos',
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
          <ion-card-title>Nicos PPB</ion-card-title>
          <ion-card-subtitle>Trainingsplan</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>

          <ion-chip color="darkred">
            <ion-icon name="accessibility-outline"></ion-icon>
            <ion-label>Mitlgieder</ion-label>
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
            <ion-label>3-6x pro Woche</ion-label>
          </ion-chip>
          <ion-chip color="darkred">
            <ion-icon name="timer-outline"></ion-icon>
            <ion-label>60-75 Minuten pro Einheit</ion-label>
          </ion-chip>

          <div style="border-color: black; border-width: 2px; border-style: solid; padding: 2vh; border-radius: 10px; margin: 2vh">
            <h2 style="font-size: 18px; font-weight: bold">Push</h2>

            <ol>
              <li>Brustpresse</li>
              <li>Schrägbankdrücken (Multipresse)</li>
              <li>Flys (Maschine)</li>
              <li>Trizepsdrücken V-Griff</li>
              <li>Trizepsdrücken über Kopf am Seil</li>
            </ol>

            <ion-nav-link router-direction="forward" [component]="Push">
              <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" id="open-modal" >
                Trainieren
                <ion-icon slot="end" name="chevron-forward-outline"></ion-icon>
              </ion-button>
            </ion-nav-link>
          </div>

          <div style="border-color: black; border-width: 2px; border-style: solid; padding: 2vh; border-radius: 10px; margin: 2vh">
            <h2 style="font-size: 18px; font-weight: bold">Pull</h2>

            <ol>
              <li>T-Bar Rudern (Maschine)</li>
              <li>Latziehen breiter Griff</li>
              <li>Rudern am Seilzug enger Griff</li>
              <li>Überzüge am Seil</li>
              <li>Bizepscurls KH</li>
              <li>Hammercurls mit dem Seil</li>
            </ol>

            <ion-nav-link router-direction="forward" [component]="Pull">
              <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" id="open-modal" >
                Trainieren
                <ion-icon slot="end" name="chevron-forward-outline"></ion-icon>
              </ion-button>
            </ion-nav-link>
          </div>

          <div style="border-color: black; border-width: 2px; border-style: solid; padding: 2vh; border-radius: 10px; margin: 2vh">
            <h2 style="font-size: 18px; font-weight: bold">Beine</h2>

            <ol>
              <li>Schulterdrücken (Maschine)</li>
              <li>Seitheben KH im Sitzen</li>
              <li>Frontheben am Seilzug</li>
              <li>Reverse Flys (Maschine)</li>
              <li>Nackenziehen (Multipresse)</li>
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
export class NicosComponent {
  Push=NicoPushComponent;
  Pull=NicoPullComponent;
  Beine=NicoBeineComponent;
  protected readonly Uebersicht = TrainingsplNe_UebersichtComponent;
}

