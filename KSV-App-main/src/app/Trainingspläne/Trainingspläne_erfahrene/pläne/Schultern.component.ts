import { Component, ViewChild } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import {AlertController, IonAccordionGroup} from "@ionic/angular";
import { IonAccordion } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page-oberkoerper',
  styleUrls: ['../../../Trainingspläne/tab6.page.scss'],
  template: `


    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button *ngIf="!trainingRunning"></ion-back-button>
        </ion-buttons>
        <ion-title>Schultern/Nacken</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ganz">
      <ion-card>
        <ion-card-header>
          <ion-card-title>Schultern/Nacken</ion-card-title>
          <ion-card-subtitle>Trainingsplan</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <ng-container *ngIf="timerValue > 0; else staticContent">
            <h1 class="center-h1">{{ formatTime(timerValue) }}</h1>
          </ng-container>
          <ng-template #staticContent>

          </ng-template>

          <ion-grid>
            <ion-row>
              <ion-col>
                <ion-button expand="block" (click)="toggleTimer()" (click)="toggleAccordion()" >
                  <ion-icon style="padding: 0" slot="start" [name]="timerPaused ? 'play' : 'pause'">{{ timerButtonText }}</ion-icon>
                  {{ timerButtonText }}
                </ion-button>
              </ion-col>
              <ion-col>
                <ion-button id="present-alert" color="danger" expand="block" *ngIf="timerRunning" (click)="showStopAlert()">
                  <ion-icon style="padding: 0" slot="start" name="stop"></ion-icon>Stop</ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>


        </ion-card-content>
      </ion-card>

      <ion-accordion-group #accordionGroup multiple="timerRunning">

        <ion-accordion  value="first">
          <ion-item slot="header">
            <ion-label>
              <h2>Schulterdrücken Maschine</h2>
              <p>Schulter</p>
            </ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            <ion-grid class="satz">
              <ion-row>
                <ion-col>Satz</ion-col>
                <ion-col>Wiederholungen</ion-col>
                <ion-col *ngIf="trainingRunning">erledigt?</ion-col>
              </ion-row>
              <ion-row>
                <ion-col>1</ion-col>
                <ion-col>8-12</ion-col>
                <ion-col *ngIf="trainingRunning" ><ion-checkbox [(ngModel)]="checkboxChecked[0]"></ion-checkbox></ion-col>
              </ion-row>
              <ion-row>
                <ion-col>2</ion-col>
                <ion-col>8-12</ion-col>
                <ion-col *ngIf="trainingRunning" ><ion-checkbox  [(ngModel)]="checkboxChecked[1]"></ion-checkbox></ion-col>
              </ion-row>
              <ion-row>
                <ion-col>3</ion-col>
                <ion-col>8-12</ion-col>
                <ion-col *ngIf="trainingRunning" ><ion-checkbox  [(ngModel)]="checkboxChecked[2]"></ion-checkbox></ion-col>
              </ion-row>
            </ion-grid>
          </div>
        </ion-accordion>

        <ion-accordion value="third">
          <ion-item slot="header">
            <ion-label>
              <h2>Seithebn KH im Sitzen</h2>
              <p>Schultern</p>
            </ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            <ion-grid class="satz">
              <ion-row>
                <ion-col>Satz</ion-col>
                <ion-col>Wiederholungen</ion-col>
                <ion-col *ngIf="trainingRunning">erledigt?</ion-col>
              </ion-row>
              <ion-row>
                <ion-col>1</ion-col>
                <ion-col>8-12</ion-col>
                <ion-col *ngIf="trainingRunning" ><ion-checkbox [(ngModel)]="checkboxChecked[3]"></ion-checkbox></ion-col>
              </ion-row>
              <ion-row>
                <ion-col>2</ion-col>
                <ion-col>8-12</ion-col>
                <ion-col *ngIf="trainingRunning" ><ion-checkbox  [(ngModel)]="checkboxChecked[4]"></ion-checkbox></ion-col>
              </ion-row>
              <ion-row>
                <ion-col>3</ion-col>
                <ion-col>8-12</ion-col>
                <ion-col *ngIf="trainingRunning" ><ion-checkbox  [(ngModel)]="checkboxChecked[5]"></ion-checkbox></ion-col>
              </ion-row>
            </ion-grid>
          </div>
        </ion-accordion>

        <ion-accordion value="fourth">
          <ion-item slot="header">
            <ion-label>
              <h2>Frontheben am Seilzug</h2>
              <p>Schultern</p>
            </ion-label>
          </ion-item>
          <div class="ion-padding" slot="content">
            <ion-grid class="satz">
              <ion-row>
                <ion-col>Satz</ion-col>
                <ion-col>Wiederholungen</ion-col>
                <ion-col *ngIf="trainingRunning">erledigt?</ion-col>
              </ion-row>
              <ion-row>
                <ion-col>1</ion-col>
                <ion-col>8-12</ion-col>
                <ion-col *ngIf="trainingRunning" ><ion-checkbox [(ngModel)]="checkboxChecked[6]"></ion-checkbox></ion-col>
              </ion-row>
              <ion-row>
                <ion-col>2</ion-col>
                <ion-col>8-12</ion-col>
                <ion-col *ngIf="trainingRunning" ><ion-checkbox  [(ngModel)]="checkboxChecked[7]"></ion-checkbox></ion-col>
              </ion-row>
              <ion-row>
                <ion-col>3</ion-col>
                <ion-col>8-12</ion-col>
                <ion-col *ngIf="trainingRunning" ><ion-checkbox  [(ngModel)]="checkboxChecked[8]"></ion-checkbox></ion-col>
              </ion-row>
            </ion-grid>
          </div>
        </ion-accordion>

        <ion-accordion value="fifth">
          <ion-item slot="header">
            <ion-label>
              <h2>Reverse Flys (Maschine)</h2>
              <p>Schultern</p>
            </ion-label>
          </ion-item>
          <div class="ion-padding" slot="content"><ion-grid class="satz">
            <ion-row>
              <ion-col>Satz</ion-col>
              <ion-col>Wiederholungen</ion-col>
              <ion-col *ngIf="trainingRunning">erledigt?</ion-col>
            </ion-row>
            <ion-row>
              <ion-col>1</ion-col>
              <ion-col>8-12</ion-col>
              <ion-col *ngIf="trainingRunning" ><ion-checkbox [(ngModel)]="checkboxChecked[9]"></ion-checkbox></ion-col>
            </ion-row>
            <ion-row>
              <ion-col>2</ion-col>
              <ion-col>8-12</ion-col>
              <ion-col *ngIf="trainingRunning" ><ion-checkbox  [(ngModel)]="checkboxChecked[10]"></ion-checkbox></ion-col>
            </ion-row>
            <ion-row>
              <ion-col>3</ion-col>
              <ion-col>8-12</ion-col>
              <ion-col *ngIf="trainingRunning" ><ion-checkbox  [(ngModel)]="checkboxChecked[11]"></ion-checkbox></ion-col>
            </ion-row>
          </ion-grid></div>
        </ion-accordion>

        <ion-accordion value="sixth">
          <ion-item slot="header">
            <ion-label>
              <h2>Nackenziehen Multipresse</h2>
              <p>Nacken</p>
            </ion-label>
          </ion-item>
          <div class="ion-padding" slot="content"><ion-grid class="satz">
            <ion-row>
              <ion-col>Satz</ion-col>
              <ion-col>Wiederholungen</ion-col>
              <ion-col *ngIf="trainingRunning">erledigt?</ion-col>
            </ion-row>
            <ion-row>
              <ion-col>1</ion-col>
              <ion-col>8-12</ion-col>
              <ion-col *ngIf="trainingRunning" ><ion-checkbox [(ngModel)]="checkboxChecked[12]"></ion-checkbox></ion-col>
            </ion-row>
            <ion-row>
              <ion-col>2</ion-col>
              <ion-col>8-12</ion-col>
              <ion-col *ngIf="trainingRunning" ><ion-checkbox  [(ngModel)]="checkboxChecked[13]"></ion-checkbox></ion-col>
            </ion-row>
            <ion-row>
              <ion-col>3</ion-col>
              <ion-col>8-12</ion-col>
              <ion-col *ngIf="trainingRunning" ><ion-checkbox  [(ngModel)]="checkboxChecked[14]"></ion-checkbox></ion-col>
            </ion-row>
          </ion-grid></div>
        </ion-accordion>



      </ion-accordion-group>

      <ion-button *ngIf="trainingRunning" expand="block" style="padding-top: 2vh" (click)="showStopAlert()">
        Training beenden
      </ion-button>
    </ion-content>





  `,

})

export class SchulternComponent {
  timerValue: number = 0;
  timerInterval: number | undefined = undefined; // Ändere die Initialisierung
  timerRunning: boolean = false;
  timerButtonText: string = 'Training starten';
  timerPaused: boolean = true;
  trainingRunning: boolean = false;
  @ViewChild('accordionGroup', { static: true }) accordionGroup?: IonAccordionGroup;


  checkboxChecked: boolean[] = [];


  constructor(
    private cdr: ChangeDetectorRef,
    private alertController: AlertController,
    private navCtrl: NavController // Füge NavController hinzu
  ) {this.checkboxChecked[0] = false;
    this.checkboxChecked[1] = false;
    this.checkboxChecked[2] = false;
    this.checkboxChecked[3] = false;
    this.checkboxChecked[4] = false;
    this.checkboxChecked[5] = false;
    this.checkboxChecked[6] = false;
    this.checkboxChecked[7] = false;
    this.checkboxChecked[8] = false;
    this.checkboxChecked[9] = false;
    this.checkboxChecked[10] = false;
    this.checkboxChecked[11] = false;
    this.checkboxChecked[12] = false;
    this.checkboxChecked[13] = false;
    this.checkboxChecked[14] = false;
    this.checkboxChecked[15] = false;
    this.checkboxChecked[16] = false;
    this.checkboxChecked[17] = false;
    this.checkboxChecked[18] = false;
    this.checkboxChecked[19] = false;
    this.checkboxChecked[20] = false;
    this.checkboxChecked[21] = false;
    this.checkboxChecked[22] = false;
    this.checkboxChecked[23] = false;}

  removeCheckbox() {
    // Iterate through the checkboxChecked array and set each element to false
    for (let i = 0; i < this.checkboxChecked.length; i++) {
      this.checkboxChecked[i] = false;
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




}
