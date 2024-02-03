import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HerosectionComponent } from '../../components/herosection/herosection.component';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent, HerosectionComponent],
  templateUrl: 'about.component.html',
})
export default class AboutComponent {}
