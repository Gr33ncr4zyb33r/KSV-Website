import {Component} from '@angular/core';

@Component({
  selector: 'app-page-ernaehrung',
  styleUrls: ['../Ernährung/tab5.page.scss'],
  template: `


    <ion-header [translucent]="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Ernährung</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col size="12" size-md="6" size-lg="4" size-xl="3">
            <ion-card>
              <ion-card-header>
                <ion-card-title>
                  Supplement-Pyramide
                </ion-card-title>
                <ion-card-subtitle style="letter-spacing: 2px; font-weight: lighter">
                  Supplemente
                </ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>

                <ion-img style="" src="../../assets/img/Supplementpyramide_ESN.webp"
                         alt="Bild kann nicht angezeigt werden"></ion-img>
                <figcaption style="font-size: 10px;color: black; padding-bottom: 25px">
                  Bildquelle: <a style="color: black" href="https://www.esn.com/blogs/news/supplement-pyramide"
                                 target="_blank">https://www.esn.com/blogs/news/supplement-pyramide</a>
                </figcaption>

                <p *ngIf="!showFullArticle" style="letter-spacing: 1px">Supplemente sind in der Welt des Kraftsports
                  zweifellos ein kontroverses Thema.
                  Als Ergänzungsmittel sollen sie eine ausgewogene Ernährung und strukturiertes Training unterstützen,
                  um optimale Fortschritte zu erzielen. Die Frage bleibt: Welche Supplements sind unverzichtbar und
                  nachweislich wirkungsvoll, und welche dienen lediglich dazu, die letzten 1-2 % herauszuholen? Eine
                  Antwort
                  darauf bietet die Supplementpyramide...</p>

                <ion-button style="padding-top: 25px" size="small" shape="round" color="dark"
                            (click)="showFullArticle = true"
                            *ngIf="!showFullArticle">Weiterlesen
                  <ion-icon slot="end" color="light" name="arrow-forward-outline"></ion-icon>
                </ion-button>
                <div *ngIf="showFullArticle">

                  <p>Supplemente sind in der Welt des Kraftsports zweifellos ein kontroverses
                    Thema.
                    Als Ergänzungsmittel sollen sie eine ausgewogene Ernährung und strukturiertes Training unterstützen,
                    um optimale Fortschritte zu erzielen. Die Frage bleibt: Welche Supplements sind unverzichtbar und
                    nachweislich wirkungsvoll, und welche dienen lediglich dazu, die letzten 1-2 % herauszuholen? Eine
                    Antwort
                    darauf bietet die Supplementpyramide <br><br></p>

                  <h2 style="font-weight: bold">Must-Haves: Die Grundpfeiler für jeden Sportler</h2>
                  <ol>
                    <li><strong>Isoclear Whey Isolate</strong>
                      <ul>
                        <li>Ergänzung um dein Proteinbedarf zu decken</li>
                        <li>Vollständiges Aminosäurenprofil</li>
                        <li>Fett-, zucker- und laktosefrei</li>
                        <li>Fruchtig und leicht zu trinken in jeder Situation</li>
                      </ul>
                    </li>
                    <li><strong>Designer Whey</strong>
                      <ul>
                        <li>Cremiges Pendant zum Isoclear</li>
                        <li>Ideal als Proteinshake oder zum Verfeinern von Speisen</li>
                        <li>Unterstützt die Proteinversorgung ebenfalls</li>
                      </ul>
                    </li>
                    <li><strong>Ultrapure Creatine</strong>
                      <ul>
                        <li>Mikrofeines Kreatin-Monohydrat-Pulver</li>
                        <li>Steigert körperliche Leistungsfähigkeit in intensiven Phasen</li>
                        <li>Kann Aufmerksamkeitsspanne, IQ und Arbeitsgedächtnis verbessern <sup>1</sup></li>
                      </ul>
                    </li>
                  </ol>

                  <h2 style="font-weight: bold">Lückenschließer: Optimale Versorgung sicherstellen</h2>
                  <ol>
                    <li><strong>Athlete Stack</strong>
                      <ul>
                        <li>Enthält alle essenziellen Vitamine und ausgewählte Mineralstoffe</li>
                        <li>Spart die Kombination verschiedener Präparate</li>
                      </ul>
                    </li>
                    <li><strong>Omega-3</strong>
                      <ul>
                        <li>Unterstützt die Herzgesundheit und Gehirnfunktion</li>
                        <li>Hochdosiertes EPA und DHA</li>
                      </ul>
                    </li>
                    <li><strong>Vitamin D3+K2</strong>
                      <ul>
                        <li>Wissenschaftlich erwiesene positive Wirkung auf Immunsystem, Muskulatur, Knochen und
                          Blutgerinnung
                        </li>
                      </ul>
                    </li>
                  </ol>

                  <h2 style="font-weight: bold">Optimierer: Feinschliff für besondere Bedürfnisse</h2>
                  <ol>
                    <li><strong>AshwaPro</strong>
                      <ul>
                        <li>Ayurvedisches Adaptogen zur Stressbewältigung</li>
                        <li>Verbessert körperliche Leistungsfähigkeit und Ausdauer</li>
                      </ul>
                    </li>
                    <li><strong>Curcumin</strong>
                      <ul>
                        <li>Entzündungshemmende Eigenschaften</li>
                        <li>Positive Effekte auf Gehirnfunktion und Immunsystem</li>
                      </ul>
                    </li>
                    <li><strong>Crank</strong>
                      <ul>
                        <li>Pre-Workout Booster zur Reduzierung von Müdigkeit</li>
                        <li>Verbessert das Trainingserlebnis</li>
                      </ul>
                    </li>
                    <li><strong>Melatonin Night Spray</strong>
                      <ul>
                        <li>Verkürzt die Einschlafzeit für bessere Regeneration</li>
                        <li>Bedeutend für Muskelaufbau</li>
                      </ul>
                    </li>
                  </ol>

                  <h2 style="font-weight: bold">Spezialisten: Für gezielte Ziele</h2>
                  <ol>
                    <li><strong>Diet Support Pro</strong>
                      <ul>
                        <li>Entwickelt mit Sport- & Ernährungswissenschaftlern</li>
                        <li>Positiver Einfluss auf Kalorienverbrauch & Hungergefühl</li>
                      </ul>
                    </li>
                    <li><strong>L-Carnitine</strong>
                      <ul>
                        <li>Natürlich vorkommende Aminosäureverbindung</li>
                        <li>Unterstützt den Fettstoffwechsel in Diät- & Definitionsphasen</li>
                      </ul>
                    </li>
                  </ol>

                  <p>Insgesamt helfen diese Supplemente, die 3 ESN-Routinen zu erfüllen und sind somit entscheidend für
                    deinen
                    Fortschritt im Kraftsport. Denke daran, dass Supplemente ihre volle Wirkung in Kombination mit einer
                    ausgewogenen Ernährung und effektivem Training entfalten. Nutze die Supplementpyramide als
                    Leitfaden,
                    um die für dich passenden Ergänzungen auszuwählen und dein Fitnessziel zu erreichen. <br><br></p>

                  <a style="font-size: small; color: black; text-decoration: none"
                     href="https://pubmed.ncbi.nlm.nih.gov/19773644/"><sup>1</sup>https://pubmed.ncbi.nlm.nih.gov/19773644/</a>
                  <ion-button style="padding-top: 25px" size="small" shape="round" color="dark"
                              (click)="showFullArticle = false" *ngIf="showFullArticle">
                    <ion-icon slot="start" color="light" name="arrow-back-outline"></ion-icon>
                    zurück zur Übersicht
                  </ion-button>


                </div>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col size="12" size-md="6" size-lg="4" size-xl="3">
            <ion-card>
              <ion-card-header>
                <ion-card-title>
                  Nährstoffverteilung
                </ion-card-title>
                <ion-card-subtitle style="letter-spacing: 2px; font-weight: lighter">
                  Nährstoffe
                </ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>

                <ion-img style="" src="../../assets/img/Kalorienrechnen.jpg"
                         alt="Bild kann nicht angezeigt werden"></ion-img>
                <figcaption style="font-size: 10px;color: black; padding-bottom: 25px">
                  Bildquelle: <a style="color: black" href="https://t.ly/L3AYa"
                                 target="_blank">Bild von YuliiaKa auf Freepik</a>
                </figcaption>


                <div *ngIf="!showFullArticle2" style="letter-spacing: 1px">
                  <p>Ein effektiver Muskelaufbau erfordert nicht nur intensives Training, sondern auch eine präzise
                    Abstimmung deiner Ernährung. Hier ist eine ausführliche Darstellung der optimalen Makroverteilung:
                    ...</p>


                </div>

                <ion-button style="padding-top: 25px" size="small" shape="round" color="dark"
                            (click)="showFullArticle2 = true" *ngIf="!showFullArticle2">Weiterlesen
                  <ion-icon slot="end" color="light" name="arrow-forward-outline"></ion-icon>
                </ion-button>
                <div *ngIf="showFullArticle2">
                  <p>Ein effektiver Muskelaufbau erfordert nicht nur intensives Training, sondern auch eine präzise
                    Abstimmung deiner Ernährung. Hier ist eine ausführliche Darstellung der optimalen
                    Makroverteilung:</p>
                  <br><br>
                  <h2><strong>1. Fette: Die Fundamentale Basis</strong></h2>
                  <br>
                  <p>
                    Fette dienen als Energielieferanten, wobei ihre Rolle beim Muskelaufbau im Vergleich zu Proteinen
                    und Kohlenhydraten eher unterstützend ist. Die empfohlene tägliche Zufuhr liegt bei 0,8 bis 1 Gramm
                    Fett pro Kilogramm Körpergewicht. Achte auf gesunde Fettquellen wie Lachs, Hering, Leinöl und Nüsse.
                  </p>

                  <h3>Beispielrechnung für 80kg:</h3>
                  <br>

                  <p><strong>Berechnung Fett:</strong> <br>0,8g Fett * 80kg Körpergewicht = 64g Fett</p>
                  <p><strong>Kalorien aus Fett:</strong> <br>64g Fett * 9,3 kcal = 595,2 Kalorien</p>
                  <br>

                  <h2><strong>2. Kohlenhydrate: Die Kraftquelle</strong></h2>
                  <br>
                  <p>
                    Kohlenhydrate sind die Hauptenergiequelle, insbesondere während intensiver Trainingseinheiten. Die
                    empfohlene Menge variiert, aber als Faustregel gelten 5-7g Kohlenhydrate pro Kilogramm
                    Körpergewicht. Setze auf komplexe Kohlenhydrate wie Vollkornnudeln, -reis, Haferflocken und
                    Süßkartoffeln.
                  </p>

                  <h3>Beispielrechnung für 80kg:</h3>

                  <br>
                  <p><strong>Berechnung Kohlenhydrate:</strong><br> 6g Kohlenhydrate * 80kg Körpergewicht = 480g
                    Kohlenhydrate</p>
                  <p><strong>Kalorien aus Kohlenhydraten:</strong><br> 480g Kohlenhydrate * 4,1 kcal = 1968 Kalorien</p>
                  <br>

                  <h2><strong>3. Proteine: Bausteine für Muskelaufbau</strong></h2>
                  <br>
                  <p>
                    Proteine sind essenziell für Muskelaufbau und -erhalt. Neben der allgemeinen Empfehlung von 0,8g
                    Eiweiß pro Kilogramm Körpergewicht, ist für Muskelaufbau eine höhere Zufuhr von 1,4g bis 2g pro
                    Kilogramm empfehlenswert. Wähle hochwertige Proteinquellen wie Fleisch, Fisch, Hülsenfrüchte und
                    Eier.
                  </p>

                  <h3>Beispielrechnung für 80kg:</h3>

                  <br>
                  <p><strong>Berechnung Protein:</strong><br> 2g Eiweiß * 80kg Körpergewicht = 160g Eiweiß</p>
                  <p><strong>Kalorien aus Protein:</strong><br> 160g Eiweiß * 4,1 kcal = 656 Kalorien</p>

                  <br>
                  <h2><strong>Gesamtberechnung:</strong></h2>
                  <br>
                  <p>
                    <strong>Summe der Kalorien:</strong> 595,2 Kalorien (Fett) + 1968 Kalorien (Kohlenhydrate) + 656
                    Kalorien (Protein) = 3219 Kalorien.
                  </p>
                  <br>
                  <h2><strong>Wichtige Hinweise:</strong></h2>

                  <br>

                  <p>
                    Die Makroverteilung muss an deinen individuellen Kalorienbedarf angepasst werden. Nutze einen
                    Kalorienrechner wie <a
                    href="https://www.tk.de/service/app/2004134/kalorienrechner/einstieg.app?tkcm=aaus" target="_blank">diesen</a>,
                    um deine optimale Kalorienzufuhr zu ermitteln und die Makroverteilung entsprechend anzupassen.
                  </p>
                  <ion-button style="padding-top: 25px" size="small" shape="round" color="dark"
                              (click)="showFullArticle2 = false" *ngIf="showFullArticle2">
                    <ion-icon slot="start" color="light" name="arrow-back-outline"></ion-icon>
                    zurück zur Übersicht
                  </ion-button>
                </div>

              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col size="12" size-md="6" size-lg="4" size-xl="3">
            <ion-card>
              <ion-card-header>
                <ion-card-title>
                  Lebensmittel im Bodybuilding
                </ion-card-title>
                <ion-card-subtitle style="letter-spacing: 2px; font-weight: lighter">
                  Lebensmittel
                </ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>
               

                <div style="letter-spacing: 1px">
                  <p>Für Bodybuilder sind diese 10 Lebensmittel unverzichtbar:</p>
                  <ul>
                    <li>Fleisch – Proteinquelle Nr. 1</li>
                    <li>Fisch – Omega-3 Fettsäuren und hochwertiges Eiweiß</li>
                    <li>Reis – Energiequelle mit wenig Fett</li>
                    <li>Haferflocken – Energiespender und Cholesterinsenker</li>
                    <li>Eier – Hochwertiges Eiweiß und einfach zuzubereiten</li>
                    <li>Gemüse – Mineralstoffe und wenig Kalorien</li>
                    <li>Obst – Vitamine und schnelle Energie</li>
                    <li>Wasser – Der lebenswichtige Durstlöscher</li>
                    <li>Milch – Hochwertiges Protein und Kalziumquelle</li>
                    <li>Öle und Fette – Wichtige Nährstoffe für Energie und Hormonproduktion</li>
                  </ul>
                </div>

                <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showFullArticle4 = true" *ngIf="!showFullArticle4">Weiterlesen
                  <ion-icon slot="end" color="light" name="arrow-forward-outline"></ion-icon>
                </ion-button>

                <div *ngIf="showFullArticle4">
                  <p>Ein effektiver Muskelaufbau erfordert nicht nur intensives Training, sondern auch eine präzise Abstimmung deiner Ernährung. Hier ist eine ausführliche Darstellung der optimalen Makroverteilung:</p>
                  <br>
                  <br>
                  <h2><strong>Fleisch: Proteinquelle Nr. 1</strong></h2>
                  <br>
                  <p>
                    Fleisch ist eine hervorragende Proteinquelle, die für den Muskelaufbau unverzichtbar ist. Es enthält alle essentiellen Aminosäuren und liefert wichtige Nährstoffe wie Vitamin B12, Eisen und Zink.
                  </p>
                  <br>
                  <h2><strong>Fisch: Omega-3 Fettsäuren und hochwertiges Eiweiß</strong></h2>
                  <br>
                  <p>
                    Fisch ist reich an Omega-3 Fettsäuren und hochwertigem Eiweiß, was ihn zu einer idealen Wahl für Bodybuilder macht. Omega-3 Fettsäuren unterstützen die Herzgesundheit und entzündungshemmende Prozesse im Körper.
                  </p>
                  <br>
                  <h2><strong>Reis: Energiequelle mit wenig Fett</strong></h2>
                  <br>
                  <p>
                    Reis ist eine ausgezeichnete Energiequelle mit wenig Fett. Er liefert komplexe Kohlenhydrate, die den Körper mit langanhaltender Energie versorgen und den Muskelaufbau unterstützen.
                  </p>
                  <br>
                  <h2><strong>Haferflocken: Energiespender und Cholesterinsenker</strong></h2>
                  <br>
                  <p>
                    Haferflocken sind ein vielseitiger Energiespender, der den Cholesterinspiegel senken kann. Sie enthalten komplexe Kohlenhydrate und Ballaststoffe, die für eine stabile Energieversorgung sorgen.
                  </p>
                  <br>
                  <h2><strong>Eier: Hochwertiges Eiweiß und einfach zuzubereiten</strong></h2>
                  <br>
                  <p>
                    Eier sind eine einfache und hochwertige Proteinquelle, die sich leicht in verschiedene Gerichte integrieren lässt. Sie enthalten alle essentiellen Aminosäuren und sind ideal für den Muskelaufbau.
                  </p>
                  <br>
                  <h2><strong>Gemüse: Mineralstoffe und wenig Kalorien</strong></h2>
                  <br>
                  <p>
                    Gemüse ist reich an Vitaminen und Mineralstoffen bei gleichzeitig niedrigem Kaloriengehalt. Es unterstützt den Körper bei der Regeneration und liefert wichtige Antioxidantien.
                  </p>
                  <br>
                  <h2><strong>Obst: Vitamine und schnelle Energie</strong></h2>
                  <br>
                  <p>
                    Obst ist eine schnelle Energiequelle und liefert wichtige Vitamine und Antioxidantien. Es eignet sich ideal als Snack vor oder nach dem Training, um den Körper mit wichtigen Nährstoffen zu versorgen und die Regeneration zu unterstützen.
                  </p>
                  <br>
                  <h2><strong>Wasser: Der lebenswichtige Durstlöscher</strong></h2>
                  <br>
                  <p>
                    Wasser ist unerlässlich für eine optimale Hydratation und unterstützt den Körper bei allen Stoffwechselprozessen. Es reguliert die Körpertemperatur, transportiert Nährstoffe und sorgt für eine reibungslose Funktion der Muskeln.
                  </p>
                  <br>
                  <h2><strong>Milch: Hochwertiges Protein und Kalziumquelle</strong></h2>
                  <br>
                  <p>
                    Milchprodukte wie Milch, Joghurt und Quark sind reich an Kalzium und hochwertigem Protein. Sie unterstützen den Muskelaufbau und die Erholung nach dem Training.
                  </p>
                  <br>
                  <h2><strong>Öle und Fette: Wichtige Nährstoffe für Energie und Hormonproduktion</strong></h2>
                  <br>
                  <p>
                    Öle und Fette sind wichtige Nährstoffe, die für die Energiegewinnung und Hormonproduktion im Körper benötigt werden. Achte auf gesunde Fettquellen wie Olivenöl, Avocado und Nüsse, um eine optimale Gesundheit zu unterstützen.
                  </p>
                  <br>
                  <h2><strong>Gesamtberechnung:</strong></h2>
                  <br>
                  <p>
                    Die Makroverteilung muss an deinen individuellen Kalorienbedarf angepasst werden. Nutze einen Kalorienrechner, um deine optimale Kalorienzufuhr zu ermitteln und die Makroverteilung entsprechend anzupassen.
                  </p>

                  <figcaption style="font-size: 10px;color: black; padding-bottom: 25px">
                    Textquelle: <a style="color: black" href="https://www.body-attack.de/bodybuilding-top-nahrungsmittel.html" target="_blank">Informationen von Body Attack</a>
                  </figcaption>
                  <ion-button style="padding-top: 25px" size="small" shape="round" color="dark" (click)="showFullArticle4 = false" *ngIf="showFullArticle4">
                    <ion-icon slot="start" color="light" name="arrow-back-outline"></ion-icon>
                    zurück zur Übersicht
                  </ion-button>
                </div>

              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col size="12" size-md="6" size-lg="4" size-xl="3">
            <ion-card>
              <ion-card-header>
                <ion-card-title>
                  Kreatin
                </ion-card-title>
                <ion-card-subtitle style="letter-spacing: 2px; font-weight: lighter">
                  Supplemente
                </ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>


            

                <div *ngIf="!showFullArticle3" style="letter-spacing: 1px">
                  <h2><strong>Was ist Creatin?</strong></h2>
                  <p>Creatine gehört für viele Athleten zum Muskelaufbau dazu. Jeder Mensch hat Creatine in seinem Körper: Creatine ist eine körpereigene Säure, die vorrangig in den Muskelzellen vorkommt.</p>
                  <p>Produziert wird sie in Leber, Niere und Bauchspeicheldrüse. Ihre Grundbausteine sind ...</p>
                </div>

                <ion-button style="padding-top: 25px" size="small" shape="round" color="dark"
                            (click)="showFullArticle3 = true" *ngIf="!showFullArticle3">Weiterlesen
                  <ion-icon slot="end" color="light" name="arrow-forward-outline"></ion-icon>
                </ion-button>
                <div *ngIf="showFullArticle3">
                  <h2><strong>Was ist Creatin?</strong></h2>
                  <p>Creatine gehört für viele Athleten zum Muskelaufbau dazu. Jeder Mensch hat Creatine in seinem Körper: Creatine ist eine körpereigene Säure, die vorrangig in den Muskelzellen vorkommt.</p>
                  <p>Produziert wird sie in Leber, Niere und Bauchspeicheldrüse. Ihre Grundbausteine sind die 3 Aminosäuren Arginin, Glycin und Methionin.</p>
<br>
                  <h2><strong>Creatine und Muskelaufbau: Wirkung</strong></h2>
                  <p>Creatine ist in erster Linie für die Kraftsteigerung beim Training zuständig, wodurch sich dann auch der Muskelaufbau verbessert. Mit der Aufnahme von Creatine kannst du deine sportliche Leistung um 10-15% steigern.</p>
                  <p>Eine ausgewogene, gesunde Ernährung und regelmäßiges Training sind jedoch die Basis, ohne die auch Creatine nicht wirkt.</p>
<br>
                  <p>Wie lange Muskelaufbau dauert, ist von Mensch zu Mensch unterschiedlich und hängt von Faktoren wie Geschlecht, Alter, Trainingsstand etc. ab.</p>
                  <p>Wichtig sind dabei in erster Linie dein Training (mindestens 3 Einheiten die Woche) und ein Kalorienüberschuss, damit dein Körper ausreichend Energie hat, die er in den Aufbau von Muskeln stecken kann.</p>
<br>
                  <h2><strong>Richtige Creatin-Einnahme für den Muskelaufbau</strong></h2>
                  <p>Empfohlen wird eine Dauereinnahme von Creatine. Dies bedeutet jedoch nicht gleich “für immer”. Empfehlenswert ist hier zunächst für ca. 3 bis 6 Monate täglich Creatine zu verwenden, um die Leistung zu steigern und Muskeln aufzubauen.</p>
                  <p>Wobei du schon vorab deine Kraftwerte und dein Ausgangsgewicht protokollieren kannst, um nach der Creatine-Einnahme diese zu vergleichen.</p>
                  <p>Nach den 3-6 Monaten der Creatine-Einnahmen, kannst du deinen Stand erneut messen. Wie hast du dich gesteigert? Hast du mehr Kraft, ist das Training intensiver oder hast du an Masse aufgebaut? Vergleiche diesen Stand mit deinem vorherigen.</p>
                  <p>Dementsprechend kannst du schauen wie dein Training nun ohne Creatine abläuft und ob es so intensiv bleibt oder du wieder ein Leistungsplateau erreichst.</p>
                  <p>Ratsam ist bei der Creatine-Einnahme eine Dauereinnahme von 3 g Creatine täglich. Für den Muskelaufbau mit Creatine wird häufig eine Ladephase empfohlen. Dies ist jedoch nicht notwendig, denn die Studienlage zeigt mittlerweile, dass eine Ladephase mit anfangs 20 g Creatine täglich nachweislich keine verstärkte Wirkung hat.</p>
                  <figcaption style="font-size: 10px;color: black; padding-bottom: 25px">
                    Textquelle: <a style="color: black" href="https://www.foodspring.de/magazine/creatine-muskelaufbau"
                                   target="_blank">Informationen von Foodspring</a>
                  </figcaption>

                  <ion-button style="padding-top: 25px" size="small" shape="round" color="dark"
                              (click)="showFullArticle3 = false" *ngIf="showFullArticle3">
                    <ion-icon slot="start" color="light" name="arrow-back-outline"></ion-icon>
                    zurück zur Übersicht
                  </ion-button>
                </div>

              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>


    </ion-content>

  `,

})

export class ErnaehrungComponent {

  showFullArticle: boolean = false;
  showFullArticle2: boolean = false;
  showFullArticle3: boolean = false;
  showFullArticle4: boolean = false;



}
