# 🏋️‍♂️ KSV Gausbach -- Vereins-App

Offizielle Vereins-App des **Kraftsportvereins KSV Gausbach**.\
Die App informiert Mitglieder und Interessierte über:

-   📢 Aktuelle Meldungen\
-   🗓️ Veranstaltungen\
-   🕒 Trainingszeiten\
-   💪 Trainingspläne\
-   🥗 Ernährungstipps\
-   🏋️ Geräteübersicht\
-   🔥 Motivation

🌐 **Live-Version:**\
https://ksv-gausbach.web.app

------------------------------------------------------------------------

# 🚀 Projektübersicht

Die App wurde entwickelt mit:

-   **Angular 16**
-   **Ionic 7**
-   **Firebase (Hosting, Firestore, Storage, Auth)**
-   **Capacitor** (für Mobile Apps)

Sie ist verfügbar als:

-   ✅ Progressive Web App (PWA)\
-   ✅ Mobile App (Android / iOS via Capacitor)

------------------------------------------------------------------------

# ⚙️ Voraussetzungen

Bitte installiere vorab:

  Software       Version
  -------------- ---------
  Node.js        ≥ 16.x
  Firebase CLI   aktuell

Installation Firebase CLI:

``` bash
npm install -g firebase-tools
```

> 💡 Die Angular CLI wird lokal im Projekt installiert -- keine globale
> Installation nötig.

------------------------------------------------------------------------

# 📥 Installation

## 1️⃣ Repository klonen

``` bash
git clone https://github.com/Gr33ncr4zyb33r/KSV-Website.git
cd KSV-Website/KSV-App-main
```

## 2️⃣ Abhängigkeiten installieren

``` bash
npm install --legacy-peer-deps
```

------------------------------------------------------------------------

# 🧪 Lokale Entwicklung

Starte den Development-Server:

``` bash
npm start
```

📍 Die App läuft unter:\
http://localhost:4200/

-   🔄 Automatisches Reload bei Änderungen
-   ⚡ Schnelle Entwicklungsumgebung

------------------------------------------------------------------------

# 🚀 Deployment Workflow

## 1️⃣ Code anpassen

Bearbeite Dateien in:

    src/app/

## 2️⃣ Änderungen committen & pushen

``` bash
git add .
git commit -m "fix: Beschreibung der Änderung"
git push origin main
```

## 3️⃣ Production Build erstellen

``` bash
npm run build
```

Der optimierte Build wird im Ordner:

    www/

erstellt.

## 4️⃣ Deployment zu Firebase

Beim ersten Mal anmelden:

``` bash
firebase login
```

Dann deployen:

``` bash
firebase deploy
```

🌍 Danach ist die neue Version sofort live unter:\
https://ksv-gausbach.web.app

------------------------------------------------------------------------

# 📜 Verfügbare Scripts

  Script            Beschreibung
  ----------------- ----------------------------
  `npm start`       Development Server starten
  `npm run build`   Production Build erstellen
  `npm test`        Tests ausführen
  `npm run lint`    Code linten

------------------------------------------------------------------------

# 🗂 Projektstruktur

    KSV-App-main/
    ├── src/
    │   ├── app/
    │   │   ├── Startseite/
    │   │   ├── Trainingspl-ne/
    │   │   ├── Ernährung/
    │   │   ├── Meldungen/
    │   │   ├── Information/
    │   │   ├── Geräte/
    │   │   └── Motivation/
    │   ├── assets/
    │   └── environments/
    ├── firebase.json
    ├── angular.json
    └── package.json

------------------------------------------------------------------------

# 🔥 Firebase Integration

Die App nutzt:

-   🔐 Firebase Authentication\
-   📂 Firebase Storage\
-   🗄️ Firebase Firestore\
-   🌐 Firebase Hosting

Konfiguration:

    src/environments/environment.ts

------------------------------------------------------------------------

# 📄 Lizenz

Dieses Projekt steht unter der **MIT-Lizenz**.

------------------------------------------------------------------------

# 📬 Kontakt

Bei Fragen oder Feedback:

🌍 https://ksv-gausbach.de

Oder direkt über das KSV Gausbach Team.
