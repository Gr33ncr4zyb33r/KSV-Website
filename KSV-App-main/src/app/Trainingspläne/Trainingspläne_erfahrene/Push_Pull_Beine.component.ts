import { Component } from '@angular/core';
import {PushComponent} from "./pläne/Push.component";
import {PullComponent} from "./pläne/Pull.component";
import {PPBBeineComponent} from "./pläne/PPBBeine.component";
import {TrainingsplNe_UebersichtComponent} from "../Trainingspläne_Uebersicht.component";


@Component({
  selector: 'app-page-pushpullbeine',
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
          <ion-card-title>Push Pull Beine</ion-card-title>
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
            <ion-label>4-5x pro Woche</ion-label>
          </ion-chip>
          <ion-chip color="darkred">
            <ion-icon name="timer-outline"></ion-icon>
            <ion-label>60-75 Minuten pro Einheit</ion-label>
          </ion-chip>


          <div style="border-color: black; border-width: 2px; border-style: solid; padding: 2vh; border-radius: 10px; margin: 2vh">
            <h2 style="font-size: 18px; font-weight: bold">Push</h2>

            <ol>
              <li>Bankdrücken</li>
              <li>Schrägbankdrücken KH</li>
              <li>Flys (Maschine)</li>
              <li>KH Seitheben</li>
              <li>Frenchpress SZ</li>
            </ol>

            <ion-nav-link router-direction="forward" [component]="push">
              <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" id="open-modal" >
                Trainieren
                <ion-icon slot="end" name="chevron-forward-outline"></ion-icon>
              </ion-button>
            </ion-nav-link>
          </div>


          <div style="border-color: black; border-width: 2px; border-style: solid; padding: 2vh; border-radius: 10px; margin: 2vh">
            <h2 style="font-size: 18px; font-weight: bold">Pull</h2>

            <ol>
              <li>Latzug</li>
              <li>T-Bar Rudern</li>
              <li>Hyperextensions</li>
              <li>Reverse Fly</li>
              <li>Hammercurls</li>
              <li>Bizepcurls Schrägbank</li>
            </ol>

            <ion-nav-link router-direction="forward" [component]="pull">
              <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" id="open-modal" >
                Trainieren
                <ion-icon slot="end" name="chevron-forward-outline"></ion-icon>
              </ion-button>
            </ion-nav-link>
          </div>

          <div style="border-color: black; border-width: 2px; border-style: solid; padding: 2vh; border-radius: 10px; margin: 2vh">
            <h2 style="font-size: 18px; font-weight: bold">Beine</h2>

            <ol>
              <li>Beinbeuger (Maschine)</li>
              <li>Kniebeugen Multipresse</li>
              <li>Beinstrecker</li>
              <li>Bulgarian Split Squats</li>
              <li>Stehendes Wadenheben (Multipresse)</li>
              <li>Plank</li>
            </ol>

            <ion-nav-link router-direction="forward" [component]="PPBBeine">
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
export class Push_Pull_BeineComponent {
  push=PushComponent;
  pull=PullComponent;
  PPBBeine=PPBBeineComponent;
  protected readonly PullComponent = PullComponent;
  protected readonly Uebersicht = TrainingsplNe_UebersichtComponent;
}
