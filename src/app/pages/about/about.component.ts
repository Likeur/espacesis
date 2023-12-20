import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent],
  template: `
    <main>
      <app-navbar/>
    </main>
  `,
})
export default class AboutComponent {

}
