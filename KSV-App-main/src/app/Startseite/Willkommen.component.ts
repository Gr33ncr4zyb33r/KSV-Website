import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {information} from "ionicons/icons";
import {IonModal} from "@ionic/angular";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {OverlayEventDetail} from "@ionic/core/components";
import {Information_Bericht} from "../Information/Information_Übersicht"
import {animate, AnimationEvent, style, transition, trigger} from '@angular/animations';

interface ImageItem {
  url: string;
  alt: string;
}


@Component({
  selector: 'app-page-willkommen',
  styleUrls: ['tab1.page.scss'],
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({transform: 'scale(0.5)'}),
        animate('150ms', style({transform: 'scale(1)'}))
      ]),
      transition('visible => void', [
        style({transform: 'scale(1)'}),
        animate('150ms', style({transform: 'scale(0.5)'}))
      ]),
    ]),
    trigger('animation2', [
      transition(':leave', [
        style({opacity: 1}),
        animate('50ms', style({opacity: 0.8}))
      ])
    ])
  ],
  template: `

    <ion-content [fullscreen]="true">


      <!-- top logo removed to let hero banner take prominence -->

      <!-- Großbildansicht -->
      <div id="largeImageContainer" class="large-image-container" *ngIf="showLarge" (click)="hideLargeImage()">
        <img id="largeImage" [src]="currentImageSrc" class="large-image">
      </div>

      <!-- Hero Banner: Hintergrundbild mit CTA -->
      <section class="hero-banner">
        <div class="hero-overlay">
          <div class="hero-content">
            <h1>Willkommen im KSV Gausbach</h1>
            <p class="hero-sub">Dein Verein für Kraft- und Fitnesstraining in der Region.</p>
            <ion-button color="primary" size="large" (click)="goToInformation()">Mehr erfahren</ion-button>
          </div>
        </div>
      </section>







      <ion-card>

        <ion-card-header>
          <ion-card-title>KSV Gausbach e.V.</ion-card-title>
          <ion-card-subtitle>Kraftsportverein</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          Der KSV Gausbach e.V. ist für seine Mitglieder eine Einrichtung für Fitnesstraining, Ausgleichstraining
          für Beruf und Sport, Muskel- und Kraftaufbautraining, Ausdauersport und Fettverbrennung und dient als
          Treffpunkt für Sport und Freizeit. In dieser App findest du Informationen rund um das Training in unserem
          Verein. Trainingspläne von und für Mitglieder sowie Erklärungen zu unseren Geräten.
          Viel Spaß beim Durchstöbern der Seiten und vielleicht bis bald beim Training!
        </ion-card-content>



      </ion-card>







      <ion-card>

        <ion-card-header>
          <ion-card-title>Impressionen</ion-card-title>
          <ion-card-subtitle>Bilder</ion-card-subtitle>
        </ion-card-header>


        <!-- Miniaturbilder -->
        <ion-grid>
          <ion-row>
            <ion-col size="4" class="image-container" *ngFor="let item of images">
              <img [src]="item.url" [alt]="item.alt" class="clickable-image" (click)="showLargeImage(item)">
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card>


      <ion-card>

        <ion-card-header>
          <ion-card-title>App Installationsvideo</ion-card-title>
          <ion-card-subtitle>Installationsanleitung</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>

          <ol>
            <li>Öffne deinen Browser auf dem Endgerät und gehe zu: <a href="ksv-training.web.app">ksv-training.web.app</a></li>
            <br>
            <li> <p style="font-weight: bold">Für Apple-Geräte:</p>Auf den weiterleiten Button in der Navigationsleiste <ion-icon style="transform: rotate(270deg)" name="exit-outline"></ion-icon>
              <p style="font-weight: bold"><br>Für Android-Geräte:</p>auf Menü <ion-icon name="ellipsis-vertical"></ion-icon> <br>
              und dann "Zum Startbildschirm zuf..."</li>
            <br>
            <li>Namen vergeben und "Hinzufügen"</li>
          </ol>
          <ion-button fill="clear" id="open-modal-video" >Apple Videoanleitung
            <ion-icon slot="end" name="chevron-forward-outline"></ion-icon>
          </ion-button>

        </ion-card-content>


      </ion-card>



      <ion-modal trigger="open-modal-video" (willDismiss)="onWillDismiss($event)">
        <ng-template>
          <ion-header>
            <ion-toolbar>
              <ion-buttons slot="start">
                <ion-button (click)="cancel()">Cancel</ion-button>
              </ion-buttons>
              <ion-title>Welcome</ion-title>
              <ion-buttons slot="end">
                <ion-button (click)="confirm()" [strong]="true">Confirm</ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>
          <ion-content class="ion-padding">
            <ion-item>
              <video height="100%" width="100%" controls>
                <source src="../../assets/video/appinstallation.MP4" type="video/MP4">
                Your browser does not support the video tag.
              </video>
            </ion-item>
          </ion-content>
        </ng-template>
      </ion-modal>


    </ion-content>




  `,
})
export class WillkommenComponent implements OnInit {

  @Input() showCount = false;
  informationen =Information_Bericht;
  protected readonly information = information;

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});


  @ViewChild(IonModal) modal: IonModal | undefined;
  @ViewChild('swiperContainer') swiperContainer!: any;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  showKommzeitPicker: boolean = false;
  showGehzeitPicker: boolean = false;
  googleSheetForm!: FormGroup;
  name: string | undefined;
  Gehzeit: any;

  // Variablen für die Steuerung des großen Bildes
  showLarge = false;
  currentImageSrc: string = '';

  images: ImageItem[] = [
    {url: '../../assets/img/hq_bilder/Griffe_11zon.webp', alt: 'Griffe'},
    {url: '../../assets/img/hq_bilder/Uebersicht_11zon.webp', alt: 'Übersicht'},
    {url: '../../assets/img/hq_bilder/Kurzhanteln_11zon.webp', alt: 'Kurzhanteln'},
    {url: '../../assets/img/hq_bilder/Ruecken_11zon.webp', alt: 'Ruecken'},
    {url: '../../assets/img/hq_bilder/baenke_11zon.webp', alt: 'Baenke'},
    {url: '../../assets/img/hq_bilder/SZ_11zon.webp', alt: 'SZ'}
  ];


  previewImage = false;
  showMask = false;
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.googleSheetForm = this.formBuilder.group({
      id: formBuilder.control(''),
      Name: formBuilder.control(''),
      Kommzeit: formBuilder.control(''),
      Gehzeit: formBuilder.control(''),
    });
  }


  ngOnInit(): void {
  }

  goToInformation() {
    this.router.navigateByUrl('/Informationen');
  }

  onPreviewImage(index: number): void {
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
  }

  onAnimationEnd(event: AnimationEvent) {
    if (event.toState === 'void') {
      this.showMask = false;
    }
  }

  onClosePreview() {
    this.previewImage = false;
  }


  onItemChange($event: any): void {
    console.log('Carousel onItemChange', $event);
  }

  swiperSlidesChanged(e:any){
    console.log('changed', e);
  }


  showTimePicker(field: string) {
    if (field === 'kommzeit') {
      this.showKommzeitPicker = true;
      this.showGehzeitPicker = false;
    } else if (field === 'gehzeit') {
      this.showGehzeitPicker = true;
      this.showKommzeitPicker = false;
    }
  }
  cancel() {
    // @ts-ignore
    this.modal.dismiss(null, 'cancel');
  }

  updateKommzeit(event: CustomEvent<any>) {
    this.googleSheetForm.patchValue({
      Kommzeit: event.detail.value
    });
  }

  updateGehzeit(event: CustomEvent<any>) {
    this.googleSheetForm.patchValue({
      Gehzeit: event.detail.value
    });
  }


  send() {
    // @ts-ignore
    this.modal.dismiss(this.googleSheetForm.value.Name, 'send');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  generateID(){

  }
  confirm() {
    // @ts-ignore
    this.modal.dismiss(this.name, 'confirm');
  }


  public onSubmit() {
    console.log(this.googleSheetForm.value);
    console.log(this.Gehzeit);

    const id = this.googleSheetForm.value.id;
    const Name = this.googleSheetForm.value.Name;
    const Kommzeit = this.googleSheetForm.value.Kommzeit;
    const Gehzeit = this.Gehzeit;
  }





  updateSlideIndicator(activeIndex: number) {
    const dots = document.querySelectorAll('.slide-dot');
    dots.forEach((dot, index) => {
      dot.classList.remove('active');
      if (index === activeIndex) {
        dot.classList.add('active');
      }
    });
  }


  // Funktion zum Anzeigen des großen Bildes
// Funktion zum Anzeigen des großen Bildes
  showLargeImage(item: ImageItem) {
    this.currentImageSrc = item.url; // Aktualisiere den Pfad des großen Bildes
    this.showLarge = true; // Zeige das große Bild an
  }


  // Funktion zum Ausblenden des großen Bildes
  hideLargeImage() {
    this.showLarge = false; // Verberge das große Bild
  }







}
