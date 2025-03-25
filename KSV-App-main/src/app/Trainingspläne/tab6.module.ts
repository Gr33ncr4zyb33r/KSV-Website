import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab6PageRoutingModule } from './tab6-routing.module';

import { Tab6Page } from './tab6.page';
import {TrainingsplNe_UebersichtComponent} from "./Trainingspläne_Uebersicht.component";
import {EigenkoerperComponent} from "./Trainingspläne_einsteiger/eigenkoerper.component";
import {GanzkoerperComponent} from "./Trainingspläne_einsteiger/Ganzkörper.component";
import {OberunterComponent} from "./Trainingspläne_einsteiger/Ober_unter.component";
import {VierSplitComponent} from "./Trainingspläne_erfahrene/4_Split.component";
import {HIITComponent} from "./Trainingspläne_erfahrene/HIIT.component";
import {Ober_Unter_IIComponent} from "./Trainingspläne_erfahrene/Ober_Unter_II.component";
import {Push_Pull_BeineComponent} from "./Trainingspläne_erfahrene/Push_Pull_Beine.component";
import {Push_Pull_BeineIIComponent} from "./Trainingspläne_profis/Push_Pull_Beine_II.component";
import {VierSplitIIComponent} from "./Trainingspläne_profis/4_Split_II.component";
import {OberComponent} from "./Trainingspläne_einsteiger/Pläne/Oberkoerper.component";
import {UnterComponent} from "./Trainingspläne_einsteiger/Pläne/Unterkoerper.component";
import {SchulternComponent} from "./Trainingspläne_erfahrene/pläne/Schultern.component";
import {BeineComponent} from "./Trainingspläne_erfahrene/pläne/Beine.component";
import {BrustTrizepsComponent} from "./Trainingspläne_erfahrene/pläne/Brust_Trizeps.component";
import {RueckenBizepsComponent} from "./Trainingspläne_erfahrene/pläne/Rücken_Bizeps.component";
import {OberIIComponent} from "./Trainingspläne_erfahrene/pläne/OberII_component";
import {UnterIIComponent} from "./Trainingspläne_erfahrene/pläne/UnterII.component";
import {PushComponent} from "./Trainingspläne_erfahrene/pläne/Push.component";
import {PullComponent} from "./Trainingspläne_erfahrene/pläne/Pull.component";
import {PPBBeineComponent} from "./Trainingspläne_erfahrene/pläne/PPBBeine.component";
import {KGPPBComponent} from "./Trainingspläne_profis/KGPPB";
import {BeineIIComponent} from "./Trainingspläne_profis/Pläne/Beine_II.component";
import {Schultern_Nacken_IIComponent} from "./Trainingspläne_profis/Pläne/Schultern_Nacken_II.component";
import {Brust_Trizeps_IIComponent} from "./Trainingspläne_profis/Pläne/Brust_Trizeps_II.component";
import {Ruecken_Bizeps_IIComponent} from "./Trainingspläne_profis/Pläne/Rücken_Bizeps_II.component";
import {HIIT_II_Component} from "./Trainingspläne_profis/HIIT_2.component";
import {NicosComponent} from "./Trainingspläne_mitglieder/Nico.component";
import {NicoPushComponent} from "./Trainingspläne_mitglieder/Pläne/Push.component";
import {NicoPullComponent} from "./Trainingspläne_mitglieder/Pläne/Pull.component";
import {NicoBeineComponent} from "./Trainingspläne_mitglieder/Pläne/Beine.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab6PageRoutingModule
  ],
  declarations: [Tab6Page,TrainingsplNe_UebersichtComponent,
    EigenkoerperComponent, GanzkoerperComponent, OberunterComponent, VierSplitComponent, HIITComponent
    ,Ober_Unter_IIComponent, Push_Pull_BeineComponent,Push_Pull_BeineIIComponent,VierSplitIIComponent,
    OberComponent, UnterComponent,SchulternComponent,
    BeineComponent, BrustTrizepsComponent, RueckenBizepsComponent, OberIIComponent, UnterIIComponent,
    PushComponent, PullComponent, PPBBeineComponent, KGPPBComponent, BeineIIComponent, Schultern_Nacken_IIComponent, Brust_Trizeps_IIComponent
    ,Ruecken_Bizeps_IIComponent, HIIT_II_Component, NicosComponent, NicoPushComponent, NicoPullComponent, NicoBeineComponent]
})
export class Tab6PageModule {}
