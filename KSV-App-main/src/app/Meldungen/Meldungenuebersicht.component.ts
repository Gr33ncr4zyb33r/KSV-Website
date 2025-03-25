import {Component, ViewChild, inject, APP_INITIALIZER} from '@angular/core';
import {ActionSheetController, IonModal, LoadingController} from '@ionic/angular';
import {Camera, CameraResultType, CameraSource} from '@capacitor/camera';
import {MaschinenuebersichtComponent} from "../Geräte/Maschinenuebersicht.component";
import {Capacitor} from "@capacitor/core";
import {getDownloadURL, getStorage, ref, Storage, uploadBytes} from "@angular/fire/storage";
import {Firestore, addDoc, collection} from '@angular/fire/firestore';
import {FirebaseApp, getApp, initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {ModalController} from "@ionic/angular";


@Component({
  selector: 'app-page-meldungen',
  styleUrls: ['tab4.page.scss'],
  template: `



    <ion-content>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Meldungen</ion-card-title>
          <ion-card-subtitle>Tritt in Kontakt mit uns</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          Nutze die untenstehenden Formulare um uns die passenden Informationen zukommen zu lassen damit wir
          uns schnellst möglich darum kümmern können.
        </ion-card-content>


      </ion-card>

      <ion-grid>
        <ion-row>
          <ion-col>

            <ion-button class="Btn" id="open-modal-schadensmeldung">
              <div>
                <ion-icon name="construct-outline" size="large"></ion-icon>
                <h4>Schadens -</h4>
                <p>meldungen</p>
              </div>
            </ion-button>

          </ion-col>
          <ion-col>
            <ion-button class="Btn" id="open-modal-probetraining">
              <div>
                <ion-icon name="rocket-outline" size="large"></ion-icon>
                <h4>Probetraining -</h4>
                <p>anfrage</p>
              </div>
            </ion-button>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-button class="Btn" id="open-modal-verbesserungsvorschlag">
              <div>
                <ion-icon name="bar-chart-outline" size="large"></ion-icon>
                <h4>Verbeserungs -</h4>
                <p>vorschlag</p>
              </div>
            </ion-button>
          </ion-col>
          <ion-col>
            <ion-button class="Btn" id="open-modal-sonstiges">
              <div>
                <ion-icon name="ellipsis-horizontal-circle-outline" size="large"></ion-icon>
                <h4>Sonstige</h4>
                <p>Themen</p>
              </div>
            </ion-button>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-button class="Btn" id="open-modal-trainingsfragen">
              <div>
                <ion-icon name="barbell-outline" size="large"></ion-icon>
                <h4>Fragen</h4>
                <p>zum Training</p>
              </div>
            </ion-button>
          </ion-col>
        </ion-row>

      </ion-grid>


      <ion-modal #modal_schaden trigger="open-modal-schadensmeldung" [canDismiss]="canDismiss">
        <ng-template>
          <ion-header>
            <ion-toolbar>
              <ion-title>Schadensmeldung</ion-title>
              <ion-buttons slot="end">
                <ion-button (click)="modal_schaden.dismiss()">Close</ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>
          <ion-content class="ion-padding">
            <!-- <form class="contact-form" (submit)="sendEmail($event)"> -->
            <form>
              <ion-list [inset]="true">
                <ion-item>
                  <ion-input labelPlacement="floating" value="" typeof="name" name="user_name" [(ngModel)]="user_name">
                    <div slot="label">Dein Name
                      <ion-text color="danger">*</ion-text>
                    </div>
                  </ion-input>
                </ion-item>
                <ion-item>
                  <ion-input labelPlacement="floating" value="" type="email" name="user_email" [(ngModel)]="user_email">
                    <div slot="label">Deine Mailadresse
                      <ion-text color="danger">*</ion-text>
                    </div>
                  </ion-input>
                </ion-item>
                <ion-item>
                  <ion-input labelPlacement="floating" value="" type="gerät" name="geraetename" [(ngModel)]="geraet">
                    <div slot="label">welches Gerät ist kaputt ?
                      <ion-text color="danger">*</ion-text>
                    </div>
                  </ion-input>
                </ion-item>
                <ion-item>
                  <ion-textarea
                    style="height: 15vh"
                    name="Beschreibung"
                    [(ngModel)]="Schadensbeschreibung"
                    placeholder="Beschreibe den Schaden"
                    [rows]="5"
                  ></ion-textarea>
                </ion-item>
              </ion-list>
              <img *ngIf="image" [src]="image"/>
              <ion-button shape="round" expand="block" (click)="takePicture()">Nimm ein Foto auf
                <ion-icon slot="start" name="camera-outline"></ion-icon>
              </ion-button>
              <ion-button shape="round" expand="block"
                          (click)="sendMail('Schadensmeldung von: ' + user_name, 'email von: ' + user_email + '\\n\\n' + 'Gerät: ' + geraet + '\\n\\n' + 'Schadensbeschreibung: ' + Schadensbeschreibung + '\\n\\n' + 'Bild des Schadens: ' + bildURL + '\\n\\n')">
                Meldung senden
                <ion-icon slot="start" name="send-outline"></ion-icon>
              </ion-button>

            </form>
          </ion-content>
        </ng-template>
      </ion-modal>


      <ion-modal #modal_probe trigger="open-modal-probetraining" [canDismiss]="canDismiss">
        <ng-template>
          <ion-header>
            <ion-toolbar>
              <ion-title>Probetraining</ion-title>
              <ion-buttons slot="end">
                <ion-button (click)="modal_probe.dismiss()">Close</ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>
          <ion-content class="ion-padding">
            <!-- <form class="contact-form" (submit)="sendEmail($event)"> -->
            <form>
              <ion-list [inset]="true">
                <ion-item>
                  <ion-input labelPlacement="floating" value="" typeof="name" name="user_name" [(ngModel)]="user_name">
                    <div slot="label">Dein Name
                      <ion-text color="danger">*</ion-text>
                    </div>
                  </ion-input>
                </ion-item>
                <ion-item>
                  <ion-input labelPlacement="floating" value="" type="email" name="user_email" [(ngModel)]="user_email">
                    <div slot="label">Deine Mailadresse
                      <ion-text color="danger">*</ion-text>
                    </div>
                  </ion-input>
                </ion-item>
                <ion-item>
                  <ion-input labelPlacement="floating" value="" type="email" name="user_email"
                             [(ngModel)]="user_appointment">
                    <div slot="label">Wann du Zeit hättest
                      <ion-text color="danger">*</ion-text>
                    </div>
                  </ion-input>
                </ion-item>
                <ion-item>
                  <ion-textarea
                    style="height: 15vh"
                    name="message"
                    [(ngModel)]="message"
                    placeholder="Deine Nachricht"
                    [rows]="5"
                  ></ion-textarea>
                </ion-item>
              </ion-list>
              <ion-button
                expand="block"
                shape="round"
                (click)="sendMail('Anfrage zum Probetraining von: ' + user_name, 'email von: ' + user_email + '\\n\\n' + 'Terminvorschlag: ' + user_appointment + '\\n\\n' + 'Nachricht: ' + message + '\\n\\n')"
                >
              Anfrage senden
                <ion-icon slot="start" name="send-outline"></ion-icon>
              </ion-button>

            </form>
          </ion-content>
        </ng-template>
      </ion-modal>

      <ion-modal #modal_vv trigger="open-modal-verbesserungsvorschlag" [canDismiss]="canDismiss">
        <ng-template>
          <ion-header>
            <ion-toolbar>
              <ion-title>Verbesserungsvorschlag</ion-title>
              <ion-buttons slot="end">
                <ion-button (click)="modal_vv.dismiss()">Close</ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>
          <ion-content class="ion-padding">
            <!-- <form class="contact-form" (submit)="sendEmail($event)"> -->
            <form>
              <ion-list [inset]="true">
                <ion-item>
                  <ion-input labelPlacement="floating" value="" typeof="name" name="user_name" [(ngModel)]="user_name">
                    <div slot="label">Dein Name
                      <ion-text color="danger">*</ion-text>
                    </div>
                  </ion-input>
                </ion-item>
                <ion-item>
                  <ion-input labelPlacement="floating" value="" type="email" name="user_email" [(ngModel)]="user_email">
                    <div slot="label">Deine Mailadresse
                      <ion-text color="danger">*</ion-text>
                    </div>
                  </ion-input>
                </ion-item>
                <ion-item>
                  <ion-input labelPlacement="floating" value="" type="email" name="user_email"
                             [(ngModel)]="vvTitel">
                    <div slot="label">Dein Vorschlagstitel
                      <ion-text color="danger">*</ion-text>
                    </div>
                  </ion-input>
                </ion-item>
                <ion-item>
                  <ion-textarea
                    style="height: 15vh"
                    name="Beschreibe deinen Vorschlag"
                    [(ngModel)]="vvMessage"
                    placeholder="Beschreibe deinen Vorschlag"
                    [rows]="5"
                  ></ion-textarea>
                </ion-item>
              </ion-list>
              <ion-button
                (click)="sendMail('Verbesserungsvorschlag von: ' + user_name, 'email von: ' + user_email + '\\n\\n' + 'Titel: ' + vvTitel + '\\n\\n' + 'Vorschlag: ' + vvMessage + '\\n\\n')"
                expand="block"
                shape="round">
                Vorschlag senden
                <ion-icon slot="start" name="send-outline"></ion-icon>
              </ion-button>

            </form>
          </ion-content>
        </ng-template>
      </ion-modal>

      <ion-modal #modal_training trigger="open-modal-trainingsfragen" [canDismiss]="canDismiss">
        <ng-template>
          <ion-header>
            <ion-toolbar>
              <ion-title>Trainingsfragen</ion-title>
              <ion-buttons slot="end">
                <ion-button (click)="modal_training.dismiss()">Close</ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>
          <ion-content class="ion-padding">
            <!-- <form class="contact-form" (submit)="sendEmail($event)"> -->
            <form>
              <ion-list [inset]="true">
                <ion-item>
                  <ion-input labelPlacement="floating" value="" typeof="name" name="user_name" [(ngModel)]="user_name">
                    <div slot="label">Dein Name
                      <ion-text color="danger">*</ion-text>
                    </div>
                  </ion-input>
                </ion-item>
                <ion-item>
                  <ion-input labelPlacement="floating" value="" type="email" name="user_email" [(ngModel)]="user_email">
                    <div slot="label">Deine Mailadresse
                      <ion-text color="danger">*</ion-text>
                    </div>
                  </ion-input>
                </ion-item>

                <ion-item>
                  <ion-textarea
                    style="height: 15vh"
                    name="Deine Frage"
                    [(ngModel)]="trainingMessage"
                    placeholder="Deine Frage"
                    [rows]="5"
                  ></ion-textarea>
                </ion-item>
              </ion-list>
              <ion-button
                (click)="sendMail('Trainingsfrage von: ' + user_name, 'email von: ' + user_email +  '\\n\\n' + 'Frage: ' + vvMessage + '\\n\\n')"
                expand="block"
                shape="round">
                Frage senden
                <ion-icon slot="start" name="send-outline"></ion-icon>
              </ion-button>

            </form>
          </ion-content>
        </ng-template>
      </ion-modal>

      <ion-modal #modal_sonstiges trigger="open-modal-sonstiges" [canDismiss]="canDismiss">
        <ng-template>
          <ion-header>
            <ion-toolbar>
              <ion-title>Sonstiges</ion-title>
              <ion-buttons slot="end">
                <ion-button (click)="modal_sonstiges.dismiss()">Close</ion-button>
              </ion-buttons>
            </ion-toolbar>
          </ion-header>
          <ion-content class="ion-padding">
            <!-- <form class="contact-form" (submit)="sendEmail($event)"> -->
            <form>
              <ion-list [inset]="true">
                <ion-item>
                  <ion-input labelPlacement="floating" value="" typeof="name" name="user_name" [(ngModel)]="user_name">
                    <div slot="label">Dein Name
                      <ion-text color="danger">*</ion-text>
                    </div>
                  </ion-input>
                </ion-item>
                <ion-item>
                  <ion-input labelPlacement="floating" value="" type="email" name="user_email" [(ngModel)]="user_email">
                    <div slot="label">Deine Mailadresse
                      <ion-text color="danger">*</ion-text>
                    </div>
                  </ion-input>
                </ion-item>
                <ion-item>
                  <ion-textarea
                    style="height: 15vh"
                    name="message"
                    [(ngModel)]="sonstigeMessage"
                    placeholder="Deine Nachricht"
                    [rows]="5"
                  ></ion-textarea>
                </ion-item>
              </ion-list>
              <ion-button
                (click)="sendMail('Sonstige Anfrage von: ' + user_name, 'email von: ' + user_email + '\\n\\n' + 'Vorschlag: ' + sonstigeMessage + '\\n\\n')"
                expand="block"
                shape="round">
                Anfrage senden
                <ion-icon slot="start" name="send-outline"></ion-icon>
              </ion-button>

            </form>
          </ion-content>
        </ng-template>
      </ion-modal>


      <!--
          <ion-alert
                  [isOpen]="isAlertOpen"
                  header="Nachricht gesendet!"
                  subHeader="Schadensmeldung ist eingeganen"
                  message="Vielen Dank ! "
                  [buttons]="alertButtons"
                  (didDismiss)="setOpen(false)"
          ></ion-alert>
      -->

    </ion-content>

  `,
})


export class MeldungenuebersichtComponent {
  // Variablendeklaration
  image: any;
  user_name: string = '';
  user_email: string = '';
  user_appointment: string = '';
  message: string = '';
  Schadensbeschreibung: string = '';
  name: string | undefined;
  @ViewChild(IonModal) modal: IonModal | undefined;
  presentingElement = undefined;
  public abfrage = false;
  messageSent = false;
  isAlertOpen = false;
  public alertButtons = ['OK'];
  loading?: HTMLIonLoadingElement;
  public imageSrc: string | undefined = '';
  betreff: string = '';
  nachricht: string = '';
  bildURL: string = '';
  geraet: string = '';
  vvTitel: string = '';
  vvMessage: string = '';
  trainingMessage: string = '';
  sonstigeMessage: string = '';
  sentMail: boolean = false;


//Constructor


  constructor(
    private FireApp: FirebaseApp,
    private actionSheetCtrl: ActionSheetController,
    private firestore: Firestore,
    private storage: Storage,
    private modalCtrl: ModalController
  ) {


  }


//Methoden


  cancel() {
    this.modalCtrl.dismiss();
  }

  async takePicture() {
    try {
      if (Capacitor.getPlatform() != 'web') await Camera.requestPermissions();
      const image = await Camera.getPhoto({
        quality: 90,
        // allowEditing: false,
        source: CameraSource.Prompt,
        width: 600,
        resultType: CameraResultType.DataUrl
      });
      console.log('image: ', image);
      this.image = image.dataUrl;
      const blob = this.dataURLtoBlob(image.dataUrl);
      const url = await this.uploadImage(blob, image);
      console.log(url);
      this.bildURL = url;
    } catch (e) {
      console.log(e);
      console.log("catch")
    }
  }

  dataURLtoBlob(dataurl: any) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type: mime});
  }


  async uploadImage(blob: any, imageData: any) {
    try {
      const currentDate = Date.now();
      const filePath = `test/${currentDate}.${imageData.format}`;
      const fileRef = ref(this.storage, filePath);
      const task = await uploadBytes(fileRef, blob);
      console.log('task: ', task);
      const url = getDownloadURL(fileRef);
      return url;
    } catch (e) {
      console.log('upload catch')
      throw (e);
    }
  }


  addDocument(path: any, data: any) {
    const dataRef = collection(this.firestore, path);
    return addDoc(dataRef, data);
  }


  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  /*
      public sendEmail(e: Event) {
          e.preventDefault();
          this.showLoading();

          emailjs.sendForm('service_cnm76pv', 'template_am461mo', e.target as HTMLFormElement, 'fuZBxgkYJReXHsxoe')
              .then((result) => {
                  this.hideLoading();
                  if (result.text == "OK") {
                      this.messageSent = true;
                  }
                  console.log(result.text);
                  this.modal?.dismiss();
              }, (error) => {
                  this.hideLoading();
                  console.log(error.text);
              });
      }
  */


  ngOnInit() {
    // @ts-ignore
    this.presentingElement = document.querySelector('.ion-page');

  }

  public sendMail(betreff: string, nachricht: string) {
    var mailtoLink = 'mailto:ksv-gausbach@web.de?subject=' + encodeURIComponent(betreff) + '&body=' + encodeURIComponent(nachricht);
    window.location.href = mailtoLink;
    this.abfrage = true;
    this.cancel();
  }


  // @ts-ignore
  public canDismiss = async () => {
    console.log('CanDismiss');
    console.log('status_abfrage = ', this.abfrage);
    if (this.abfrage) {

      const actionSheet = await this.actionSheetCtrl.create({
        header: 'Hast du deine Nachricht verschickt und willst den Tab schließen?',
        buttons: [
          {
            text: 'Ja',
            role: 'confirm',
          },
          {
            text: 'Nein',
            role: 'cancel',
          },
        ],
      });

      actionSheet.present();

      const {role} = await actionSheet.onWillDismiss();
      this.abfrage = false;


      return role === 'confirm';
    } else if (!this.abfrage) {

      const actionSheet = await this.actionSheetCtrl.create({
        header: 'Willst du den Tab schließen?',
        buttons: [
          {
            text: 'Ja',
            role: 'confirm',
          },
          {
            text: 'Nein',
            role: 'cancel',
          },
        ],
      });

      actionSheet.present();

      const {role} = await actionSheet.onWillDismiss();


      return role === 'confirm';
    }

  }

}
