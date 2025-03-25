import {ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {AlertController, IonAccordionGroup, NavController} from "@ionic/angular";
import {TrainingsplNe_UebersichtComponent} from "../Trainingspläne_Uebersicht.component";


@Component({
  selector: 'app-page-HIIT_II',
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
    <ion-content>

      <ion-card>
        <ion-card-header>
          <ion-card-title>
            High intensity interval training II
          </ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <ng-container *ngIf="timerValue > 0; else staticContent">
            <h1 class="center-h1">{{ formatTime(timerValue) }}</h1>
            <p>{{ getCurrentExercise() }}</p>
          </ng-container>
          <ng-template #staticContent>

            <iframe src="https://www.youtube.com/embed/FG6boRxUSsU?si=W_1gDptUrRmniVfc"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>

            <ion-chip color="darkred">
              <ion-icon name="bar-chart-outline"></ion-icon>
              <ion-label>Profis</ion-label>
            </ion-chip>
            <ion-chip color="darkred">
              <ion-icon name="pulse-outline"></ion-icon>
              <ion-label>HIIT</ion-label>
            </ion-chip>
            <ion-chip color="darkred">
              <ion-icon name="body-outline"></ion-icon>
              <ion-label>keine Geräte</ion-label>
            </ion-chip>
            <ion-chip color="darkred">
              <ion-icon name="repeat-outline"></ion-icon>
              <ion-label>beliebig</ion-label>
            </ion-chip>
            <ion-chip color="darkred">
              <ion-icon name="timer-outline"></ion-icon>
              <ion-label>20 Minuten pro Einheit</ion-label>
            </ion-chip>
          </ng-template>

        </ion-card-content>
      </ion-card>
    </ion-content>



  `,
})
export class HIIT_II_Component {

  timerValue: number = 0;
  timerInterval: number | undefined = undefined; // Ändere die Initialisierung
  timerRunning: boolean = false;
  timerButtonText: string = 'Training starten';
  timerPaused: boolean = true;
  trainingRunning: boolean = false;

  @ViewChild('accordionGroup', { static: true }) accordionGroup?: IonAccordionGroup;



  exercises: string[] = [
    'Kreuzheben',
    'Pause',
    'Vorgebeugtes Rudern',
    'Pause',
    'Front Squat',
    'Pause',
    'Burpees über Stange',
    'Pause'
  ];

  currentExerciseIndex: number = 0;
  ToggleTrainPause: boolean = false; //false=aktuell Training true=aktuell Pause

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

      if (this.timerValue % 60 === 40 && !this.ToggleTrainPause) {
        this.currentExerciseIndex++;
        this.ToggleTrainPause = true;
        if (this.currentExerciseIndex == 8) {
          this.currentExerciseIndex = 0;
        }
      } else if (this.timerValue % 60 === 0 && this.ToggleTrainPause) {
        this.currentExerciseIndex++;
        this.ToggleTrainPause = false;
        if (this.currentExerciseIndex == 8) {
          this.currentExerciseIndex = 0;
        }

      } else if (this.timerValue % 1200 === 0) {
        this.ToggleTrainPause = false;
        this.currentExerciseIndex = 0;
        this.showCompletionMessage()
      }





      this.cdr.detectChanges();
      console.log('timerValue:', this.timerValue);
    }, 1000);
  }

  getCurrentExercise(): string {
    return this.exercises[this.currentExerciseIndex];
  }

  showCompletionMessage() {
    // Hier kannst du eine Benachrichtigung oder eine Meldung anzeigen
    console.log('Du hast es geschafft! Sehr Geil!');
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


  protected readonly Uebersicht = TrainingsplNe_UebersichtComponent;
}
