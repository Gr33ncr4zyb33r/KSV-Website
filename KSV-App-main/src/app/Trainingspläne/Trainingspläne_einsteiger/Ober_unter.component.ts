import { Component, ViewChild } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import {AlertController, IonAccordionGroup} from "@ionic/angular";
import { IonAccordion } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import {GanzkoerperComponent} from "./Ganzkörper.component";
import {OberComponent} from "./Pläne/Oberkoerper.component";
import {UnterComponent} from "./Pläne/Unterkoerper.component";
import {MaschinenuebersichtComponent} from "../../Geräte/Maschinenuebersicht.component";
import {TrainingsplNe_UebersichtComponent} from "../Trainingspläne_Uebersicht.component";

@Component({
    selector: 'app-page-oberunter',
  styleUrls: ['../../Trainingspläne/tab6.page.scss'],
    template: `


    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-nav-link router-direction="forward" [component]="Uebersicht">
            <ion-button *ngIf="!trainingRunning"><ion-icon name="arrow-back-outline"></ion-icon></ion-button>
          </ion-nav-link>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ganz">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Ober/Unterkörper</ion-card-title>
          <ion-card-subtitle>Trainingsplan</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <ng-container *ngIf="timerValue > 0; else staticContent">
            <h1 class="center-h1">{{ formatTime(timerValue) }}</h1>
          </ng-container>
          <ng-template #staticContent>
            <ion-chip color="darkred">
              <ion-icon name="school-outline"></ion-icon>
              <ion-label>Anfänger</ion-label>
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
              <ion-label>min. 2x pro Woche</ion-label>
            </ion-chip>
            <ion-chip color="darkred">
              <ion-icon name="timer-outline"></ion-icon>
              <ion-label>60 Minuten pro Einheit</ion-label>
            </ion-chip>
          </ng-template>

          <div style="border-color: black; border-width: 2px; border-style: solid; padding: 2vh; border-radius: 10px; margin: 2vh">
            <h2 style="font-size: 18px; font-weight: bold">Oberkörper</h2>

            <ol>
              <li>Brustpresse</li>
              <li>Flys (Maschine)</li>
              <li>Latziehen</li>
              <li>T-Bar Rudern</li>
              <li>Schulterpresse (Maschine)</li>
              <li>Seitheben</li>
              <li>Trizepsdrücken V-Griff</li>
              <li>Preacher Curls</li>
            </ol>

            <ion-nav-link router-direction="forward" [component]="Ober">
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
              <li>Ausfallschritte</li>
              <li>Stehendes Wadenheben (Multipresse)</li>
              <li>Plank</li>
            </ol>

            <ion-nav-link router-direction="forward" [component]="Unter">
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

export class OberunterComponent {
  timerValue: number = 0;
  timerInterval: number | undefined = undefined; // Ändere die Initialisierung
  timerRunning: boolean = false;
  timerButtonText: string = 'Training starten';
  timerPaused: boolean = true;
  trainingRunning: boolean = false;
  @ViewChild('accordionGroup', { static: true }) accordionGroup?: IonAccordionGroup;
  checkbox1Checked: boolean = false;
  checkbox2Checked: boolean = false;
  checkbox3Checked: boolean = false;
  Ober=OberComponent;
  Unter=UnterComponent;







  constructor(
    private cdr: ChangeDetectorRef,
    private alertController: AlertController,
    private navCtrl: NavController // Füge NavController hinzu
  ) {}

  removeCheckbox() {
    if(this.checkbox1Checked) {
      this.checkbox1Checked = false;
    }
    if(this.checkbox2Checked) {
      this.checkbox2Checked = false;
    }
    if(this.checkbox3Checked) {
      this.checkbox3Checked = false;
    }

  }


  toggleAccordion = () => {
    const nativeEl = this.accordionGroup;
    // @ts-ignore
    if (nativeEl.value === 'first') {
      // @ts-ignore
      nativeEl.value = undefined;
    } else {
      // @ts-ignore
      nativeEl.value = 'first';
    }
  };


  toggleTimer() {
    if (!this.timerRunning) {
      this.timerPaused = false;
      this.timerRunning = true;
      this.timerButtonText = 'Pause';
      this.startInterval();
    } else {
      if (this.timerPaused) {
        // Fortsetzen, falls pausiert
        this.timerPaused = false;
        this.timerButtonText = 'Pause';
        this.startInterval();
      } else {
        // Pausieren
        this.timerPaused = true;
        this.timerButtonText = 'Weiter';
        this.pauseInterval();
      }
    }
  }

  startInterval() {
    this.trainingRunning = true
    // @ts-ignore
    this.timerInterval = setInterval(() => {
      this.timerValue++;
      this.cdr.detectChanges();
      console.log('timerValue:', this.timerValue);
    }, 1000);
  }

  pauseInterval() {
    if (this.timerInterval !== undefined) { // Ändere die Prüfung auf undefined
      clearInterval(this.timerInterval);
      this.timerInterval = undefined; // Setze timerInterval auf undefined
    }
  }

  stopTimer() {
    clearInterval(this.timerInterval);
    this.timerRunning = false;
    this.timerValue = 0;
    this.timerButtonText = 'Training starten';
    this.timerPaused = true;
    this.trainingRunning = false;

  }

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }


  public alertButtons = [
    {
      text: 'Nein',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'Ja',
      role: 'confirm',
      handler: () => {
        this.stopTimer();
        this.removeCheckbox();

        console.log('Alert confirmed');
      },
    },
  ];
  workout: any;

  async showStopAlert() {
    const alert = await this.alertController.create({
      header: 'Training beenden?',
      buttons: this.alertButtons,
    });

    await alert.present();
  }
  setResult(ev: any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }

  async goBack() {
    if (this.trainingRunning) {
      // Training läuft, also zeigen wir die Bestätigungsmeldung
      const confirmed = await this.showStopAlert();
      // Bestätigt
      // @ts-ignore
      if (confirmed) {
        // Hier verwenden wir den NavController zum Zurückkehren
        this.navCtrl.back();
      }
    } else {
      // Das Training läuft nicht, hier kannst du eine andere Aktion ausführen oder nichts tun
    }
  }


  protected readonly GanzkoerperComponent = GanzkoerperComponent;
  protected readonly MaschinenuebersichtComponent = MaschinenuebersichtComponent;
  protected readonly Uebersicht = TrainingsplNe_UebersichtComponent;
}
