import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HerosectionComponent } from '../../components/herosection/herosection.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HerosectionComponent],
  template: `
          <main>
            <app-navbar/>
            <app-herosection/> 
          </main>`,
})
export default class HomeComponent {

}
