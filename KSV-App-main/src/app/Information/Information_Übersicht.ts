import {Component} from '@angular/core';

interface ImageItem {
  url: string;
  alt: string;
  name: string;
}

@Component({
  selector: 'app-page-maschinenübersicht',
  styleUrls: ['tab3.page.scss'],
  template: `



    <ion-content>
      <h3 style="padding: 2vh 2vh; font-weight: bold">Allgemein</h3>

      <div class="button-bar">
        <ion-button
          shape="round"
          *ngFor="let seg of segments; let i = index" (click)="selectSegmentAll(i)" size="small"
          [ngClass]="{'active': seg.selected, 'inactive': !seg.selected}">
          <ion-icon [name]="seg.icon" slot="start"></ion-icon> <!-- Hier das Icon -->
          {{ seg.title }}
        </ion-button>
      </div>

      <div id="largeImageContainer" class="large-image-container" *ngIf="showLarge" (click)="hideLargeImage()">
        <img id="largeImage" [src]="currentImageSrc" class="large-image">
      </div>


      <ion-card>

        <div [ngSwitch]="statusAll">
          <div *ngSwitchCase="'Öffnungszeiten'">
            <ion-card-content>
              <ion-list>
                <ion-item>
                  <ion-badge slot="start">Mo-Fr</ion-badge>
                  <ion-label>08.00 – 21.00 Uhr</ion-label>
                </ion-item>

                <ion-item>
                  <ion-badge slot="start">Di</ion-badge>
                  <ion-label>09.00 – 21.00 Uhr</ion-label>
                </ion-item>

                <ion-item>
                  <ion-badge slot="start">Sa</ion-badge>
                  <ion-label>08.00 – 18.00 Uhr</ion-label>
                </ion-item>
                <ion-item lines="none">
                  <ion-badge slot="start">So</ion-badge>
                  <ion-label>08.00 – 13.00 Uhr</ion-label>
                </ion-item>
              </ion-list>
            </ion-card-content>
          </div>

          <div *ngSwitchCase="'Impressum'">
            <ion-card-content>


              <p>Angaben gemäß § 5 TMG:</p>

              <address>
                KSV Gausbach e.V., Marvin Wunsch<br>
                Reitbuckelstraße 9<br>
                76596
              </address>
              <br>
              <p>Vertreten durch:</p>

              <address>
                Marvin Wunsch (1.Vorstand)<br>
                David Sänger (2.Vorstand)
              </address>
              <br>
              <p>Kontakt:</p>

              <address>
                E-Mail: <a href="mailto:ksv-gausbach@web.de">ksv-gausbach@web.de</a>
              </address>
              <br>
              <p>Registereintrag:</p>

              <address>
                Eintragung im Vereinsregister.<br>
                Registergericht: Amtsgericht Gernsbach<br>
                Registernummer: VR 261
              </address>

            </ion-card-content>
          </div>

          <div *ngSwitchCase="'Kontakt'">
            <ion-card-content>
              <address>
                E-Mail: <a href="mailto:ksv-gausbach@web.de">ksv-gausbach@web.de</a>
              </address>
            </ion-card-content>
          </div>


          <div *ngSwitchCase="'Lage'">
            <ion-card-content>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2634.0597269793393!2d8.361905076864366!3d48.68522271287676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47973cc284e78b89%3A0xb9b2e1eea7389e31!2sKSV%20Gausbach%20e.V.!5e0!3m2!1sde!2sde!4v1701342393982!5m2!1sde!2sde"
                width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>

              <address>
                <br>
                KSV Gausbach e.V.<br>
                Reitbuckelstraße 9<br>
                76596 <br>
                Gausbach
              </address>
            </ion-card-content>

          </div>

          <div *ngSwitchCase="'Vereinssatzung'">
            <div *ngIf="!showFullSatzung" style="letter-spacing: 1px">
            <ion-card-content>
            <div class=""><h2 class="text-align-center"><strong>Verein zur Ausübung des Kraftsportes in Forbach /
              Gausbach Satzung</strong></h2>
              <p class="text-align-center"><br></p>
              <h3>&nbsp;<strong>§ 1 Name und Sitz</strong></h3>
              <p><br></p>
              <p>(1) Der Verein führt den Namen "Kraftsportverein Gausbach". Er ist im Vereinsregister beim Amtsgericht
                Gernsbach einzutragen. Nach der Eintragung führt er den Zusatz e.V. Er hat seinen Sitz in Gausbach,
                einem Teilort der Gemeinde Forbach</p>
              <p><br></p>
              <p>(2) Geschäftsjahr ist das Kalenderjahr<br><br></p>
              <p><br><br></p>
              <h3><strong>§ 2 Zweck des Vereins</strong>&nbsp;</h3>
              <p><br>(1) Der Verein verfolgt ausschließlich ...</p>
            </div>

              <ion-button style="padding-top: 25px" size="small" shape="round" color="dark"
                          (click)="showFullSatzung = true" *ngIf="!showFullSatzung">Weiterlesen
                <ion-icon slot="end" color="light" name="arrow-forward-outline"></ion-icon>
              </ion-button>
            </ion-card-content>
            </div>






              <div *ngIf="showFullSatzung">
                  <ion-card-content>
                    <div class=""><h2 class="text-align-center"><strong>Verein zur Ausübung des Kraftsportes in Forbach /
                      Gausbach Satzung</strong></h2>
                      <p class="text-align-center"><br></p>
                      <h3>&nbsp;<strong>§ 1 Name und Sitz</strong></h3>
                      <p><br></p>
                      <p>(1) Der Verein führt den Namen "Kraftsportverein Gausbach". Er ist im Vereinsregister beim Amtsgericht
                        Gernsbach einzutragen. Nach der Eintragung führt er den Zusatz e.V. Er hat seinen Sitz in Gausbach,
                        einem Teilort der Gemeinde Forbach</p>
                      <p><br></p>
                      <p>(2) Geschäftsjahr ist das Kalenderjahr<br><br></p>
                      <p><br><br></p>
                      <h3><strong>§ 2 Zweck des Vereins</strong>&nbsp;</h3>
                      <p><br>(1) Der Verein verfolgt ausschließlich und unmittelbar gemeinnützige Zwecke im Sinne des Abschnitts
                "Steuerbegünstigte Zwecke" der Abgabenordnung (§§&nbsp; 51 ff AO) mit dem Ziel, den Kraftsport seinen
                Mitglieder über Trainieren mit Gewichten zu ermöglichen und dabei auch verstärkt im Jugendbereich tätig
                zu sein.<br><br>(2) Er ist ein Verein im Sinne von § 52 Abs. 1AO, der seine Mittel ausschließlich zur
                Förderung des in § 2 Abs.1 der Satzung genannten steuerbegünstigten Zwecke verwendet.&nbsp;<br><br>(3)
                Der Verein enthält sich jeglicher konfessioneller, rassischer und politischer Tätigkeit.<br><br>(4) Der
                Verein ist selbstlos tätig, er verfolgt nicht in erster Linie eigenwirtschaftliche Zwecke.<br><br>(5)
                Mitglieder des Vereins erhalten keine Gewinnanteile und in ihrer Eigenschaft als Mitglieder auch keine
                sonstige Zuwendungen aus Mittel des Vereins. Sie erhalten bei ihrem Ausscheiden oder Auflösung des
                Vereins für ihre Mitgliedschaft keinerlei Entschädigung.<br><br>Mittel des Vereins dürfen nur für die
                satzungsmäßigen Zwecke verwendet werden. Die Mitglieder erhalten keine Zuwendungen aus den Mittel des
                Vereins.<br><br>Es darf keine Person durch Ausgaben, die dem Zweck des Vereins fremd sind, oder durch
                unverhältnismäßig hohe Vergütung begünstigt werden.<br><br>(6) Die Vereinsämter sind Ehrenämter.<br><br><br><br>
              </p>
              <h3><strong>§3 Mitgliedschaft</strong></h3>
              <p><br>(1) Mitglied des Vereins kann jede natürliche oder juristische Person werden, die sich zu dem Zweck
                und den Zielen des Vereins bekennt. Das Mindestalter wird hier auf 16 Jahre festgelegt und dabei ist die
                Zustimmung des Erziehungsberechtigten erforderlich.<br><br>(2) Der Antrag, Mitglied des Vereins zu
                werden, ist dem Vorstand schriftlich einzureichen. Über die Aufnahme entscheidet der Vorstand ohne
                Angaben zu Gründen. Gegen die Ablehnung steht dem Antragsteller die begründete schriftlich Berufung an
                die Mitgliedsversammlung zu, die mit 3/4 Mehrheit endgültig entscheidet.<br><br>(3) Einer
                Mitgliedsschaft voraus geht eine 1 monatige Probezeit, nach deren Ablauf die Vorstandschaft, ohne
                Angaben von Gründen, die Mitgliedschaft verweigern kann.<br><br><br><br></p>
              <h3><strong>§ 4 Mitgliedsbeiträge</strong></h3>
              <p><br>(1) Die Mitgliederversammlung beschließt auf Vorschlag des Vorstandes die Höhe des Beitrages (
                aktuell 24€ jährlich).<br><br>(2) Jedes Mitglied ist grundsätzlich zur Beitragszahlung verpflichtet. In
                besonderen Fällen kann der Vorstand Beiträge stunden, ermäßigen oder erlassen. Der Beitrag ist im 1.
                Quartal zu entrichten.<br><br><br><br></p>
              <h3><strong>§ 5 Ende der Mitgliedschaft</strong>&nbsp;</h3>
              <p><br>(1) Die Mitgliedschaft endet durch den Tod, freiwilligen Austritt oder Ausschuss.&nbsp;<br><br>(2)
                Der Austritt kann nur zum Ende des Kalenderjahres bis spätestens zum 31.10 eines jeden Jahres erklärt
                werden; die Erklärung ist schriftlich an den Vorstand abzugeben.<br><br>(3) Der Ausschuss eines
                Mitgliedes kann jederzeit Zeit mit sofortiger Wirkung erfolgen, wenn es seinen Verpflichtungen dem
                Verein gegenüber nicht nachkommt oder den Interessen des Vereins grob oder wiederholt zuwiderhandelt
                oder 3 Monate mit der Entrichtung des Vereinsbeitrages in Verzug ist und 4 Wochen nach erfolgter
                schriftlicher Mahnung diese Rückstände nicht bezahlt sind.<br><br>(4) Ausscheidende oder ausgeschlossene
                Mitglieder verlieren mit dem Tag ihres Ausscheidens oder Ausschlusses jeden Anspruch auf das Vermögen
                des Vereins. Eingezahlte Beiträge werden nicht zurückgezahlt.<br><br><br><br></p>
              <h3><strong>§ 6 Organe</strong>&nbsp;</h3>
              <p><br>(1) Die Organe des Vereines sin a) der Vorstand, b) die Mitgliederversammlung.<br><br>(2) Über alle
                von den Organen des Vereines abgehaltenen Sitzungen und gefassten Beschlüsse sind Protokolle
                anzufertigen . Diese sind einem Vorstandsmitglied zur Genehmigung vorzulegen und vom Protokollführer zu
                unterzeichnen.<br><br><br><br></p>
              <h3><strong>§ 7 Vorstand</strong></h3>
              <p><br>(1) Der Vorstand des Vereines besteht aus a) dem 1. Vorsitzenden, b) dem 2. Vorsitzenden
                (Stellvertreter), dem Kassier und bis zu 3 Beisitzern.&nbsp;<br><br>(2) Der 1. Vorsitzende und der 2.
                Vorsitzende, je einzeln, vertreten den Verein im Sinne des § 26 BGB gerichtlich und außergerichtlich.&nbsp;<br><br>(3)
                Die Vorstandsmitglieder werden durch die ordentliche Mitgliederversammlung bei gleicher
                Stimmberechtigung aller Mitglieder auf die Dauer von 2 Geschäftsjahren gewählt. Bis zur Neuwahl bleibt
                der alte Vorstand im Amt. Wiederwahl ist zulässig.<br><br>(4) Der Vorstand ist vom 1. Vorsitzenden, bei
                dessen Abwesenheit vom 2. Vorsitzenden, Unter Angabe der Tagesordnung einzuberufen. Es entscheidet
                Stimmenmehrheit, bei Stimmengleichheit gibt die Stimme des 1. Vorsitzenden den Ausschlag. Im Übrigen
                gibt sich der Vorstand eine Geschäftsordnung.<br><br><br><br></p>
              <h3><strong>§ 8 Mitgliederversammlung</strong>&nbsp;</h3>
              <p><br>(1) Die Mitgliederversammlung ist insbesondere für folgende Angelegenheiten&nbsp;
                zuständig:<br><br></p>
              <ul>
                <li>Entgegennahme der Jahresberichte des Vorstandes sowie dessen Entlastung.</li>
                <li>Festsetzung der Mitgliedsbeiträge.</li>
                <li>Wahl der Mitglieder des Vorstandes und der Beisitzer.</li>
                <li>Beschlussfassung über Satzungsänderungen sowie über die Auflösung des Vereines.</li>
                <li>Wahl des Kassenprüfer.</li>
              </ul>
              <p><br>(2) Die ordentliche Mitgliederversammlung wird alle 2 Jahre im 1. Vierteljahr des Kalenderjahres
                abgehalten.</p>
              <p><br>(3) Die außerordentliche Mitgliederversammlung kann vom Vorstand einberufen werden, wenn es ihm
                durch dringende Umstände notwendig erscheint. Die Einberufung hat auch zu erfolgen, wenn diese von
                mindesten 20% der stimmberechtigten Mitglieder unter Angabe des Zweckes und der Gründe schriftlich
                verlangt wird.<br><br>(4) Zu den Mitgliederversammlungen sind die Mitglieder spätestens 2 Wochen vor dem
                Sitzungstermin unter Mitteilung der Tagesordnung vom Vorstand schriftlich unter der zuletzten bekannten
                Adresse, per Email, Zeitung oder Tagesanzeiger einzuladen.<br><br>(5) Jedes Mitglied hat 1 Stimme. Die
                Mitgliederversammlung beschließt mit einfacher Mehrheit der anwesenden Mitglieder. Stimmengleichheit
                bedeutet Ablehnung. Stimmenenthaltungen gelten als ungültige Stimmen.<br><br>(6) Eine Satzungsänderung
                bedarf einer 3/4 - Mehrheit der anwesenden stimmenberechtigten Mitglieder.<br><br>(7) Satzungsänderungen
                und Wahlen können nur vorgenommen werden, wenn diese bereits in der Einladung zur Mitgliederversammlung
                in die Tagesordnung aufgenommen wurden.<br><br>(8) Anträge der Mitglieder müssen mindestens 8 Tage vor
                der Mitgliederversammlung schriftlich beim Vorstand eingereicht werden. Während der Versammlung
                eingereichte Dringlichkeitsanträge werden nur behandelt, wenn mindesten 3/4 der anwesenden
                stimmberechtigten Mitglieder die Dringlichkeiten anerkennen.<br><br>(9) Schriftliche Abstimmung muss
                durch Stimmzettel erfolgen, wenn mindestens 20% der anwesenden stimmberechtigten Mitglieder die
                schriftliche Abstimmung wünschen. Im Übrigem erfolgen Beschlussfassungen und Wahlen offen.<br><br>(10)
                Mitglieder, die in der Mitgliederversammlung nicht anwesend sind, können gewählt werden, wenn ihre
                schriftliche Zustimmung erfolgt.<br><br><br><br></p>
              <h3><strong>§ 9 Kassenprüfer</strong></h3>
              <p><br>(1) Die Mitgliederversammlung wählt im Anschluss an die Wahl des Vorstandes einen Kassenprüfer. Der
                Kassenprüfer darf nicht zugleich Mitglied des Vorstandes sein.<br><br>(2) Der Kassenprüfer prüft die
                Ordnungsmäßigkeit der Kassenführung. Einer Kassenprüfung ist Voraussetzung für die Entlastung des
                Vorstandes. Die Kassenunterladen müssen ihm 14 Tage vor der Mitgliederversammlung zur Schlussprüfung zur
                Verfügung stehen. Der Prüfer ist berechtigt, vom Vorstand jede notwendig erscheinende Aufklärung zu
                verlangen und jedwede Unterlagen einzusehen.<br><br>(3) Der Mitgliederversammlung ist ein schriftlicher
                Prüfungsbericht vorzulegen, der vom Kassenprüfer unterschrieben sein muss.&nbsp;<br><br><br><br></p>
              <h3><strong>§10 Auflösung des Vereins</strong></h3>
              <p><br>(1) Der Antrag auf Auflösung des Vereins kann vom Vorstand oder mehr als der Hälfte aller
                Mitglieder gestellt werden. In diesem Fall hat der Vorstand unverzüglich eine außerordentliche
                Mitgliederversammlung unter Mitteilung des Antrages einzuberufen.<br><br>(2)Die Auflösung des Vereins
                bedarf der Zustimmung von 3/4 sämtlicher Mitglieder.&nbsp;<br>Ist in der zu diesem Zweck einberufenen
                Mitgliederversammlung diese Stimmenzahl nicht vertreten, so muss innerhalb von 4 Wochen eine zweite
                Mitgliedsversammlung einberufen werden, die mit 3/4 - Mehrheit der dann anwesenden Mitglieder über die
                Auflösung beschlussfähig ist.<br><br>(3) Sofern die Mitgliederversammlung nichts anderes beschließt,
                sind die gesetzlich vertretenden Vorstände gemäß § 26 BGB, alleine vertretungsberechtigte
                Liquidatoren.<br><br>(4) Bei Auflösung des Vereines fällt das verbleibende Vermögen dem Sozialwerk der
                Gemeinde Forbach zu, die es unmittelbar und ausschließlich für gemeinnützige Zwecke zu verwenden hat.
                Besteht das Sozialwerk Forbach zu diesem Zeitpunkt nicht mehr, kann der Verein das Vermögen an andere
                steuerbegünstigte Einrichtungen steuerbegünstigter Zwecke überweisen.<br><br></p>
              <p class="text-align-center">&nbsp;</p>
              <p class="text-align-center"><br></p>
                    </div>

              <ion-button style="padding-top: 25px" size="small" shape="round" color="dark"
                          (click)="showFullSatzung = false" *ngIf="showFullSatzung">
                <ion-icon slot="start" color="light" name="arrow-back-outline"></ion-icon>
                zurück zur Übersicht
              </ion-button>


            </ion-card-content>
            </div>


            </div>
          </div>
      </ion-card>


      <h3 style="padding: 2vh 2vh; font-weight: bold">Mitgliedschaft</h3>

      <div class="button-bar">
        <ion-button
          shape="round"
          *ngFor="let seg2 of segments2; let i = index" (click)="selectSegmentMitgl(i)" size="small"
          [ngClass]="{'active': seg2.selected, 'inactive': !seg2.selected}">
          <ion-icon [name]="seg2.icon" slot="start"></ion-icon> <!-- Hier das Icon -->
          {{ seg2.title }}
        </ion-button>
      </div>


      <ion-card>

        <div [ngSwitch]="statusMitgl">
          <div *ngSwitchCase="'Mitglied werden'">
            <ion-card-content>
              <h2 style="font-weight:bold; color: white">Mitgliedschaft im KSV Gausbach e.V.</h2>
              <br>
              <h3 style="color: white; margin-top: 15px; margin-bottom: 10px">Voraussetzungen:</h3>
              <p>Um Mitglied im KSV Gausbach e.V. zu werden, solltest du folgende Kriterien erfüllen:</p>

              <ul style="font-size: 12px">
                <li>Du wohnst in Forbach oder einem der Ortsteile</li>
                <li>Du bist mindestens 16 Jahre alt (mit Erlaubnis eines Erziehungsberechtigten) oder 18 Jahre alt</li>
                <li>Du hast ein ärztliches Attest (Sporttauglichkeitsbescheinigung) – das wird empfohlen</li>
              </ul>

              <h3 style="color: white; margin-top: 15px; margin-bottom: 10px">Mitgliedsbeitrag:</h3>
              <p><strong style="color: rgb(255, 0, 0); font-size: 16px">Die Mitgliedschaft kostet 48€ pro Jahr.</strong></p>

              <h3 style="color: white; margin-top: 15px; margin-bottom: 10px">Wie es weitergeht:</h3>
              <p>Hast du Interesse? Melde dich einfach unter <a href="mailto:ksv-gausbach@web.de">ksv-gausbach@web.de</a> bei uns. Dort vereinbarst du ein Probetraining und erhältst eine Einführung an den Geräten sowie alle notwendigen Informationen zur Beitrittserklärung.</p>

            </ion-card-content>
          </div>

          <div *ngSwitchCase="'Trainingseinstieg'">
            <ion-card-content>

              <h2 style="font-weight:bold; color: white">Dein erstes Training...</h2>
              <br>
              <p>... kannst du per Mail mit uns zu einer individuellen Zeit vereinbaren. Dabei bekommst du eine
                Erstunterweisung an den Geräten und für das Training mit Gewichten im Allgemeinen. Zusätzlich wird dir
                die Beitrittserklärung übergeben und die Raum- bzw. Trainingsregelungen erklärt.</p>

              <p>Wir haben dein Interesse geweckt? Dann melde dich einfach unter folgender E-Mail bei uns: <a
                href="mailto:ksv-gausbach@web.de">ksv-gausbach@web.de</a>.</p>


            </ion-card-content>
          </div>

          <div *ngSwitchCase="'Raumordnung'">
            <ion-card-content>

              <h2 style="font-weight:bold; color: white">Raumordnung</h2>

              <ol style="font-size: 12px">
                <li>Der Trainingsraum darf nur von Mitgliedern mit einem gültigen Mitgliedsausweis betreten und benutzt
                  werden. Ausnahme für zukünftige Neumitglieder, die an einem Probetraining teilnehmen.
                </li>
                <li>Der Trainingsraum darf nur mit sauberen Sportschuhen, die im Vorraum anzuziehen sind, oder sockig betreten werden.
                </li>
                <li>Um ein Mindestmaß an Hygiene zu gewährleisten, ist bei den Übungen ein Handtuch unterzulegen.</li>
                <li>Die im Kraftraum ausgelegten Zeitschriften und Bücher sind Vereinseigentum und dürfen nicht
                  entwendet werden.
                </li>
                <li>Alle Geräte, Hanteln usw. sind nach Gebrauch wieder aufzuräumen, und alle Hantelscheiben sind nach
                  dem Training wieder von der Langhantel abzunehmen.
                </li>
                <li>Hantelscheiben und Hanteln dürfen nicht auf den Bänken abgelegt werden.</li>
                <li>Die Stereoanlage ist auf Zimmerlautstärke einzustellen.</li>
                <li>Der letzte Trainierende, der den Raum verlässt, hat das Licht und die Stereoanlage abzuschalten,
                  sowie alle Fenster und Türen zu schließen.
                </li>
                <li>Die Heizung ist auf ein Minimum herunterzudrehen.</li>
                <li>Der Trainingsraum ist unter der Woche spätestens um 22 Uhr, Samstags um 18 Uhr und Sonntags um 12
                  Uhr zu verlassen (der Strom wird automatisch abgeschaltet).
                </li>
              </ol>
            </ion-card-content>
          </div>


        </div>

      </ion-card>


      <h3 style="padding: 2vh 2vh; font-weight: bold">Vorstandschaft</h3>

      <div class="button-bar">
        <ion-button
          shape="round"
          *ngFor="let seg3 of segments3; let i = index" (click)="selectSegmentVorst(i)" size="small"
          [ngClass]="{'active': seg3.selected, 'inactive': !seg3.selected}">
          <ion-icon [name]="seg3.icon" slot="start"></ion-icon> <!-- Hier das Icon -->
          {{ seg3.title }}
        </ion-button>
      </div>


      <ion-card>
        <div [ngSwitch]="statusVorst">
          <div *ngSwitchCase="'Vorstand'">
            <ion-card-content>

              <ion-grid>
                <ion-row>
                  <ion-col size="6" class="image-container" *ngFor="let item of imagesVorstand">
                    <img [src]="item.url" [alt]="item.alt" class="clickable-image" (click)="showLargeImage(item)">
                    <div class="image-caption">{{ item.name }}</div>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-card-content>
          </div>

          <div *ngSwitchCase="'Kassier'">
            <ion-card-content>

              <ion-grid>
                <ion-row>
                  <ion-col size="12" *ngFor="let item of imagesKassierer" class="image-container">
                    <img [src]="item.url" [alt]="item.alt" class="clickable-image-e" (click)="showLargeImage(item)">
                    <div class="image-caption">{{ item.name }}</div>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-card-content>
          </div>


          <div *ngSwitchCase="'Schriftführer'">
            <ion-card-content>

              <ion-grid>
                <ion-row>
                  <ion-col size="12" *ngFor="let item of imagesSchriftfuehrer" class="image-container">
                    <img [src]="item.url" [alt]="item.alt" class="clickable-image-e" (click)="showLargeImage(item)">
                    <div class="image-caption">{{ item.name }}</div>
                  </ion-col>
                </ion-row>
              </ion-grid>

            </ion-card-content>
          </div>

          <div *ngSwitchCase="'Beisitzer'">
            <ion-card-content>

              <ion-grid>
                <ion-row>
                  <ion-col size="6" *ngFor="let item of imagesBeisitzer" class="image-container">
                    <img [src]="item.url" [alt]="item.alt" class="clickable-image" (click)="showLargeImage(item)">
                    <div class="image-caption">{{ item.name }}</div>
                  </ion-col>
                </ion-row>
              </ion-grid>

            </ion-card-content>
          </div>
        </div>
      </ion-card>




    </ion-content>

  `,
})
export class Information_Bericht {

  statusAll: string = "Öffnungszeiten";
  statusMitgl: string = "mitlgiedwerden";
  statusVorst: string = "Vorstand";
  indexAll: string = "Öffnungszeiten";
  indexMitgl: string = "mitgliedwerden";
  indexVorst: string = "Vorstand";
  segments: any[] = [];
  segments2: any[] = [];
  segments3: any[] = [];
  title: string = 'Öffnungszeiten';
  private index: any;
  showFullSatzung: boolean = false;

  constructor() {


    this.segments = [
      {
        title: 'Öffnungszeiten',
        icon: 'time', // Hier das Icon für "Öffnungszeiten"
        selected: false,
      },
      {
        title: 'Kontakt',
        icon: 'call', // Hier das Icon für "Kontakt"
        selected: false,
      },
      {
        title: 'Impressum',
        icon: 'document', // Hier das Icon für "Impressum"
        selected: false,
      },
      {
        title: 'Lage',
        icon: 'location', // Hier das Icon für "Lage"
        selected: false,
      },
      {
        title: 'Vereinssatzung',
        icon: 'receipt', // Hier das Icon für "Vereinssatzung"
        selected: false,
      },
    ].map((val) => ({
      ...val,
    }));

    this.segments2 = [
      {
        title: 'Mitglied werden',
        icon: 'person', // Hier das Icon für "Mitglied werden"
        selected: false,
      },
      {
        title: 'Trainingseinstieg',
        icon: 'fitness', // Hier das Icon für "Trainingseinstieg"
        selected: false,
      },
      {
        title: 'Raumordnung',
        icon: 'map', // Hier das Icon für "Raumordnung"
        selected: false,
      },
    ].map((val) => ({
      ...val,
    }));

    this.segments3 = [
      {
        title: 'Vorstand',
        icon: 'people', // Hier das Icon für "Vorstand"
        selected: false,
      },
      {
        title: 'Kassier',
        icon: 'wallet', // Hier das Icon für "Kassier"
        selected: false,
      },
      {
        title: 'Schriftführer',
        icon: 'book', // Hier das Icon für "Schriftführer"
        selected: false,
      },
      {
        title: 'Beisitzer',
        icon: 'person-add', // Hier das Icon für "Beisitzer"
        selected: false,
      },
    ].map((val) => ({
      ...val,
    }));
  }

  showLarge = false;
  currentImageSrc: string = '';
  imagesVorstand: ImageItem[] = [
    { url: '../assets/img/Vorstandschaft/Marvin.webp', alt: 'Bild von Marvin', name:"Marvin Wunsch" },
    { url: '../assets/img/Vorstandschaft/David.webp', alt: 'Bild von David', name: "David Sänger" }
  ];
  imagesKassierer: ImageItem[] = [
    { url: '../assets/img/Vorstandschaft/Sonja.webp', alt: 'Bild von Sonja', name:"Sonja Fritz" },
  ];
  imagesSchriftfuehrer: ImageItem[] = [
    { url: '../assets/img/Vorstandschaft/Katharina.webp', alt: 'Bild von Katharina', name:"Katharina Wunsch" },
  ];
  imagesBeisitzer: ImageItem[] = [
    { url: '../assets/img/Vorstandschaft/Leo.webp', alt: 'Bild von Leo', name: "Leo Ruckenbrod" },
    { url: '../assets/img/Vorstandschaft/Sophie.webp', alt: 'Bild von Sophie', name: "Sophie Schoch" },
    { url: '../assets/img/Vorstandschaft/Marco.webp', alt: 'Bild von Marco', name:"Marco Gerstner" }

  ];



  swiperSlidesChanged(e: any) {
    console.log('changed', e);
  }

  selectSegmentAll(index: any) {

    this.segments.map((item) => (item.selected = false));
    this.segments[index].selected = true;
    this.statusAll = this.segments[index].title;
    console.log(this.statusAll)
  }

  selectSegmentMitgl(index: any) {

    this.segments2.map((item) => (item.selected = false));
    this.segments2[index].selected = true;
    this.statusMitgl = this.segments2[index].title;
    console.log(this.statusMitgl)
  }

  selectSegmentVorst(index: any) {

    this.segments3.map((item) => (item.selected = false));
    this.segments3[index].selected = true;
    this.statusVorst = this.segments3[index].title;
    console.log(this.statusVorst)
  }

  ngOnInit() {
    this.selectSegmentAll(0)
    console.log(this.statusAll)
    this.selectSegmentMitgl(0)
    this.selectSegmentVorst(0)
  }

  statusFunctionAll(indexAll: string) {

    this.statusAll = indexAll;
    console.log(this.statusAll);

  }

  statusFunctionMitgl(indexMitgl: string) {

    this.statusMitgl = indexMitgl;
    console.log(this.statusMitgl);

  }

  showLargeImage(item: ImageItem) {
    this.currentImageSrc = item.url; // Aktualisiere den Pfad des großen Bildes
    this.showLarge = true; // Zeige das große Bild an
  }


  // Funktion zum Ausblenden des großen Bildes
  hideLargeImage() {
    this.showLarge = false; // Verberge das große Bild
  }


}
