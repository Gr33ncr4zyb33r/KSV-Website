# KSV Gausbach - Vereins-App

Dies ist die offizielle App für den Kraftsportverein KSV Gausbach. Die App ermöglicht es Mitgliedern und Interessierten, aktuelle Informationen über den Verein, Veranstaltungen und Trainingszeiten zu erhalten.

## Projektübersicht

Diese App wurde mit **Angular 16** und **Ionic 7** entwickelt und ist über **Firebase Hosting** bereitgestellt. Sie stellt eine PWA (Progressive Web App) und Mobile-App (via Capacitor) dar und kann lokal getestet sowie einfach aktualisiert werden.

**Live Website:** https://ksv-gausbach.web.app

## Anforderungen

Bevor du das Projekt lokal ausführen kannst, installiere folgende Software:

- [Node.js](https://nodejs.org/) (Version 16.x oder höher empfohlen)
- [Firebase CLI](https://firebase.google.com/docs/cli) (Installiert mit `npm install -g firebase-tools`)

**Hinweis:** Die Angular CLI wird lokal installiert, nicht global benötigt.

## Installation

1. **Repository klonen:**

\`\`\`bash
git clone https://github.com/Gr33ncr4zyb33r/KSV-Website.git
cd KSV-Website/KSV-App-main
\`\`\`

2. **Abhängigkeiten installieren:**

Installiere alle benötigten npm Pakete (mit Legacy-Peer-Deps für Kompatibilität):

\`\`\`bash
npm install --legacy-peer-deps
\`\`\`

## Lokale Entwicklung

### App lokal testen

Um die App lokal zu entwickeln und zu testen, starte den Angular Development Server:

\`\`\`bash
npm start
\`\`\`

Die App ist dann unter http://localhost:4200/ erreichbar und aktualisiert sich automatisch bei Dateiänderungen (Hot Reload).

## Änderungen durchführen und Deploy

Folge diesem Workflow für Änderungen und Live-Updates:

### 1. Code ändern

Bearbeite die Dateien in `src/app/` nach Bedarf. Der Dev-Server aktualisiert automatisch im Browser.

### 2. In Git committen und pushen

Nach erfolgreichem lokalen Test:

\`\`\`bash
git add .
git commit -m "fix: Beschreibung der Änderung"
git push origin main
\`\`\`

### 3. Production-Build erstellen

Erstelle einen optimierten Build für das Deployment:

\`\`\`bash
npm run build
\`\`\`

Dieser erzeugt die optimierte Website im `www/` Verzeichnis.

### 4. Zu Firebase deployen

Stelle die neue Version live auf der Website bereit (benötigt Firebase-Anmeldung):

\`\`\`bash
# Nur beim ersten Mal:
firebase login

# Deployment:
firebase deploy
\`\`\`

Die Website ist dann sofort unter https://ksv-gausbach.web.app aktualisiert!

## Verfügbare Scripts

- `npm start` - Startet Development Server (Port 4200)
- `npm run build` - Erstellt Production-Build
- `npm test` - Startet Test-Runner
- `npm run lint` - Führt Linting aus

## Projektstruktur

\`\`\`
KSV-App-main/
├── src/
│   ├── app/
│   │   ├── Startseite/          # Landingpage
│   │   ├── Trainingspl-ne/      # Trainingspläne
│   │   ├── Ernährung/           # Ernährungstipps
│   │   ├── Meldungen/           # News/Announcements
│   │   ├── Information/         # Vereinsinformation
│   │   ├── Geräte/              # Geräteübersicht
│   │   └── Motivation/          # Motivationsinhalte
│   ├── assets/                  # Bilder und Ressourcen
│   └── environments/            # Firebase Konfiguration
├── firebase.json                # Firebase Hosting Config
├── angular.json                 # Angular Konfiguration
└── package.json                 # Dependencies
\`\`\`

## Firebase Setup

Die App ist mit Firebase Firestore, Storage und Authentication integriert. Die Konfiguration befindet sich in `src/environments/environment.ts`.

## Lizenz

Dieses Projekt steht unter der MIT-Lizenz.

## Kontakt

Für Fragen oder Anmerkungen zum Projekt, kontaktiere bitte das KSV Gausbach-Team unter ksv-gausbach.de
EOF
