import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { MetricComponent } from '../metric/metric.component';


@Component({
  selector: 'app-herosec',
  standalone: true,
  imports: [SliderComponent, MetricComponent],
  templateUrl: './herosec.component.html'
})
export class HerosecComponent {}
