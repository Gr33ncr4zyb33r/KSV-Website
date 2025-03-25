import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {WillkommenComponent} from "./Willkommen.component";



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [Tab1Page, WillkommenComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Tab1PageModule {}

