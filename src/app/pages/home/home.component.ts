import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HerosecComponent } from '../../components/herosec/herosec.component';
import { PartnerSecComponent } from '../../components/partner-sec/partner-sec.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,HerosecComponent,PartnerSecComponent],
  template: `
          <main>
            <app-navbar/>
            <app-herosec/>
            <app-partner-sec/>
          </main>`,
})
export default class HomeComponent {

}
