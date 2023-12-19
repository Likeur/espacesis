import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HerosecComponent } from '../../components/herosec/herosec.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,HerosecComponent],
  template: `
          <main>
            <app-navbar/>
            <app-herosec/>
          </main>`,
})
export default class HomeComponent {

}
