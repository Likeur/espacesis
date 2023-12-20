import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';


@Component({
  selector: 'app-herosec',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './herosec.component.html'
})
export class HerosecComponent {}
