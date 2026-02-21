import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-page-motivation',
  styleUrls: ['../Motivation/tab8.page.scss'],
  template: `

    <!--------------------------------------------------------- Übersichtsseite------------------------------------------->
    <ion-header [translucent]="true" *ngIf="!showMusic&&!showMovies">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Motivation</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content *ngIf="!showMusic&&!showMovies">

      <ion-grid>
        <ion-row>
          <ion-col size="12" size-sm="5">
            <ion-card>
              <ion-card-header>
                <ion-card-title>
                  Musik
                </ion-card-title>
        
              </ion-card-header>
              <ion-card-content>

                <ion-img style="padding-bottom: 25px" src="../../assets/img/Frau_mit_Kopfhoerer.jpg"
                         alt="Bild kann nicht angezeigt werden"></ion-img>


                <p *ngIf="!showMusic" style="letter-spacing: 1px">
                  Musik ist vielfältig und genauso individuell wie dein Geschmack. Entdecke Motivations-Playlists
                  für jeden Stil. Hast du eigene Vorschläge? Schreib uns – wir freuen uns auf deine Ideen!</p>

                <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMusic = true"
                            *ngIf="!showMusic">zu den Playlists
                  <ion-icon slot="end" color="light" name="arrow-forward-outline"></ion-icon>
                </ion-button>


              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col size="12" size-sm="5">
            <ion-card>
              <ion-card-header>
                <ion-card-title>
                  Film
                </ion-card-title>
                
              </ion-card-header>
              <ion-card-content>

                <ion-img style="padding-bottom: 25px" src="../../assets/img/kinostudio.jpg"
                         alt="Bild kann nicht angezeigt werden"></ion-img>


                <p *ngIf="!showMovies" style="letter-spacing: 1px">
                  Im Bereich Sport und Motivation gibt es zahlreiche filmische Meisterwerke. Erlebe inspirierende
                  Motivationsmomente mit unseren Filmempfehlungen. Hast du eigene Vorschläge? Teile sie mit uns – deine
                  Ideen sind willkommen!</p>
                <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMovies = true"
                            *ngIf="!showMovies">zu den Filmen
                  <ion-icon slot="end" color="light" name="arrow-forward-outline"></ion-icon>
                </ion-button>


              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>


        <ion-footer>
          <p style="font-size: small; padding-top: 50px; color: grey; text-align: center;">Bilder von Freepik</p>
        </ion-footer>

    </ion-content>

      <!--------------------------------------------------------- Playlists------------------------------------------->


      <ion-header *ngIf="showMusic">
        <ion-toolbar>
          <ion-buttons slot="start" >
            <ion-button (click)="showMusic = false" *ngIf="showMusic">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </ion-button>
          </ion-buttons>
          <ion-title>Playlist</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content *ngIf="showMusic">


        <iframe style="border-radius:12px"
                src="https://open.spotify.com/embed/playlist/1Z8rUbx6eWaMAJISa0Z9lT?utm_source=generator" width="100%"
                height="152" frameBorder="0" allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"></iframe>
        <iframe style="border-radius:12px"
                src="https://open.spotify.com/embed/playlist/1akG8kkVQxGlEbkqsUIFLB?utm_source=generator" width="100%"
                height="152" frameBorder="0" allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"></iframe>
        <iframe style="border-radius:12px"
                src="https://open.spotify.com/embed/playlist/29F1hDpT64psiaQZGc2CZ9?utm_source=generator" width="100%"
                height="152" frameBorder="0" allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"></iframe>
        <iframe style="border-radius:12px"
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DWTcqUzwhNmKv?utm_source=generator" width="100%"
                height="152" frameBorder="0" allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"></iframe>
        <iframe style="border-radius:12px"
                src="https://open.spotify.com/embed/playlist/331229UVEdyF8qSPZyNCHq?utm_source=generator" width="100%"
                height="152" frameBorder="0" allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"></iframe>

      </ion-content>
      <!--------------------------------------------------------- Übersichtsseite------------------------------------------->



      <ion-header *ngIf="showMovies">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button  (click)="showMovies = false" *ngIf="showMovies">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </ion-button>
          </ion-buttons>
          <ion-title>Filme</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content *ngIf="showMovies">
        <ion-grid>
          <ion-row>
            <ion-col size="12" size-md="6" size-lg="4" size-xl="3"> <ion-card>
              <ion-card-header>
                <ion-card-title>
                  Tony Robbins: I am not your guru
                </ion-card-title>
                
              </ion-card-header>
              <ion-card-content>

                <iframe class="player" src="https://www.youtube.com/embed/HUHMZf3qwsQ?si=t-EBzmU01nVyeGzj"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>

                <ion-chip>
                  <ion-icon name="calendar-outline"></ion-icon>
                  <ion-label>2016</ion-label>
                </ion-chip>
                <ion-chip>
                  <ion-icon name="time-outline"></ion-icon>
                  <ion-label>115 min</ion-label>
                </ion-chip>
                <ion-chip>
                  <ion-icon name="videocam-outline"></ion-icon>
                  <ion-label>Dokumentarfilm/Action</ion-label>
                </ion-chip>
                <p *ngIf="!showMore1" style="padding-top: 10px"><strong>I Am Not Your Guru</strong> ist ein inspirierender
                  Dokumentarfilm, der Tony Robbins'
                  "Date with Destiny" Seminar einfängt. Er zeigt eindrucksvoll, wie Selbstreflexion und persönliches
                  Wachstum Leben verändern können. Der Film bietet ...</p>
                <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore1 = true"
                            *ngIf="!showMore1">weiterlesen
                  <ion-icon slot="end" color="light" name="chevron-forward-outline"></ion-icon>
                </ion-button>
                <p *ngIf="showMore1" style="padding-top: 10px"><strong>I Am Not Your Guru</strong> ist ein inspirierender
                  Dokumentarfilm, der Tony Robbins'
                  "Date with Destiny" Seminar einfängt. Er zeigt eindrucksvoll, wie Selbstreflexion und persönliches
                  Wachstum Leben verändern können. Der Film bietet tiefe Einblicke und emotionale Momente auf dem Weg zu
                  persönlichem Erfolg und Glück.</p>
                <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore1 = false"
                            *ngIf="showMore1">weniger
                  <ion-icon slot="start" color="light" name="chevron-back-outline"></ion-icon>
                </ion-button>
              </ion-card-content>

            </ion-card>
            </ion-col>
            <ion-col size="12" size-md="6" size-lg="4" size-xl="3">
              <ion-card>
                <ion-card-header>
                  <ion-card-title>
                    Pumping Iron
                  </ion-card-title>
            
                </ion-card-header>
                <ion-card-content>

                  <iframe class="player" src="https://www.youtube.com/embed/i4zACggrNsY?si=29Vhhfea4F-R_bJR"
                          title="YouTube video player" frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen></iframe>

                  <ion-chip>
                    <ion-icon name="calendar-outline"></ion-icon>
                    <ion-label>1977</ion-label>
                  </ion-chip>
                  <ion-chip>
                    <ion-icon name="time-outline"></ion-icon>
                    <ion-label>86 min</ion-label>
                  </ion-chip>
                  <ion-chip>
                    <ion-icon name="videocam-outline"></ion-icon>
                    <ion-label>Dokumentarfilm/Sport</ion-label>
                  </ion-chip>
                  <p *ngIf="!showMore2" style="padding-top: 10px"><strong>Pumping Iron</strong> ist ein packender
                    Dokumentarfilm über die Welt des Bodybuildings, der
                    Arnold Schwarzenegger und seine Mitstreiter ins Rampenlicht rückt. Der Film ...</p>
                  <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore2 = true"
                              *ngIf="!showMore2">weiterlesen
                    <ion-icon slot="end" color="light" name="chevron-forward-outline"></ion-icon>
                  </ion-button>
                  <p *ngIf="showMore2" style="padding-top: 10px"><strong>Pumping Iron</strong> ist ein packender
                    Dokumentarfilm über die Welt des Bodybuildings, der
                    Arnold Schwarzenegger und seine Mitstreiter ins Rampenlicht rückt. Der Film gewährt beeindruckende
                    Einblicke in die harte Welt des Kraftsports, betont Hingabe, Entschlossenheit und Opfer als Schlüssel zum
                    Erfolg. Mit intensiven Trainingseinheiten und faszinierenden Wettkampfszenen dokumentiert <em>Pumping
                      Iron</em> nicht nur physischen, sondern auch mentalen Kampf. Der inspirierende Film zeigt, wie
                    Leidenschaft und Durchhaltevermögen zu außergewöhnlichen körperlichen Leistungen führen können.</p>
                  <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore2 = false"
                              *ngIf="showMore2">weniger
                    <ion-icon slot="start" color="light" name="chevron-back-outline"></ion-icon>
                  </ion-button>
                </ion-card-content>

              </ion-card>
            </ion-col>
            <ion-col size="12" size-md="6" size-lg="4" size-xl="3">   <ion-card>
              <ion-card-header>
                <ion-card-title>
                  Pain & Gain
                </ion-card-title>
                
              </ion-card-header>
              <ion-card-content>

                <iframe class="player" src="https://www.youtube.com/embed/NpCQ6v5UnqE?si=ersRwuX7ZTa0RufB"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>

                <ion-chip>
                  <ion-icon name="calendar-outline"></ion-icon>
                  <ion-label>2013</ion-label>
                </ion-chip>
                <ion-chip>
                  <ion-icon name="time-outline"></ion-icon>
                  <ion-label>129 min</ion-label>
                </ion-chip>
                <ion-chip>
                  <ion-icon name="videocam-outline"></ion-icon>
                  <ion-label>Krimi/Action</ion-label>
                </ion-chip>
                <p *ngIf="!showMore3" style="padding-top: 10px"><strong>Pain & Gain</strong> ist ein mitreißender Film, der
                  die wahre Geschichte von Bodybuildern
                  verfolgt, die nach dem amerikanischen Traum streben. Mit Dwayne Johnson und Mark Wahlberg in den
                  Hauptrollen taucht der Film in ...</p>
                <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore3 = true"
                            *ngIf="!showMore3">weiterlesen
                  <ion-icon slot="end" color="light" name="chevron-forward-outline"></ion-icon>
                </ion-button>
                <p *ngIf="showMore3" style="padding-top: 10px"><strong>Pain & Gain</strong> ist ein mitreißender Film, der
                  die wahre Geschichte von Bodybuildern
                  verfolgt, die nach dem amerikanischen Traum streben. Mit Dwayne Johnson und Mark Wahlberg in den
                  Hauptrollen taucht der Film in die dunkle Komik und den absurden Realismus ein, wenn diese ehrgeizige
                  Gruppe ihre eigenen Wege zum Reichtum geht. <em>Pain & Gain</em> bietet einen faszinierenden Einblick in
                  den skurrilen Mix aus Verbrechen und Komödie und zeigt, dass der Weg zum Erfolg manchmal unkonventionell
                  und oft schmerzhaft ist.</p>
                <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore3 = false"
                            *ngIf="showMore3">weniger
                  <ion-icon slot="start" color="light" name="chevron-back-outline"></ion-icon>
                </ion-button>
              </ion-card-content>

            </ion-card>
            </ion-col>
            <ion-col size="12" size-md="6" size-lg="4" size-xl="3">
              <ion-card>
                <ion-card-header>
                  <ion-card-title>
                    Generation Iron
                  </ion-card-title>
              
                </ion-card-header>
                <ion-card-content>

                  <iframe class="player" src="https://www.youtube.com/embed/up304E9dKbQ?si=_QZPnKgJ_NC95v8f"
                          title="YouTube video player" frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen></iframe>

                  <ion-chip>
                    <ion-icon name="calendar-outline"></ion-icon>
                    <ion-label>2013</ion-label>
                  </ion-chip>
                  <ion-chip>
                    <ion-icon name="time-outline"></ion-icon>
                    <ion-label>117 min</ion-label>
                  </ion-chip>
                  <ion-chip>
                    <ion-icon name="videocam-outline"></ion-icon>
                    <ion-label>Dokumentarfilm/Sport</ion-label>
                  </ion-chip>
                  <p *ngIf="!showMore4" style="padding-top: 10px"><strong>Generation Iron</strong> gewährt einen intensiven
                    Blick in die Welt des modernen Bodybuildings.
                    Der Dokumentarfilm, der die Herausforderungen und Opfer von Wettkampf-Bodybuildern zeigt, bietet
                    faszinierende Einblicke in ihre harte Arbeit, Disziplin und Hingabe. Mit beeindruckenden ...</p>
                  <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore4 = true"
                              *ngIf="!showMore4">weiterlesen
                    <ion-icon slot="end" color="light" name="chevron-forward-outline"></ion-icon>
                  </ion-button>
                  <p *ngIf="showMore4" style="padding-top: 10px"><strong>Generation Iron</strong> gewährt einen intensiven
                    Blick in die Welt des modernen Bodybuildings.
                    Der Dokumentarfilm, der die Herausforderungen und Opfer von Wettkampf-Bodybuildern zeigt, bietet
                    faszinierende Einblicke in ihre harte Arbeit, Disziplin und Hingabe. Mit beeindruckenden Porträts von
                    Top-Athleten wie Phil Heath, Kai Greene und anderen präsentiert <em>Generation Iron</em> nicht nur die
                    körperliche, sondern auch die emotionale Reise, die diese Sportler antreten, um die Spitze zu erreichen.
                    Der Film inspiriert dazu, die Welt des Bodybuildings mit neuen Augen zu sehen und verdeutlicht, dass wahre
                    Größe oft hinter den Kulissen entsteht.</p>
                  <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore4 = false"
                              *ngIf="showMore4">weniger
                    <ion-icon slot="start" color="light" name="chevron-back-outline"></ion-icon>
                  </ion-button>
                </ion-card-content>

              </ion-card>
            </ion-col>
          </ion-row>
            <ion-row>
              <ion-col size="12" size-md="6" size-lg="4" size-xl="3"> <ion-card>
                <ion-card-header>
                  <ion-card-title>
                    Generation Iron 2
                  </ion-card-title>
              
                </ion-card-header>
                <ion-card-content>

                  <iframe class="player" src="https://www.youtube.com/embed/MJpRzkYKt-Q?si=JCwm99dSnnNR15kw"
                          title="YouTube video player" frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen></iframe>

                  <ion-chip>
                    <ion-icon name="calendar-outline"></ion-icon>
                    <ion-label>2017</ion-label>
                  </ion-chip>
                  <ion-chip>
                    <ion-icon name="time-outline"></ion-icon>
                    <ion-label>116 min</ion-label>
                  </ion-chip>
                  <ion-chip>
                    <ion-icon name="videocam-outline"></ion-icon>
                    <ion-label>Dokumentarfilm/Sport</ion-label>
                  </ion-chip>
                  <p *ngIf="!showMore5" style="padding-top: 10px"><strong>Generation Iron 2</strong> setzt die faszinierende
                    Reise in die Welt des Bodybuildings fort.
                    Dieser Dokumentarfilm wirft einen neuen Blick auf die Sportart und beleuchtet die Geschichten von
                    aufstrebenden Athleten, darunter Mamdouh Elssbiay...</p>
                  <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore5 = true"
                              *ngIf="!showMore5">weiterlesen
                    <ion-icon slot="end" color="light" name="chevron-forward-outline"></ion-icon>
                  </ion-button>
                  <p *ngIf="showMore5" style="padding-top: 10px"><strong>Generation Iron 2</strong> setzt die faszinierende
                    Reise in die Welt des Bodybuildings fort.
                    Dieser Dokumentarfilm wirft einen neuen Blick auf die Sportart und beleuchtet die Geschichten von
                    aufstrebenden Athleten, darunter Mamdouh Elssbiay, Calum von Moger und Rich Piana. <em>Generation Iron
                      2</em> erforscht nicht nur die körperlichen Anstrengungen, sondern auch die psychologischen und
                    gesellschaftlichen Aspekte dieses anspruchsvollen Sports. Mit inspirierenden Einblicken und persönlichen
                    Einblicken in die Welt der modernen Bodybuilder hebt der Film die Hürden und Triumphe hervor, die diese
                    Athleten auf dem Weg zur Spitze überwinden.</p>
                  <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore5 = false"
                              *ngIf="showMore5">weniger
                    <ion-icon slot="start" color="light" name="chevron-back-outline"></ion-icon>
                  </ion-button>
                </ion-card-content>

              </ion-card>
              </ion-col>
              <ion-col size="12" size-md="6" size-lg="4" size-xl="3"> <ion-card>
                <ion-card-header>
                  <ion-card-title>
                    Generation Iron 3
                  </ion-card-title>
              
                </ion-card-header>
                <ion-card-content>

                  <iframe class="player" src="https://www.youtube.com/embed/rkS-AX-L7LI?si=eEQHwFphJEiXfcIa"
                          title="YouTube video player" frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen></iframe>

                  <ion-chip>
                    <ion-icon name="calendar-outline"></ion-icon>
                    <ion-label>2018</ion-label>
                  </ion-chip>
                  <ion-chip>
                    <ion-icon name="time-outline"></ion-icon>
                    <ion-label>95 min</ion-label>
                  </ion-chip>
                  <ion-chip>
                    <ion-icon name="videocam-outline"></ion-icon>
                    <ion-label>Dokumentarfilm/Sport</ion-label>
                  </ion-chip>
                  <p *ngIf="!showMore6" style="padding-top: 10px"><strong>Generation Iron 3</strong> gewährt einen exklusiven
                    Blick hinter die Kulissen der globalen
                    Bodybuilding-Trends. In dieser fesselnden Fortsetzung stehen neue Stars der Szene im Rampenlicht, darunter
                    Größen wie Kai Greene ...</p>
                  <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore6 = true"
                              *ngIf="!showMore6">weiterlesen
                    <ion-icon slot="end" color="light" name="chevron-forward-outline"></ion-icon>
                  </ion-button>
                  <p *ngIf="showMore6" style="padding-top: 10px"><strong>Generation Iron 3</strong> gewährt einen exklusiven
                    Blick hinter die Kulissen der globalen
                    Bodybuilding-Trends. In dieser fesselnden Fortsetzung stehen neue Stars der Szene im Rampenlicht, darunter
                    Größen wie Kai Greene, Bradley Martin, Ariel Khadr und Regan Crimes. Der immense Druck, dem diese Athleten
                    ausgesetzt sind, wird ebenso beleuchtet wie die Tatsache, dass Millionen von Menschen weltweit jede
                    muskuläre Entwicklung genau verfolgen können. Die Dokumentation setzt die Tradition fort, die körperlichen
                    Grenzen im Bodybuilding weiter zu verschieben, und bietet faszinierende Einblicke in die Welt dieser
                    modernen Athleten.</p>
                  <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore6 = false"
                              *ngIf="showMore6">weniger
                    <ion-icon slot="start" color="light" name="chevron-back-outline"></ion-icon>
                  </ion-button>
                </ion-card-content>

              </ion-card></ion-col>
              <ion-col size="12" size-md="6" size-lg="4" size-xl="3">
                <ion-card>
                  <ion-card-header>
                    <ion-card-title>
                      Generation Iron 4
                    </ion-card-title>
                    
                  </ion-card-header>
                  <ion-card-content>

                    <iframe class="player" src="https://www.youtube.com/embed/agE0f6ROWyU?si=CmpSknNgm-HX4PgC"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>

                    <ion-chip>
                      <ion-icon name="calendar-outline"></ion-icon>
                      <ion-label>2020</ion-label>
                    </ion-chip>
                    <ion-chip>
                      <ion-icon name="time-outline"></ion-icon>
                      <ion-label>108 min</ion-label>
                    </ion-chip>
                    <ion-chip>
                      <ion-icon name="videocam-outline"></ion-icon>
                      <ion-label>Dokumentarfilm/Sport</ion-label>
                    </ion-chip>
                    <p *ngIf="!showMore7" style="padding-top: 10px">In <strong>Generation Iron 4</strong> begibt sich der
                      weltberühmte Natural Bodybuilder und ehemalige
                      amerikanische Gladiator Mike O'Hearn auf eine Reise, um die inneren Abläufe des professionellen Natural
                      Bodybuildings zu erforschen. Das Ziel ist die Enthüllung der Wahrheit hinter ...</p>
                    <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore7 = true"
                                *ngIf="!showMore7">weiterlesen
                      <ion-icon slot="end" color="light" name="chevron-forward-outline"></ion-icon>
                    </ion-button>
                    <p *ngIf="showMore7" style="padding-top: 10px">In <strong>Generation Iron 4</strong> begibt sich der
                      weltberühmte Natural Bodybuilder und ehemalige
                      amerikanische Gladiator Mike O'Hearn auf eine Reise, um die inneren Abläufe des professionellen Natural
                      Bodybuildings zu erforschen. Das Ziel ist die Enthüllung der Wahrheit hinter dem rein natürlichen Anspruch
                      dieses Sports. Dieses nächste Kapitel der Flaggschiff-Filmreihe wird auch Einblicke in die Welt von Kai
                      Greene bieten und die umstrittene Arena des professionellen natürlichen Bodybuildings erkunden. Die
                      Handlung konzentriert sich auf Top-Profis, die im Wettbewerb um Natural Olympia stehen, einer Liga, die
                      sich dafür einsetzt, sicherzustellen, dass alle Teilnehmer frei von leistungssteigernden Drogen sind.
                      Angesichts der raschen Veränderungen in Medizin und Technologie im Sport und der Unterhaltung wird das
                      natürliche Bodybuilding als Ganzes kritisch hinterfragt. Die zentrale Frage lautet: Kann die Liga
                      garantieren, dass diese Konkurrenten wirklich natürlich sind?</p>
                    <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore7 = false"
                                *ngIf="showMore7">weniger
                      <ion-icon slot="start" color="light" name="chevron-back-outline"></ion-icon>
                    </ion-button>
                  </ion-card-content>

                </ion-card></ion-col>
              <ion-col size="12" size-md="6" size-lg="4" size-xl="3"> <ion-card>
                <ion-card-header>
                  <ion-card-title>
                    Die Rich Piana Story
                  </ion-card-title>
              
                </ion-card-header>
                <ion-card-content>

                  <iframe class="player" src="https://www.youtube.com/embed/8RnRPtXC5Eo?si=CG-xuqOZs_vYD0vh"
                          title="YouTube video player" frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen></iframe>

                  <ion-chip>
                    <ion-icon name="calendar-outline"></ion-icon>
                    <ion-label>2018</ion-label>
                  </ion-chip>
                  <ion-chip>
                    <ion-icon name="time-outline"></ion-icon>
                    <ion-label>97 min</ion-label>
                  </ion-chip>
                  <ion-chip>
                    <ion-icon name="videocam-outline"></ion-icon>
                    <ion-label>Dokumentarfilm/Biografie</ion-label>
                  </ion-chip>
                  <p *ngIf="!showMore8" style="padding-top: 10px"><strong>Die Rich Piana Story</strong> porträtiert das Leben
                    eines Mannes, für den nichts zwischen ihn und
                    seinen eisernen Willen stand. Rich Piana vereinte das Management seiner gleichnamigen Firma '5%',
                    Motivationstraining auf YouTube und eine erfolgreiche Karriere als Bodybuilder ...</p>
                  <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore8 = true"
                              *ngIf="!showMore8">weiterlesen
                    <ion-icon slot="end" color="light" name="chevron-forward-outline"></ion-icon>
                  </ion-button>
                  <p *ngIf="showMore8" style="padding-top: 10px"><strong>Die Rich Piana Story</strong> porträtiert das Leben
                    eines Mannes, für den nichts zwischen ihn und
                    seinen eisernen Willen stand. Rich Piana vereinte das Management seiner gleichnamigen Firma '5%',
                    Motivationstraining auf YouTube und eine erfolgreiche Karriere als Bodybuilder in einer faszinierenden
                    Persönlichkeit. Dieser Dokumentarfilm gewährt einen hautnahen Einblick in das außergewöhnliche Leben des
                    exzentrischen Körperkünstlers und wird durch seine eigenen Worte kommentiert. Von seinem Management bis zu
                    seinen Motivationsbemühungen und dem intensiven Alltag als erfolgreicher Bodybuilder begleitet 'Die Rich
                    Piana Story' diesen einzigartigen Mann durch seine beeindruckende Reise.</p>
                  <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore8 = false"
                              *ngIf="showMore8">weniger
                    <ion-icon slot="start" color="light" name="chevron-back-outline"></ion-icon>
                  </ion-button>
                </ion-card-content>

              </ion-card>
              </ion-col>
            </ion-row>
          <ion-row>
            <ion-col size="12" size-md="6" size-lg="4" size-xl="3">
              <ion-card>
                <ion-card-header>
                  <ion-card-title>
                    The Game Changers
                  </ion-card-title>
              
                </ion-card-header>
                <ion-card-content>

                  <iframe class="player" src="https://www.youtube.com/embed/iSpglxHTJVM?si=YaScFKTsYEDGrEI5"
                          title="YouTube video player" frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen></iframe>

                  <ion-chip>
                    <ion-icon name="calendar-outline"></ion-icon>
                    <ion-label>2018</ion-label>
                  </ion-chip>
                  <ion-chip>
                    <ion-icon name="time-outline"></ion-icon>
                    <ion-label>112 min</ion-label>
                  </ion-chip>
                  <ion-chip>
                    <ion-icon name="videocam-outline"></ion-icon>
                    <ion-label>Dokumentarfilm/Sport</ion-label>
                  </ion-chip>
                  <p *ngIf="!showMore9" style="padding-top: 10px"><strong>The Game Changers</strong> revolutioniert die
                    Vorstellungen über Ernährung, Kraft und Leistung.
                    Der Dokumentarfilm nimmt die Zuschauer mit auf eine fesselnde Reise durch die Welt des pflanzlichen
                    Lebensstils und seiner Auswirkungen auf Athleten. Von Elite-Kämpfern ...</p>
                  <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore9 = true"
                              *ngIf="!showMore9">weiterlesen
                    <ion-icon slot="end" color="light" name="chevron-forward-outline"></ion-icon>
                  </ion-button>
                  <p *ngIf="showMore9" style="padding-top: 10px"><strong>The Game Changers</strong> revolutioniert die
                    Vorstellungen über Ernährung, Kraft und Leistung.
                    Der Dokumentarfilm nimmt die Zuschauer mit auf eine fesselnde Reise durch die Welt des pflanzlichen
                    Lebensstils und seiner Auswirkungen auf Athleten. Von Elite-Kämpfern bis zu Olympia-Medaillengewinnern
                    wird gezeigt, wie eine rein pflanzliche Ernährung nicht nur die physische Gesundheit, sondern auch die
                    sportliche Leistungsfähigkeit verbessern kann. Dieser bahnbrechende Film präsentiert inspirierende
                    Geschichten und wissenschaftliche Erkenntnisse, die die Art und Weise, wie wir über Ernährung und Kraft
                    denken, grundlegend verändern.</p>
                  <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore9 = false"
                              *ngIf="showMore9">weniger
                    <ion-icon slot="start" color="light" name="chevron-back-outline"></ion-icon>
                  </ion-button>
                </ion-card-content>

              </ion-card></ion-col>
            <ion-col size="12" size-md="6" size-lg="4" size-xl="3">
              <ion-card>
                <ion-card-header>
                  <ion-card-title>
                    Das Streben nach Glück
                  </ion-card-title>
              
                </ion-card-header>
                <ion-card-content>

                  <iframe class="player" src="https://www.youtube.com/embed/aib0R72b9Nk?si=IVqCpA_ddSJ3GgKT"
                          title="YouTube video player" frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen></iframe>

                  <ion-chip>
                    <ion-icon name="calendar-outline"></ion-icon>
                    <ion-label>2006</ion-label>
                  </ion-chip>
                  <ion-chip>
                    <ion-icon name="time-outline"></ion-icon>
                    <ion-label>117 min</ion-label>
                  </ion-chip>
                  <ion-chip>
                    <ion-icon name="videocam-outline"></ion-icon>
                    <ion-label>Drama</ion-label>
                  </ion-chip>
                  <p *ngIf="!showMore10" style="padding-top: 10px"><strong>Das Streben nach Glück</strong> ist ein bewegendes
                    Drama, das die wahre Geschichte von Chris
                    Gardner erzählt, gespielt von Will Smith. Der Film verfolgt Gardners inspirierenden Kampf gegen
                    Obdachlosigkeit und Verzweiflung, während er gleichzeitig versucht ...</p>
                  <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore10 = true"
                              *ngIf="!showMore10">weiterlesen
                    <ion-icon slot="end" color="light" name="chevron-forward-outline"></ion-icon>
                  </ion-button>
                  <p *ngIf="showMore10" style="padding-top: 10px"><strong>Das Streben nach Glück</strong> ist ein bewegendes
                    Drama, das die wahre Geschichte von Chris
                    Gardner erzählt, gespielt von Will Smith. Der Film verfolgt Gardners inspirierenden Kampf gegen
                    Obdachlosigkeit und Verzweiflung, während er gleichzeitig versucht, als Verkäufer Fuß zu fassen und sein
                    Leben und das seines Sohnes zu verbessern. Mit eindringlicher Schauspielkunst und einer tiefgreifenden
                    Botschaft über Durchhaltevermögen und den Glauben an die eigenen Träume berührt der Film die Herzen der
                    Zuschauer. 'Das Streben nach Glück' ist eine emotionale Reise, die die Kraft des menschlichen Willens und
                    die Bedeutung der Hoffnung zelebriert.</p>
                  <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore10 = false"
                              *ngIf="showMore10">weniger
                    <ion-icon slot="start" color="light" name="chevron-back-outline"></ion-icon>
                  </ion-button>
                </ion-card-content>

              </ion-card></ion-col>
            <ion-col size="12" size-md="6" size-lg="4" size-xl="3">
              <ion-card>
                <ion-card-header>
                  <ion-card-title>
                    Coach Carter
                  </ion-card-title>
              
                </ion-card-header>
                <ion-card-content>

                  <iframe class="player" src="https://www.youtube.com/embed/wiSGREoY6Zk?si=jkhj3P74GeY3L0dh"
                          title="YouTube video player" frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen></iframe>

                  <ion-chip>
                    <ion-icon name="calendar-outline"></ion-icon>
                    <ion-label>2005</ion-label>
                  </ion-chip>
                  <ion-chip>
                    <ion-icon name="time-outline"></ion-icon>
                    <ion-label>136 min</ion-label>
                  </ion-chip>
                  <ion-chip>
                    <ion-icon name="videocam-outline"></ion-icon>
                    <ion-label>Sport/Drama</ion-label>
                  </ion-chip>
                  <p *ngIf="!showMore11" style="padding-top: 10px"><strong>Coach Carter</strong> ist ein inspirierendes
                    Sportdrama, das auf einer wahren Geschichte basiert.
                    Samuel L. Jackson verkörpert den charismatischen Coach Ken Carter, der das Basketballteam einer High
                    School übernimmt. Angetrieben von seinem Prinzip, dass akademischer Erfolg ...</p>
                  <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore11 = true"
                              *ngIf="!showMore11">weiterlesen
                    <ion-icon slot="end" color="light" name="chevron-forward-outline"></ion-icon>
                  </ion-button>
                  <p *ngIf="showMore11" style="padding-top: 10px"><strong>Coach Carter</strong> ist ein inspirierendes
                    Sportdrama, das auf einer wahren Geschichte basiert.
                    Samuel L. Jackson verkörpert den charismatischen Coach Ken Carter, der das Basketballteam einer High
                    School übernimmt. Angetrieben von seinem Prinzip, dass akademischer Erfolg genauso wichtig ist wie
                    sportlicher Ruhm, setzt Carter strenge Regeln. Der Film dokumentiert den steinigen Weg des Teams zu
                    sportlichem Erfolg und persönlichem Wachstum. Coach Carter fordert nicht nur sportliche Höchstleistungen,
                    sondern auch Disziplin und Bildung, und vermittelt eine lebensverändernde Botschaft über Selbstachtung und
                    die Macht der Bildung.</p>
                  <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore11 = false"
                              *ngIf="showMore11">weniger
                    <ion-icon slot="start" color="light" name="chevron-back-outline"></ion-icon>
                  </ion-button>
                </ion-card-content>

              </ion-card></ion-col>
            <ion-col size="12" size-md="6" size-lg="4" size-xl="3"><ion-card>
              <ion-card-header>
                <ion-card-title>
                  Spiel auf Bewährung
                </ion-card-title>
             
              </ion-card-header>
              <ion-card-content>

                <iframe class="player" src="https://www.youtube.com/embed/Mliu9nGo30U?si=fTHUvuR7GWRWgZk3"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>

                <ion-chip>
                  <ion-icon name="calendar-outline"></ion-icon>
                  <ion-label>2006</ion-label>
                </ion-chip>
                <ion-chip>
                  <ion-icon name="time-outline"></ion-icon>
                  <ion-label>125 min</ion-label>
                </ion-chip>
                <ion-chip>
                  <ion-icon name="videocam-outline"></ion-icon>
                  <ion-label>Sport/Action</ion-label>
                </ion-chip>
                <p *ngIf="!showMore12" style="padding-top: 10px"><strong>Spiel auf Bewährung</strong> ist eine mitreißende
                  Sportkomödie, die den Weg eines Jugendlichen
                  namens Billy Wyatt, gespielt von Emilio Estevez, im Jugendstrafvollzug verfolgt. Um der Haft zu entkommen,
                  wird Billy die Chance geboten, das Schulsoccer-Team zu trainieren. Unter ...</p>

                <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore12 = true"
                            *ngIf="!showMore12">weiterlesen
                  <ion-icon slot="end" color="light" name="chevron-forward-outline"></ion-icon>
                </ion-button>
                <p *ngIf="showMore12" style="padding-top: 10px"><strong>Spiel auf Bewährung</strong> ist eine mitreißende
                  Sportkomödie, die den Weg eines Jugendlichen
                  namens Billy Wyatt, gespielt von Emilio Estevez, im Jugendstrafvollzug verfolgt. Um der Haft zu entkommen,
                  wird Billy die Chance geboten, das Schulsoccer-Team zu trainieren. Unter seiner Führung finden die
                  Jugendlichen nicht nur ihre Leidenschaft für den Sport, sondern lernen auch wichtige Lebenslektionen über
                  Teamarbeit, Freundschaft und persönliche Verantwortung. Der Film verbindet Herz und Humor, während er eine
                  inspirierende Geschichte über die transformative Kraft des Sports erzählt.</p>
                <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore12 = false"
                            *ngIf="showMore12">weniger
                  <ion-icon slot="start" color="light" name="chevron-back-outline"></ion-icon>
                </ion-button>
              </ion-card-content>

            </ion-card>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="12" size-md="6" size-lg="4" size-xl="3">    <ion-card>
              <ion-card-header>
                <ion-card-title>
                  The Blindside - Die Große Chance
                </ion-card-title>
                
              </ion-card-header>
              <ion-card-content>

                <iframe class="player" src="https://www.youtube.com/embed/jIUp1sWYCV8?si=B6oKqH_u-kMuUISh"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>

                <ion-chip>
                  <ion-icon name="calendar-outline"></ion-icon>
                  <ion-label>2009</ion-label>
                </ion-chip>
                <ion-chip>
                  <ion-icon name="time-outline"></ion-icon>
                  <ion-label>129 min</ion-label>
                </ion-chip>
                <ion-chip>
                  <ion-icon name="videocam-outline"></ion-icon>
                  <ion-label>Sport/Drama</ion-label>
                </ion-chip>
                <p *ngIf="!showMore13"> style="padding-top: 10px"<strong>The Blind Side</strong> ist eine ergreifende
                  Filmbiografie, die auf der wahren Geschichte von
                  Michael Oher basiert. Sandra Bullock spielt Leigh Anne Tuohy, die Oher, einen obdachlosen Teenager mit
                  außergewöhnlichem Football-Talent, in ihre Familie aufnimmt. Der Film ...</p>
                <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore13 = true"
                            *ngIf="!showMore13">weiterlesen
                  <ion-icon slot="end" color="light" name="chevron-forward-outline"></ion-icon>
                </ion-button>
                <p *ngIf="showMore13"> style="padding-top: 10px"<strong>The Blind Side</strong> ist eine ergreifende
                  Filmbiografie, die auf der wahren Geschichte von
                  Michael Oher basiert. Sandra Bullock spielt Leigh Anne Tuohy, die Oher, einen obdachlosen Teenager mit
                  außergewöhnlichem Football-Talent, in ihre Familie aufnimmt. Der Film verfolgt nicht nur Michaels Reise zu
                  einem herausragenden Footballspieler, sondern betont auch die Bedeutung von Liebe, Fürsorge und
                  Chancengleichheit. Mit einer kraftvollen Botschaft über Mitmenschlichkeit und das Potenzial, das in jedem
                  von uns steckt, berührt <strong>The Blind Side</strong> die Herzen der Zuschauer und zeigt, wie eine
                  Familie das Leben eines jungen Mannes verändern kann.</p>
                <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore13 = false"
                            *ngIf="showMore13">weniger
                  <ion-icon slot="start" color="light" name="chevron-back-outline"></ion-icon>
                </ion-button>
              </ion-card-content>

            </ion-card></ion-col>
            <ion-col size="12" size-md="6" size-lg="4" size-xl="3"> <ion-card>
              <ion-card-header>
                <ion-card-title>
                  Die Kunst zu gewinnen - Moneyball
                </ion-card-title>
                
              </ion-card-header>
              <ion-card-content>

                <iframe class="player" src="https://www.youtube.com/embed/vWX6SPmqWUE?si=AxYQC2kbFk4A9b27"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>

                <ion-chip>
                  <ion-icon name="calendar-outline"></ion-icon>
                  <ion-label>2011</ion-label>
                </ion-chip>
                <ion-chip>
                  <ion-icon name="time-outline"></ion-icon>
                  <ion-label>126 min</ion-label>
                </ion-chip>
                <ion-chip>
                  <ion-icon name="videocam-outline"></ion-icon>
                  <ion-label>Sport/Komödie</ion-label>
                </ion-chip>
                <p *ngIf="!showMore14" style="padding-top: 10px"><strong>Moneyball</strong> ist ein fesselndes Sportdrama,
                  basierend auf der wahren Geschichte des Oakland
                  Athletics Baseball-Teams und ihrem innovativen General Manager Billy Beane, gespielt von Brad Pitt. Der
                  Film zeigt Beanes revolutionären Ansatz, Spieler zu rekrutieren und ...</p>
                <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore14 = true"
                            *ngIf="!showMore14">weiterlesen
                  <ion-icon slot="end" color="light" name="chevron-forward-outline"></ion-icon>
                </ion-button>
                <p *ngIf="showMore14" style="padding-top: 10px"><strong>Moneyball</strong> ist ein fesselndes Sportdrama,
                  basierend auf der wahren Geschichte des Oakland
                  Athletics Baseball-Teams und ihrem innovativen General Manager Billy Beane, gespielt von Brad Pitt. Der
                  Film zeigt Beanes revolutionären Ansatz, Spieler zu rekrutieren und Teams zusammenzustellen, indem er auf
                  fortschrittliche Statistiken und Analysen setzt. Durch diesen unkonventionellen Weg gelingt es dem
                  Underdog-Team, mit begrenzten Ressourcen erstaunliche Erfolge zu erzielen. <strong>Moneyball</strong>
                  beleuchtet nicht nur die Welt des Baseballs, sondern auch die Punkt der Daten und den Glauben an
                  innovative Ideen im Sport.</p>
                <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore14 = false"
                            *ngIf="showMore14">weniger
                  <ion-icon slot="start" color="light" name="chevron-back-outline"></ion-icon>
                </ion-button>
              </ion-card-content>

            </ion-card></ion-col>
            <ion-col size="12" size-md="6" size-lg="4" size-xl="3">  <ion-card>
              <ion-card-header>
                <ion-card-title>
                  Hustle
                </ion-card-title>
                
              </ion-card-header>
              <ion-card-content>

                <iframe class="player" src="https://www.youtube.com/embed/vbKyvzN9r18?si=AdHtMNzaoRpQUceY"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>

                <ion-chip>
                  <ion-icon name="calendar-outline"></ion-icon>
                  <ion-label>2022</ion-label>
                </ion-chip>
                <ion-chip>
                  <ion-icon name="time-outline"></ion-icon>
                  <ion-label>117 min</ion-label>
                </ion-chip>
                <ion-chip>
                  <ion-icon name="videocam-outline"></ion-icon>
                  <ion-label>Sport/Komödie</ion-label>
                </ion-chip>
                <p *ngIf="!showMore15" style="padding-top: 10px">In der Sportkomödie <strong>Hustle</strong> folgen wir dem
                  vom Pech verfolgten Basketball-Scout Stanley
                  Beren, gespielt von Adam Sandler, der glaubt, seine besten Tage im Sportgeschäft seien vorbei. Doch ein
                  seltener Glücksmoment tritt ein, als er ...</p>
                <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore15 = true"
                            *ngIf="!showMore15">weiterlesen
                  <ion-icon slot="end" color="light" name="chevron-forward-outline"></ion-icon>
                </ion-button>
                <p *ngIf="showMore15" style="padding-top: 10px">In der Sportkomödie <strong>Hustle</strong> folgen wir dem
                  vom Pech verfolgten Basketball-Scout Stanley
                  Beren, gespielt von Adam Sandler, der glaubt, seine besten Tage im Sportgeschäft seien vorbei. Doch ein
                  seltener Glücksmoment tritt ein, als er in Spanien den vielversprechenden Basketballspieler Bo Cruz,
                  dargestellt von Juancho Hernangomez, entdeckt. Ohne die notwendige Teamerlaubnis oder Rücksprache mit den
                  Verantwortlichen in den höheren Etagen nimmt er Cruz mit in die USA und lässt ihn aufs Spielfeld. Beren,
                  fest entschlossen, sein Gespür für Talente zu beweisen, kämpft gegen Hürden und Hindernisse an. Gemeinsam
                  mit seinem neuen Spieler setzt er alles daran, wieder in der NBA zu spielen und zeigt, dass es nie zu spät
                  ist, an seine Träume zu glauben.</p>
                <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore15 = false"
                            *ngIf="showMore15">weniger
                  <ion-icon slot="start" color="light" name="chevron-back-outline"></ion-icon>
                </ion-button>
              </ion-card-content>

            </ion-card></ion-col>
            <ion-col size="12" size-md="6" size-lg="4" size-xl="3">  <ion-card>
              <ion-card-header>
                <ion-card-title>
                  14 Gipfel - Nichts ist unmöglich
                </ion-card-title>
                
              </ion-card-header>
              <ion-card-content>

                <iframe class="player" src="https://www.youtube.com/embed/8QH5hBOoz08?si=pJW96lcMKEqjRR3p"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>

                <ion-chip>
                  <ion-icon name="calendar-outline"></ion-icon>
                  <ion-label>2021</ion-label>
                </ion-chip>
                <ion-chip>
                  <ion-icon name="time-outline"></ion-icon>
                  <ion-label>101 min</ion-label>
                </ion-chip>
                <ion-chip>
                  <ion-icon name="videocam-outline"></ion-icon>
                  <ion-label>Dokumentarfilm/Sport</ion-label>
                </ion-chip>
                <p *ngIf="!showMore16" style="padding-top: 10px">Im Dokumentarfilm <strong>14 Gipfel - Nichts ist
                  unmöglich</strong> begleitet der Filmemacher Torquil
                  Jones den herausragenden Bergsteiger Nims Purja und sein Team von Sherpas. Gemeinsam setzen sie sich das
                  ehrgeizige Ziel, alle 14 Achttausender der Welt in nur 7 Monaten zu besteigen. Diese atemberaubende
                  Leistung ...</p>
                <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore16 = true"
                            *ngIf="!showMore16">weiterlesen
                  <ion-icon slot="end" color="light" name="chevron-forward-outline"></ion-icon>
                </ion-button>
                <p *ngIf="showMore16" style="padding-top: 10px">Im Dokumentarfilm <strong>14 Gipfel - Nichts ist
                  unmöglich</strong> begleitet der Filmemacher Torquil
                  Jones den herausragenden Bergsteiger Nims Purja und sein Team von Sherpas. Gemeinsam setzen sie sich das
                  ehrgeizige Ziel, alle 14 Achttausender der Welt in nur 7 Monaten zu besteigen. Diese atemberaubende
                  Leistung stellt nicht nur einen persönlichen Triumph dar, sondern bricht auch den bisherigen Rekord, der
                  zuvor 7 Jahre betrug. Der Film taucht tief in die Herausforderungen, Opfer und den unermüdlichen Einsatz
                  ein, der erforderlich ist, um diese beispiellose Bergsteigerleistung zu vollbringen, und vermittelt dabei
                  fesselnde Einblicke in die Welt des Extrembergsteigens.</p>
                <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showMore16 = false"
                            *ngIf="showMore16">weniger
                  <ion-icon slot="start" color="light" name="chevron-back-outline"></ion-icon>
                </ion-button>
              </ion-card-content>

            </ion-card></ion-col>
          </ion-row>
        </ion-grid>




















      </ion-content>







  `,

})

export class MotivationComponent {

  showMusic: boolean = false;
  showMovies: boolean = false;
  showMore1: boolean = false;
  showMore2: boolean = false;
  showMore3: boolean = false;
  showMore4: boolean = false;
  showMore5: boolean = false;
  showMore6: boolean = false;
  showMore7: boolean = false;
  showMore8: boolean = false;
  showMore9: boolean = false;
  showMore10: boolean = false;
  showMore11: boolean = false;
  showMore12: boolean = false;
  showMore13: boolean = false;
  showMore14: boolean = false;
  showMore15: boolean = false;
  showMore16: boolean = false;


}
