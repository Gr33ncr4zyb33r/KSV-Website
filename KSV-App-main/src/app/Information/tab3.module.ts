import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import {Information_Bericht} from './Information_Übersicht';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule
  ],
  declarations: [Tab3Page, Information_Bericht],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab3PageModule {}
