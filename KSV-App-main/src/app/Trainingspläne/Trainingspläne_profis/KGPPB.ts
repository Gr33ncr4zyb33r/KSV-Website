import { Component } from '@angular/core';
import {BrustTrizepsComponent} from "../Trainingspläne_erfahrene/pläne/Brust_Trizeps.component";
import {RueckenBizepsComponent} from "../Trainingspläne_erfahrene/pläne/Rücken_Bizeps.component";
import {SchulternComponent} from "../Trainingspläne_erfahrene/pläne/Schultern.component";
import {BeineComponent} from "../Trainingspläne_erfahrene/pläne/Beine.component";
import {TrainingsplNe_UebersichtComponent} from "../Trainingspläne_Uebersicht.component";



@Component({
  selector: 'app-page-kgppb',
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
          <ion-card-title>Körpergewicht PPB</ion-card-title>
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
            <ion-icon name="accessibility-outline"></ion-icon>
            <ion-label>Körpergewicht</ion-label>
          </ion-chip>
          <ion-chip color="darkred">
            <ion-icon name="repeat-outline"></ion-icon>
            <ion-label>3x pro Woche</ion-label>
          </ion-chip>
          <ion-chip color="darkred">
            <ion-icon name="timer-outline"></ion-icon>
            <ion-label>20 Minuten pro Einheit</ion-label>
          </ion-chip>


            <h2 style="font-size: 18px; font-weight: bold; padding-top: 2vh">Push (Brust/Schultern/Trizeps)</h2>

            <iframe class="player" src="https://www.youtube.com/embed/sa6MQCNNZ3o?si=EmAKev3AwGyMO01Z"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>



            <h2 style="font-size: 18px; font-weight: bold; padding-top: 2vh">Pull (Rücken/hintere Schulter/Bizeps)</h2>

            <iframe class="player" src="https://www.youtube.com/embed/nyGKB_lhnvc?si=NSXvGKjaz8Sdg4BF"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>



            <h2 style="font-size: 18px; font-weight: bold; padding-top: 2vh">Beine</h2>

          <iframe class="player" src="https://www.youtube.com/embed/zxyxzK_w68I?si=IhQPHPSr6GRojz7T"
                  title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>





        </ion-card-content>
      </ion-card>
    </ion-content>






  `,
})
export class KGPPBComponent {
  BrustTri=BrustTrizepsComponent;
  RueckenBi=RueckenBizepsComponent;
  Schultern=SchulternComponent;
  Beine=BeineComponent;
  protected readonly Uebersicht = TrainingsplNe_UebersichtComponent;
}

