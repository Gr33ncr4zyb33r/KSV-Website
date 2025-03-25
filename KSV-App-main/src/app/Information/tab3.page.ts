import {Component, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';

import { Information_Bericht } from './Information_Übersicht';
@Component({
  selector: 'app-Information',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  myControl = new FormControl();
  component=Information_Bericht;

  @ViewChild('newSwiper') newSwiper: any;

  constructor() {}

  swiperSlidesChanged(e:any){
    console.log('changed', e);
  }

  updateSlideIndicator(activeIndex: number) {
    const dots = document.querySelectorAll('.slide-dot');
    dots.forEach((dot, index) => {
      dot.classList.remove('active');
      if (index === activeIndex) {
        dot.classList.add('active');
      }
    });
  }
}

