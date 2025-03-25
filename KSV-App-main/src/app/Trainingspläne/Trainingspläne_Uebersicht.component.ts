import { Component } from '@angular/core';


import {MaschinenuebersichtComponent} from "../Geräte/Maschinenuebersicht.component";


import {GanzkoerperComponent} from "./Trainingspläne_einsteiger/Ganzkörper.component";
import {OberunterComponent} from "./Trainingspläne_einsteiger/Ober_unter.component";
import {EigenkoerperComponent} from "./Trainingspläne_einsteiger/eigenkoerper.component";
import {Push_Pull_BeineComponent} from "./Trainingspläne_erfahrene/Push_Pull_Beine.component";
import {Ober_Unter_IIComponent} from "./Trainingspläne_erfahrene/Ober_Unter_II.component";
import {VierSplitComponent} from "./Trainingspläne_erfahrene/4_Split.component";
import {HIITComponent} from "./Trainingspläne_erfahrene/HIIT.component";
import {VierSplitIIComponent} from "./Trainingspläne_profis/4_Split_II.component";
import {HIIT_II_Component} from "./Trainingspläne_profis/HIIT_2.component";
import {Push_Pull_BeineIIComponent} from "./Trainingspläne_profis/Push_Pull_Beine_II.component";
import {KGPPBComponent} from "./Trainingspläne_profis/KGPPB";
import {NicosComponent} from "./Trainingspläne_mitglieder/Nico.component";


@Component({
  selector: 'Trainingsplaene',
  styleUrls: ['../Trainingspläne/tab6.page.scss'],
  template: `
    <ion-header>

      <ion-toolbar>
        <ion-title>Trainingspläne</ion-title>
      </ion-toolbar>

      <ion-toolbar>
        <div class="button-bar">
          <ion-button
            shape="round"
            *ngFor="let seg of segments; let i = index" (click)="selectSegment(i)" size="small"
            [ngClass]="{'active': seg.selected, 'inactive': !seg.selected}">
            {{seg.title}}
          </ion-button>
        </div>

        <!---
      <ion-segment [scrollable]="true" [(ngModel)]="status">
        <ion-segment-button value="einsteiger">
          <ion-label>Einsteiger</ion-label>
        </ion-segment-button>
        <ion-segment-button value="erfahrene">
          <ion-label>Erfahrene</ion-label>
        </ion-segment-button>
        <ion-segment-button value="profis">
          <ion-label>Profis</ion-label>
        </ion-segment-button>
        <ion-segment-button value="gesundheit">
          <ion-label>Gesundheit</ion-label>
        </ion-segment-button>
        <ion-segment-button value="mitglieder">
          <ion-label>Mitglieder</ion-label>
        </ion-segment-button>

      </ion-segment>

      --->
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">


      <div [ngSwitch]="title">
        <div *ngSwitchCase="'Einsteiger'">
          <ion-card>
            <ion-card-header>
              <ion-card-title>Beschreibung</ion-card-title>
              <ion-card-subtitle>Einsteiger</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
              Einsteigertrainingspläne sind perfekt für Anfänger oder Menschen mit begrenzter Zeit oder diejenigen,
              die einfach nur fit bleiben möchten.
            </ion-card-content>
          </ion-card>

          <ion-card>
            <ion-card-header>
              <ion-card-title>Trainingspläne</ion-card-title>
              <ion-card-subtitle>Einsteiger</ion-card-subtitle>
            </ion-card-header>

            <ion-list lines="none">
              <ion-nav-link router-direction="forward" [component]="Ganz">
                <ion-item button detail="true">
                  <ion-icon slot="start" name="barbell-outline"></ion-icon>
                  <ion-label>
                    <h3>Ganzkörpertraining</h3>
                  </ion-label>
                </ion-item>
              </ion-nav-link>

              <ion-nav-link router-direction="forward" [component]="OberUnter">
                <ion-item button detail="true">
                  <ion-icon slot="start" name="barbell-outline"></ion-icon>
                  <ion-label>
                    <h3>Oberkörper/Unterkörper</h3>
                  </ion-label>
                </ion-item>
              </ion-nav-link>


              <ion-nav-link router-direction="forward" [component]="Koerper">
                <ion-item button detail="true">
                  <ion-icon slot="start"  name="accessibility-outline"></ion-icon>
                  <ion-label>
                    <h3>Training mit eigenen Körpergewicht</h3>
                  </ion-label>
                </ion-item>
              </ion-nav-link>
            </ion-list>
          </ion-card>


        </div>


        <div *ngSwitchCase="'Erfahrene'">
          <ion-card>
            <ion-card-header>
              <ion-card-title>Beschreibung</ion-card-title>
              <ion-card-subtitle>Erfahrene</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
              Perfekt für dich, wenn du bereits einige Grundlagen beherrschst und einen Schritt weitergehen möchtest.
              Ganz gleich, ob du deine Leistung steigern oder mehr Muskeln aufbauen möchtest,
              Fortgeschrittenentrainingspläne bieten genau die Herausforderung, die du suchst.
            </ion-card-content>

          </ion-card>

          <ion-card>
            <ion-card-header>
              <ion-card-title>Trainingspläne</ion-card-title>
              <ion-card-subtitle>Erfahrene</ion-card-subtitle>
            </ion-card-header>

            <ion-list lines="none">
              <ion-nav-link router-direction="forward" [component]="VierSplit">
                <ion-item button detail="true">
                  <ion-icon slot="start" name="barbell-outline"></ion-icon>
                  <ion-label>
                    <h3>4er-Split</h3>
                  </ion-label>
                </ion-item>
              </ion-nav-link>

              <ion-nav-link router-direction="forward" [component]="HIIT">
                <ion-item button detail="true">
                  <ion-icon slot="start" name="flame-outline"></ion-icon>
                  <ion-label>
                    <h3>High Intensity Intervall Training</h3>
                  </ion-label>
                </ion-item>
              </ion-nav-link>

              <ion-nav-link router-direction="forward" [component]="OberUnterII">
                <ion-item button detail="true">
                  <ion-icon slot="start" name="barbell-outline"></ion-icon>
                  <ion-label>
                    <h3>Oberkörper/Unterkörper II</h3>
                  </ion-label>
                </ion-item>
              </ion-nav-link>

              <ion-nav-link router-direction="forward" [component]="PPB">
                <ion-item button detail="true">
                  <ion-icon slot="start" name="barbell-outline"></ion-icon>
                  <ion-label>
                    <h3>Push-Pull-Beine (PPB)</h3>
                  </ion-label>
                </ion-item>
              </ion-nav-link>
            </ion-list>
          </ion-card>

        </div>
        <div *ngSwitchCase="'Profis'">
          <ion-card>
            <ion-card-header>
              <ion-card-title>Beschreibung</ion-card-title>
              <ion-card-subtitle>Profis</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
              Trainingspläne für erfahrene Profis mit langjähriger Trainingserfahrung und einem tiefen Körperverständnis
              bieten eine anspruchsvollere Übungsauswahl. Diese Pläne setzen höhere Reize pro Trainingseinheit, um auch
              bei einem bereits gut trainierten Körper weiterhin beeindruckende Fortschritte zu erzielen.
            </ion-card-content>
          </ion-card>

          <ion-card>
            <ion-card-header>
              <ion-card-title>Trainingspläne</ion-card-title>
              <ion-card-subtitle>Profis</ion-card-subtitle>
            </ion-card-header>

            <ion-list lines="none">

              <ion-nav-link router-direction="forward" [component]="ViererSplitII">
                <ion-item button detail="true">
                  <ion-icon slot="start" name="barbell-outline"></ion-icon>
                  <ion-label>
                    <h3>4er-Split II</h3>
                  </ion-label>
                </ion-item>
              </ion-nav-link>

              <ion-nav-link router-direction="forward" [component]="HIITII">
                <ion-item button detail="true">
                  <ion-icon slot="start" name="flame-outline"></ion-icon>
                  <ion-label>
                    <h3>High Intensity Intervall Training II</h3>
                  </ion-label>
                </ion-item>
              </ion-nav-link>



              <ion-nav-link router-direction="forward" [component]="KGPPB">
                <ion-item button detail="true">
                  <ion-icon slot="start" name="accessibility-outline"></ion-icon>
                  <ion-label>
                    <h3>Körpergewicht PPB mit Sascha</h3>
                  </ion-label>
                </ion-item>
              </ion-nav-link>
            </ion-list>
          </ion-card>

        </div>


        <div *ngSwitchCase="'Gesundheit'">
          <ion-card>
            <ion-card-header>
              <ion-card-title>Beschreibung</ion-card-title>
              <ion-card-subtitle>Gesundheit</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>

              <ion-label style="font-weight: bold" color="darkred">
                <ion-icon size="large" name="alert-outline"></ion-icon>
                <br>Warnung: Die bereitgestellten Trainingspläne dienen der allgemeinen
                Empfehlung zur Prävention und Erhaltung der Gesundheit und Fitness. Da sie allgemein formuliert sind,
                können sie nicht universell angewendet werden. Insbesondere bei unsachgemäßer Ausführung besteht das
                Risiko von Verletzungen. Bei auftretenden Schmerzen oder gesundheitlichen Bedenken wird dringend
                empfohlen, einen Arzt zu konsultieren, bevor mit dem Training begonnen wird!
              </ion-label>
            </ion-card-content>
          </ion-card>

          <ion-card>
            <ion-card-header>
              <ion-card-title>Trainingspläne</ion-card-title>
              <ion-card-subtitle>Einsteiger</ion-card-subtitle>
            </ion-card-header>

            <ion-list lines="none">
              <ion-nav-link router-direction="forward" [component]="Ganz">
                <ion-item button detail="true">
                  <ion-icon  slot="start" name="medkit-outline"></ion-icon>
                  <ion-label>
                    <h3>Rückenschule</h3>
                  </ion-label>
                </ion-item>
              </ion-nav-link>

              <ion-nav-link router-direction="forward" [component]="OberUnter">
                <ion-item button detail="true">
                  <ion-icon  slot="start" name="medkit-outline"></ion-icon>
                  <ion-label>
                    <h3>Schultern</h3>
                  </ion-label>
                </ion-item>
              </ion-nav-link>


              <ion-nav-link router-direction="forward" [component]="Koerper">
                <ion-item button detail="true">
                  <ion-icon slot="start"  name="medkit-outline"></ion-icon>
                  <ion-label>
                    <h3>Kniefit</h3>
                  </ion-label>
                </ion-item>
              </ion-nav-link>
            </ion-list>
          </ion-card>
        </div>


        <div *ngSwitchCase="'Mitglieder'">
          <ion-card>
            <ion-card-header>
              <ion-card-title>Beschreibung</ion-card-title>
              <ion-card-subtitle>Mitglieder</ion-card-subtitle>
            </ion-card-header>

            <ion-card-content>
              Hier kannst du von anderen Mitgliedern erstellte Trainingspläne entdecken und dich von ihren individuellen
              Workouts inspirieren lassen. Teile dein Wissen und deine Erfahrungen, indem du deine eigenen
              Trainingspläne mit dem Verein teilst. Wir freuen uns immer über neue Anregungen und Trainingsideen.
              Wenn du deinen eigenen Trainingsplan teilen möchtest, lass es uns einfach wissen – wir nehmen gerne
              Anfragen entgegen und erweitern unsere Sammlung kontinuierlich!
            </ion-card-content>
          </ion-card>

          <ion-card>
            <ion-card-header>
              <ion-card-title>Trainingspläne</ion-card-title>
              <ion-card-subtitle>Mitglieder</ion-card-subtitle>
            </ion-card-header>

            <ion-list lines="none">

              <ion-nav-link router-direction="forward" [component]="Nicos">
                <ion-item button detail="true">
                  <ion-icon slot="start"  name="people-circle-outline"></ion-icon>
                  <ion-label>
                    <h3>Nico´s PPB</h3>
                  </ion-label>
                </ion-item>
              </ion-nav-link>


            </ion-list>
          </ion-card>

        </div>
      </div>


    </ion-content>

  `,
})
export class TrainingsplNe_UebersichtComponent {


  segments: any[] = [];
  status: string = 'einsteiger';
  title: string = 'Einsteiger';
  Ganz = GanzkoerperComponent;
  OberUnter = OberunterComponent;
  Koerper = EigenkoerperComponent;
  PPB=Push_Pull_BeineComponent;
  OberUnterII=Ober_Unter_IIComponent;
  VierSplit=VierSplitComponent;
  HIIT=HIITComponent;
  ViererSplitII=VierSplitIIComponent;
  HIITII=HIIT_II_Component;
  PPBII=Push_Pull_BeineIIComponent;
  maschinenuebersicht = MaschinenuebersichtComponent;
  KGPPB=KGPPBComponent;
  private index: any;
  Nicos=NicosComponent;

  constructor() {

    this.segments = [
      'Einsteiger',
      'Erfahrene',
      'Profis',
      'Mitglieder'
    ].map((val)=>({
      title: val,
      selected: false,
    }));

  }


ngOnInit(){
    this.selectSegment(0)
}

  selectSegment(index: any) {

    this.segments.map((item) => (item.selected = false));
    this.segments[index].selected = true;
    this.title= this.segments[index].title;
    console.log(this.title)


  }

  protected readonly MaschinenuebersichtComponent = MaschinenuebersichtComponent;
}

