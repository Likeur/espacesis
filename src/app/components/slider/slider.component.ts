import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class SliderComponent {

}
