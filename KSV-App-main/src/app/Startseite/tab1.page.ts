import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {MaschinenuebersichtComponent} from "../Geräte/Maschinenuebersicht.component";
import {WillkommenComponent} from "./Willkommen.component";




@Component({
  selector: 'app-Startseite',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss']
})
export class Tab1Page {
  component = WillkommenComponent;
  @ViewChild(IonModal) modal: IonModal | undefined;
  @ViewChild('newSwiper') newSwiper: any;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  showKommzeitPicker: boolean = false;
  showGehzeitPicker: boolean = false;
  googleSheetForm!: FormGroup;
  name: string | undefined;
  Gehzeit: any;



  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.googleSheetForm = this.formBuilder.group({
      id: formBuilder.control(''),
      Name: formBuilder.control(''),
      Kommzeit: formBuilder.control(''),
      Gehzeit: formBuilder.control(''),
    });
  }

  swiperSlidesChanged(e:any){
    console.log('changed', e);
  }


  showTimePicker(field: string) {
    if (field === 'kommzeit') {
      this.showKommzeitPicker = true;
      this.showGehzeitPicker = false;
    } else if (field === 'gehzeit') {
      this.showGehzeitPicker = true;
      this.showKommzeitPicker = false;
    }
  }
  cancel() {
    // @ts-ignore
    this.modal.dismiss(null, 'cancel');
  }

  updateKommzeit(event: CustomEvent<any>) {
    this.googleSheetForm.patchValue({
      Kommzeit: event.detail.value
    });
  }

  updateGehzeit(event: CustomEvent<any>) {
    this.googleSheetForm.patchValue({
      Gehzeit: event.detail.value
    });
  }


  send() {
    // @ts-ignore
    this.modal.dismiss(this.googleSheetForm.value.Name, 'send');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

generateID(){

}
  confirm() {
    // @ts-ignore
    this.modal.dismiss(this.name, 'confirm');
  }


  ngOnInit(){}







  updateSlideIndicator(activeIndex: number) {
    const dots = document.querySelectorAll('.slide-dot');
    dots.forEach((dot, index) => {
      dot.classList.remove('active');
      if (index === activeIndex) {
        dot.classList.add('active');
      }
    });
  }


  protected readonly MaschinenuebersichtComponent = MaschinenuebersichtComponent;
}


