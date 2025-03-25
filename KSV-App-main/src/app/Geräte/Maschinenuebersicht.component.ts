import { Component } from '@angular/core';


@Component({
  selector: 'app-page-maschinenübersicht',
  styleUrls: ['../../../../../ksv-training/ksv-training/src/app/Geräte/tab7.page.scss'],
  template: `





    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Geräteliste</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">


      <ion-accordion-group expand="compact" [multiple]="true">


        <!-- ---------------------------------Brust Geräte----------------------------------------- -->
                <ion-accordion value="first">
                  <ion-item slot="header" color="light">
                    <ion-label>Brust</ion-label>
                  </ion-item>
                  <div class="ion-padding" slot="content">
                    <ion-list>
                    <ion-item>
                      <ion-avatar slot="start">
                        <ion-img src="assets/img/Geräte/Bankdrücken.png"></ion-img>
                      </ion-avatar>
                      <ion-label>
                        <h2>Bankdrücken</h2>
                        <p>Brust</p>
                      </ion-label>
                      <ion-button id="open-modal1">
                        mehr Info <ion-icon name="chevron-forward-outline" ></ion-icon>
                      </ion-button>
                    </ion-item>
                      <ion-item>
                        <ion-avatar slot="start">
                          <ion-img src="assets/img/Geräte/Brustpresse_Beinpresse.png"></ion-img>
                        </ion-avatar>
                        <ion-label>
                          <h2>Brustpresse</h2>
                          <p>Brust</p>
                        </ion-label>
                        <ion-button id="open-modal4">
                          mehr Info <ion-icon name="chevron-forward-outline" ></ion-icon>
                        </ion-button>
                      </ion-item>

                      <ion-item lines="none">
                        <ion-avatar slot="start">
                          <ion-img src="assets/img/Geräte/Flymaschine_ReverseFly.png"></ion-img>
                        </ion-avatar>
                        <ion-label>
                          <h2>Flys</h2>
                          <p>Brust</p>
                        </ion-label>
                        <ion-button id="open-modal8">
                          mehr Info <ion-icon name="chevron-forward-outline" ></ion-icon>
                        </ion-button>
                      </ion-item>
                    </ion-list>
                  </div>


                </ion-accordion>


        <!-- ---------------------------------Arme Geräte----------------------------------------- -->
                <ion-accordion value="second">
                  <ion-item slot="header" color="light">
                    <ion-label>Arme</ion-label>
                  </ion-item>
                  <div class="ion-padding" slot="content">

                    <ion-item lines="none">
                      <ion-avatar slot="start">
                        <ion-img src="assets/img/Geräte/Dipstation_Bauchtrainer.png"></ion-img>
                      </ion-avatar>
                      <ion-label>
                        <h2>Dipstation/Beine heben</h2>
                        <p>Trizeps/Bauch</p>
                      </ion-label>
                      <ion-button id="open-modal344">
                        mehr Info <ion-icon name="chevron-forward-outline" ></ion-icon>
                      </ion-button>
                    </ion-item>


                  </div>
                </ion-accordion>

        <!-- ---------------------------------Schultern Geräte----------------------------------------- -->

                <ion-accordion value="third">
                  <ion-item slot="header" color="light">
                    <ion-label>Schultern</ion-label>
                  </ion-item>
                  <div class="ion-padding" slot="content">

                    <ion-item lines="none">
                    <ion-avatar slot="start">
                      <ion-img src="assets/img/Geräte/Flymaschine_ReverseFly.png"></ion-img>
                    </ion-avatar>
                    <ion-label>
                      <h2>Reverse Flys</h2>
                      <p>Schulter</p>
                    </ion-label>
                    <ion-button id="open-modal888">
                      mehr Info <ion-icon name="chevron-forward-outline" ></ion-icon>
                    </ion-button>
                  </ion-item>

                  </div>
                </ion-accordion>

        <!-- ---------------------------------Beine Geräte----------------------------------------- -->
                <ion-accordion value="fourth">
                  <ion-item slot="header" color="light">
                    <ion-label>Beine</ion-label>
                  </ion-item>
                  <div class="ion-padding" slot="content"> <ion-item>
                    <ion-avatar slot="start">
                      <ion-img src="assets/img/Geräte/Adductor_Abductor.png"></ion-img>
                    </ion-avatar>
                    <ion-label>
                      <h2>Adductor/Abductor</h2>
                      <p>Beine</p>
                    </ion-label>
                    <ion-button id="open-modal2">
                      mehr Info <ion-icon name="chevron-forward-outline" ></ion-icon>
                    </ion-button>
                  </ion-item>

                    <ion-item lines="none">
                      <ion-avatar slot="start">
                        <ion-img src="assets/img/Geräte/Brustpresse_Beinpresse.png"></ion-img>
                      </ion-avatar>
                      <ion-label>
                        <h2>Beinpresse</h2>
                        <p>Beine</p>
                      </ion-label>
                      <ion-button id="open-modal5">
                        mehr Info <ion-icon name="chevron-forward-outline" ></ion-icon>
                      </ion-button>
                    </ion-item>

                  </div>
                </ion-accordion>

        <!-- ---------------------------------Rücken Geräte----------------------------------------- -->
                <ion-accordion value="sixth">
                  <ion-item slot="header" color="light">
                    <ion-label>Rücken</ion-label>
                  </ion-item>
                  <div class="ion-padding" slot="content"><ion-item>
                    <ion-avatar slot="start">
                      <ion-img src="assets/img/Geräte/Backextensions.png"></ion-img>
                    </ion-avatar>
                    <ion-label>
                      <h2>Rückenstrecker</h2>
                      <p>Rücken</p>
                    </ion-label>
                    <ion-button id="open-modal3">
                      mehr Info <ion-icon name="chevron-forward-outline" ></ion-icon>
                    </ion-button>
                  </ion-item>

                    <ion-item>
                      <ion-avatar slot="start">
                        <ion-img src="assets/img/Geräte/Seilzüge_Latzug_Rudern.png"></ion-img>
                      </ion-avatar>
                      <ion-label>
                        <h2>Latzug</h2>
                        <p>Rücken</p>
                      </ion-label>
                      <ion-button id="open-modal11">
                        mehr Info <ion-icon name="chevron-forward-outline" ></ion-icon>
                      </ion-button>
                    </ion-item>

                    <ion-item>
                      <ion-avatar slot="start">
                        <ion-img src="assets/img/Geräte/Seilzüge_Latzug_Rudern.png"></ion-img>
                      </ion-avatar>
                      <ion-label>
                        <h2>Rudern im Sitzen</h2>
                        <p>Rücken</p>
                      </ion-label>
                      <ion-button id="open-modal12">
                        mehr Info <ion-icon name="chevron-forward-outline" ></ion-icon>
                      </ion-button>
                    </ion-item>


                    <ion-item lines="none">
                      <ion-avatar slot="start">
                        <ion-img src="assets/img/Geräte/TBar_Rudern.png"></ion-img>
                      </ion-avatar>
                      <ion-label>
                        <h2>T-Bar Rudern</h2>
                        <p>Rücken</p>
                      </ion-label>
                      <ion-button id="open-modal15">
                        mehr Info <ion-icon name="chevron-forward-outline" ></ion-icon>
                      </ion-button>
                    </ion-item>


                  </div>
                </ion-accordion>
        <!-- ---------------------------------Ganzkörper Geräte----------------------------------------- -->
                <ion-accordion value="seventh">
                  <ion-item slot="header" color="light">
                    <ion-label>Ganzkörper</ion-label>
                  </ion-item>
                  <div class="ion-padding" slot="content">

                    <ion-item>
                      <ion-avatar slot="start">
                        <ion-img src="assets/img/Geräte/Kettlebells.png"></ion-img>
                      </ion-avatar>
                      <ion-label>
                        <h2>Kettlebells</h2>
                        <p>Ganzkörper</p>
                      </ion-label>
                      <ion-button id="open-modal9">
                        mehr Info <ion-icon name="chevron-forward-outline" ></ion-icon>
                      </ion-button>
                    </ion-item>

                    <ion-item>
                      <ion-avatar slot="start">
                        <ion-img src="assets/img/Geräte/Squatrack.png"></ion-img>
                      </ion-avatar>
                      <ion-label>
                        <h2>Squatrack</h2>
                        <p>Ganzkörper</p>
                      </ion-label>
                      <ion-button id="open-modal14">
                        mehr Info <ion-icon name="chevron-forward-outline" ></ion-icon>
                      </ion-button>
                    </ion-item>



                    <ion-item>
                      <ion-avatar slot="start">
                        <ion-img src="assets/img/Geräte/Kurzhanteln.png"></ion-img>
                      </ion-avatar>
                      <ion-label>
                        <h2>Kurzhanteln</h2>
                        <p>Ganzkörper</p>
                      </ion-label>
                      <ion-button id="open-modal10">
                        mehr Info <ion-icon name="chevron-forward-outline" ></ion-icon>
                      </ion-button>
                    </ion-item>

                    <ion-item>
                      <ion-avatar slot="start">
                        <ion-img src="assets/img/Geräte/Sportmatte.png"></ion-img>
                      </ion-avatar>
                      <ion-label>
                        <h2>Sportmatte</h2>
                        <p>Ganzkörper</p>
                      </ion-label>
                      <ion-button id="open-modal13">
                        mehr Info <ion-icon name="chevron-forward-outline" ></ion-icon>
                      </ion-button>
                    </ion-item>

                    <ion-item lines="none">
                      <ion-avatar slot="start">
                        <ion-img src="assets/img/Geräte/Multipresse.png"></ion-img>
                      </ion-avatar>
                      <ion-label>
                        <h2>Multipresse</h2>
                        <p>Ganzkörper</p>
                      </ion-label>
                      <ion-button id="open-modal16">
                        mehr Info <ion-icon name="chevron-forward-outline" ></ion-icon>
                      </ion-button>
                    </ion-item>


                  </div>
                </ion-accordion>


        <!-- ---------------------------------Cardio Geräte----------------------------------------- -->
                <ion-accordion value="eighth">
                  <ion-item slot="header" color="light">
                    <ion-label>Cardio</ion-label>
                  </ion-item>
                  <div class="ion-padding" slot="content">

                    <ion-item lines="none">
                      <ion-avatar slot="start">
                        <ion-img src="assets/img/Geräte/Crosstrainer.png"></ion-img>
                      </ion-avatar>
                      <ion-label>
                        <h2>Crosstrainer</h2>
                        <p>Cardio</p>
                      </ion-label>
                      <ion-button id="open-modal6">
                        mehr Info <ion-icon name="chevron-forward-outline"></ion-icon>
                      </ion-button>
                    </ion-item>

                  </div>
                </ion-accordion>

        <!-- ---------------------------------Bauch Geräte----------------------------------------- -->

                <ion-accordion value="ninth">
                  <ion-item slot="header" color="light">
                    <ion-label>Bauch</ion-label>
                  </ion-item>
                  <div class="ion-padding" slot="content">

                    <ion-item lines="none">
                      <ion-avatar slot="start">
                        <ion-img src="assets/img/Geräte/Dipstation_Bauchtrainer.png"></ion-img>
                      </ion-avatar>
                      <ion-label>
                        <h2>Beine heben</h2>
                        <p>Bauch</p>
                      </ion-label>
                      <ion-button id="open-modal777">
                        mehr Info <ion-icon name="chevron-forward-outline" ></ion-icon>
                      </ion-button>
                    </ion-item>

                  </div>
                </ion-accordion>
              </ion-accordion-group>






      <!-- ---------------------------------Geräte Details----------------------------------------- -->

              <ion-modal #modal trigger="open-modal1">
                <ng-template>
                  <ion-content>
                    <ion-toolbar>
                      <ion-title>Bankdrücken</ion-title>
                      <ion-buttons slot="end">
                        <ion-button (click)="modal.dismiss()">Close</ion-button>
                      </ion-buttons>
                    </ion-toolbar>
                  <ion-grid>
                    <ion-row>
                    <ion-col>
                      <ion-img style="border-radius: 50%" src="../assets/img/Geräte/Bankdrücken.png"></ion-img>
                    </ion-col>
                    <ion-col>
                      <h2>Bankdrücken</h2>
                      <strong>Übungen:</strong><br>
                      Bankdrücken, enges Bankdrücken<br><br>
                      <strong>Muskelgruppen:</strong><br>
                      Brust, Trizeps<br><br>
                    </ion-col>
                    </ion-row>
                  </ion-grid>
                  </ion-content>
                </ng-template>
              </ion-modal>

              <ion-modal #modal1 trigger="open-modal2">
                <ng-template>
                  <ion-content>
                    <ion-toolbar>
                      <ion-title>Adductor/Abductor</ion-title>
                      <ion-buttons slot="end">
                        <ion-button  (click)="modal1.dismiss()">Close</ion-button>
                      </ion-buttons>
                    </ion-toolbar>
                    <ion-grid>
                      <ion-row>
                        <ion-col>
                          <ion-img style="border-radius: 50%" src="../assets/img/Geräte/Adductor_Abductor.png"></ion-img>
                        </ion-col>
                        <ion-col>
                          <h2>Adductor/Abductor</h2>
                          <strong>Übungen:</strong><br>
                          Beine spreizen, Beine Schließen<br><br>
                          <strong>Muskelgruppen:</strong><br>
                          Adduktoren (innenseite Oberschenkel), Abduktoren (Außenseite Oberschenkel), Gluteus (Po) <br><br>
                        </ion-col>
                      </ion-row>
                    </ion-grid>
                  </ion-content>
                </ng-template>
              </ion-modal>

      <ion-modal #modal2 trigger="open-modal3">
        <ng-template>
          <ion-content>
            <ion-toolbar>
              <ion-title>Rückenstrecker</ion-title>
              <ion-buttons slot="end">
                <ion-button  (click)="modal2.dismiss()">Close</ion-button>
              </ion-buttons>
            </ion-toolbar>

            <ion-grid>
              <ion-row>
                <ion-col>
                  <ion-img style="border-radius: 50%" src="../assets/img/Geräte/Rueckenstrecker.png"></ion-img>
                </ion-col>
                <ion-col>
                  <h2>Rückenstrecker</h2>
                  <strong>Übungen:</strong><br>
                  Rückenstrecken<br><br>
                  <strong>Muskelgruppen:</strong><br>
                  untere Rückenmuskulatur<br><br>
                </ion-col>
              </ion-row>
            </ion-grid>

          </ion-content>
        </ng-template>
      </ion-modal>


      <ion-modal #modal3 trigger="open-modal4">
        <ng-template>
          <ion-content>
            <ion-toolbar>
              <ion-title>Brustpresse</ion-title>
              <ion-buttons slot="end">
                <ion-button  (click)="modal3.dismiss()">Close</ion-button>
              </ion-buttons>
            </ion-toolbar>

            <ion-grid>
              <ion-row>
                <ion-col>
                  <ion-img style="border-radius: 50%" src="../assets/img/Geräte/Brustpresse_Beinpresse.png"></ion-img>
                </ion-col>
                <ion-col>
                  <h2>Brustpresse</h2>
                  <strong>Übungen:</strong><br>
                  Brustpresse, enges Bankdrücken<br><br>
                  <strong>Muskelgruppen:</strong><br>
                  Brustmuskulatur, Trizeps<br><br>
                </ion-col>
              </ion-row>
            </ion-grid>

          </ion-content>
        </ng-template>
      </ion-modal>


      <ion-modal #modal4 trigger="open-modal5">
        <ng-template>
          <ion-content>
            <ion-toolbar>
              <ion-title>Beinpresse</ion-title>
              <ion-buttons slot="end">
                <ion-button  (click)="modal4.dismiss()">Close</ion-button>
              </ion-buttons>
            </ion-toolbar>

            <ion-grid>
              <ion-row>
                <ion-col>
                  <ion-img style="border-radius: 50%" src="../assets/img/Geräte/Brustpresse_Beinpresse.png"></ion-img>
                </ion-col>
                <ion-col>
                  <h2>Beinpresse</h2>
                  <strong>Übungen:</strong><br>
                  Beinpresse, Wadenstrecken<br><br>
                  <strong>Muskelgruppen:</strong><br>
                  Beinmuskulatur, Gluteus, Waden<br><br>
                </ion-col>
              </ion-row>
            </ion-grid>

          </ion-content>
        </ng-template>
      </ion-modal>


      <ion-modal #modal5 trigger="open-modal6">
                <ng-template>
                  <ion-content>
                    <ion-toolbar>
                      <ion-title>Crosstrainer</ion-title>
                      <ion-buttons slot="end">
                        <ion-button  (click)="modal5.dismiss()">Close</ion-button>
                      </ion-buttons>
                    </ion-toolbar>
                    <ion-grid>
                      <ion-row>
                        <ion-col>
                          <ion-img style="border-radius: 50%" src="../assets/img/Geräte/Crosstrainer.png"></ion-img>
                        </ion-col>
                        <ion-col>
                          <h2>Crosstrainer</h2>
                          <strong>Übungen:</strong><br>
                          Crosstrainer<br><br>
                          <strong>Muskelgruppen:</strong><br>
                          Cardio<br><br>
                        </ion-col>
                      </ion-row>
                    </ion-grid>
                  </ion-content>
                </ng-template>
              </ion-modal>

              <ion-modal #modal6 trigger="open-modal344">
                <ng-template>
                  <ion-content>
                    <ion-toolbar>
                      <ion-title>Dipstation/ Beine heben</ion-title>
                      <ion-buttons slot="end">
                        <ion-button  (click)="modal6.dismiss()">Close</ion-button>
                      </ion-buttons>
                    </ion-toolbar>
                    <ion-grid>
                      <ion-row>
                        <ion-col>
                          <ion-img style="border-radius: 50%" src="../assets/img/Geräte/Dipstation_Bauchtrainer.png"></ion-img>
                        </ion-col>
                        <ion-col>
                          <h2>Dipstation/ Beine heben</h2>
                          <strong>Übungen:</strong><br>
                          Dips, Beine heben<br><br>
                          <strong>Muskelgruppen:</strong><br>
                          Trizeps, Brust, Bauch<br><br>
                        </ion-col>
                      </ion-row>
                    </ion-grid>
                  </ion-content>
                </ng-template>
              </ion-modal>

      <ion-modal #modal777 trigger="open-modal777">
        <ng-template>
          <ion-content>
            <ion-toolbar>
              <ion-title>Dipstation/ Beine heben</ion-title>
              <ion-buttons slot="end">
                <ion-button  (click)="modal777.dismiss()">Close</ion-button>
              </ion-buttons>
            </ion-toolbar>
            <ion-grid>
              <ion-row>
                <ion-col>
                  <ion-img style="border-radius: 50%" src="../assets/img/Geräte/Dipstation_Bauchtrainer.png"></ion-img>
                </ion-col>
                <ion-col>
                  <h2>Dipstation/ Beine heben</h2>
                  <strong>Übungen:</strong><br>
                  Dips, Beine heben<br><br>
                  <strong>Muskelgruppen:</strong><br>
                  Trizeps, Brust, Bauch<br><br>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-content>
        </ng-template>
      </ion-modal>

              <ion-modal #modal7 trigger="open-modal888">
                <ng-template>
                  <ion-content>
                    <ion-toolbar>
                      <ion-title>Flys/Reverse Flys</ion-title>
                      <ion-buttons slot="end">
                        <ion-button  (click)="modal7.dismiss()">Close</ion-button>
                      </ion-buttons>
                    </ion-toolbar>
                    <ion-grid>
                      <ion-row>
                        <ion-col>
                          <ion-img style="border-radius: 50%" src="../assets/img/Geräte/Flymaschine_ReverseFly.png"></ion-img>
                        </ion-col>
                        <ion-col>
                          <h2>Flys/Reverse Flys</h2>
                          <strong>Übungen:</strong><br>
                          Brust, hintere Schulter<br><br>
                          <strong>Muskelgruppen:</strong><br>
                          Brust, hintere Schultern<br><br>
                        </ion-col>
                      </ion-row>
                    </ion-grid>
                  </ion-content>
                </ng-template>
              </ion-modal>

      <ion-modal #modal77 trigger="open-modal8">
        <ng-template>
          <ion-content>
            <ion-toolbar>
              <ion-title>Flys/Reverse Flys</ion-title>
              <ion-buttons slot="end">
                <ion-button  (click)="modal77.dismiss()">Close</ion-button>
              </ion-buttons>
            </ion-toolbar>
            <ion-grid>
              <ion-row>
                <ion-col>
                  <ion-img style="border-radius: 50%" src="../assets/img/Geräte/Flymaschine_ReverseFly.png"></ion-img>
                </ion-col>
                <ion-col>
                  <h2>Flys/Reverse Flys</h2>
                  <strong>Übungen:</strong><br>
                  Brust, hintere Schulter<br><br>
                  <strong>Muskelgruppen:</strong><br>
                  Brust, hintere Schultern<br><br>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-content>
        </ng-template>
      </ion-modal>

              <ion-modal #modal8 trigger="open-modal9">
                <ng-template>
                  <ion-content>
                    <ion-toolbar>
                      <ion-title>Kettlebells</ion-title>
                      <ion-buttons slot="end">
                        <ion-button  (click)="modal8.dismiss()">Close</ion-button>
                      </ion-buttons>
                    </ion-toolbar>
                    <ion-grid>
                      <ion-row>
                        <ion-col>
                          <ion-img style="border-radius:10px" src="../assets/img/Geräte/Kettlebells.png"></ion-img>
                        </ion-col>
                        <ion-col>
                          <h2>Kettlebells</h2>
                          <strong>Übungen:</strong><br>
                          Global Squat, Schulterdrücken, Swing, Rudern, ...<br><br>
                          <strong>Muskelgruppen:</strong><br>
                          Alle<br><br>
                        </ion-col>
                      </ion-row>
                    </ion-grid>
                  </ion-content>
                </ng-template>
              </ion-modal>

              <ion-modal #modal9 trigger="open-modal10">
                <ng-template>
                  <ion-content>
                    <ion-toolbar>
                      <ion-title>Kurzhanteln</ion-title>
                      <ion-buttons slot="end">
                        <ion-button  (click)="modal9.dismiss()">Close</ion-button>
                      </ion-buttons>
                    </ion-toolbar>
                    <ion-grid>
                      <ion-row>
                        <ion-col>
                          <ion-img style="border-radius: 50%" src="../assets/img/Geräte/Kurzhanteln.png"></ion-img>
                        </ion-col>
                        <ion-col>
                          <h2>Kurzhanteln</h2>
                          <strong>Übungen:</strong><br>
                          Bizepcurls, Trizepsdrücken, Bankdrücken, Rudern, ...<br><br>
                          <strong>Muskelgruppen:</strong><br>
                          Alle<br><br>
                        </ion-col>
                      </ion-row>
                    </ion-grid>
                  </ion-content>
                </ng-template>
              </ion-modal>

              <ion-modal #modal10 trigger="open-modal11">
                <ng-template>
                  <ion-content>
                    <ion-toolbar>
                      <ion-title>Latzug</ion-title>
                      <ion-buttons slot="end">
                        <ion-button  (click)="modal10.dismiss()">Close</ion-button>
                      </ion-buttons>
                    </ion-toolbar>
                    <ion-grid>
                      <ion-row>
                        <ion-col>
                          <ion-img style="border-radius: 50%" src="../assets/img/Geräte/Seilzüge_Latzug_Rudern.png"></ion-img>
                        </ion-col>
                        <ion-col>
                          <h2>Latzug</h2>
                          <strong>Übungen:</strong><br>
                          Latziehen - breit, eng, Rühlsche Bizepcurls<br><br>
                          <strong>Muskelgruppen:</strong><br>
                          Rückenmuskulatur, Bizeps<br><br>
                        </ion-col>
                      </ion-row>
                    </ion-grid>
                  </ion-content>
                </ng-template>
              </ion-modal>

              <ion-modal #modal11 trigger="open-modal12">
                <ng-template>
                  <ion-content>
                    <ion-toolbar>
                      <ion-title>Rudern im Sitzen</ion-title>
                      <ion-buttons slot="end">
                        <ion-button  (click)="modal11.dismiss()">Close</ion-button>
                      </ion-buttons>
                    </ion-toolbar>
                    <ion-grid>
                      <ion-row>
                        <ion-col>
                          <ion-img style="border-radius: 50%" src="../assets/img/Geräte/Seilzüge_Latzug_Rudern.png"></ion-img>
                        </ion-col>
                        <ion-col>
                          <h2>Rudern im Sitzen</h2>
                          <strong>Übungen:</strong><br>
                          Rudern - eng, weit<br><br>
                          <strong>Muskelgruppen:</strong><br>
                          Rückenmuskulatur<br><br>
                        </ion-col>
                      </ion-row>
                    </ion-grid>
                  </ion-content>
                </ng-template>
              </ion-modal>

              <ion-modal #modal12 trigger="open-modal13">
                <ng-template>
                  <ion-content>
                    <ion-toolbar>
                      <ion-title>Sportmatten</ion-title>
                      <ion-buttons slot="end">
                        <ion-button  (click)="modal12.dismiss()">Close</ion-button>
                      </ion-buttons>
                    </ion-toolbar>
                    <ion-grid>
                      <ion-row>
                        <ion-col>
                          <ion-img style="border-radius: 50%" src="../assets/img/Geräte/Sportmatte.png"></ion-img>
                        </ion-col>
                        <ion-col>
                          <h2>Sportmatten</h2>
                          <strong>Übungen:</strong><br>
                          Plank, Sit-Ups, Liegestütze, seitliche Planks, ...<br><br>
                          <strong>Muskelgruppen:</strong><br>
                          Alle<br><br>
                        </ion-col>
                      </ion-row>
                    </ion-grid>
                  </ion-content>
                </ng-template>
              </ion-modal>

              <ion-modal #modal13 trigger="open-modal14">
                <ng-template>
                  <ion-content>
                    <ion-toolbar>
                      <ion-title>Squatrack</ion-title>
                      <ion-buttons slot="end">
                        <ion-button  (click)="modal13.dismiss()">Close</ion-button>
                      </ion-buttons>
                    </ion-toolbar>
                    <ion-grid>
                      <ion-row>
                        <ion-col>
                          <ion-img style="border-radius: 50%" src="../assets/img/Geräte/Squatrack.png"></ion-img>
                        </ion-col>
                        <ion-col>
                          <h2>Squatrack</h2>
                          <strong>Übungen:</strong><br>
                          Kniebeuge, Schulterdrücken, Rudern vorgebeugt, ...<br><br>
                          <strong>Muskelgruppen:</strong><br>
                           Alle <br><br>
                        </ion-col>
                      </ion-row>
                    </ion-grid>
                  </ion-content>
                </ng-template>
              </ion-modal>

              <ion-modal #modal14 trigger="open-modal15">
                <ng-template>
                  <ion-content>
                    <ion-toolbar>
                      <ion-title>T-Bar Rudern</ion-title>
                      <ion-buttons slot="end">
                        <ion-button  (click)="modal14.dismiss()">Close</ion-button>
                      </ion-buttons>
                    </ion-toolbar>
                    <ion-grid>
                      <ion-row>
                        <ion-col>
                          <ion-img style="border-radius: 50%" src="../assets/img/Geräte/TBar_Rudern.png"></ion-img>
                        </ion-col>
                        <ion-col>
                          <h2>T-Bar Rudern</h2>
                          <strong>Übungen:</strong><br>
                          Rudern<br><br>
                          <strong>Muskelgruppen:</strong><br>
                          Rückenmuskulatur, hintere Schulter<br><br>
                        </ion-col>
                      </ion-row>
                    </ion-grid>
                  </ion-content>
                </ng-template>
              </ion-modal>
            </ion-content>

            <ion-modal #modal15 trigger="open-modal16">
              <ng-template>
                <ion-content>
                  <ion-toolbar>
                    <ion-title>Multipresse</ion-title>
                    <ion-buttons slot="end">
                      <ion-button  (click)="modal15.dismiss()">Close</ion-button>
                    </ion-buttons>
                  </ion-toolbar>
                  <ion-grid>
                    <ion-row>
                      <ion-col>
                        <ion-img style="border-radius:10px" src="../assets/img/Geräte/Multipresse.png"></ion-img>
                      </ion-col>
                      <ion-col>
                        <h2>Multipresse</h2>
                        <strong>Übungen:</strong><br>
                        Bankdrücken, Kniebeuge, Nackenziehen, Schulterdrücken,...<br><br>
                        <strong>Muskelgruppen:</strong><br>
                        Alle<br><br>
                      </ion-col>
                    </ion-row>
                  </ion-grid>
                </ion-content>
              </ng-template>
            </ion-modal>

`,
})
export class MaschinenuebersichtComponent {
}
