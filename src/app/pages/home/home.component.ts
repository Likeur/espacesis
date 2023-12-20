import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HerosecComponent } from '../../components/herosec/herosec.component';
import { PartnerSecComponent } from '../../components/partner-sec/partner-sec.component';
import { DecouverteSecComponent } from '../../components/decouverte-sec/decouverte-sec.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,HerosecComponent,PartnerSecComponent,DecouverteSecComponent],
  template: `
          <main>
            <app-navbar/>
            <app-herosec/>
            <app-partner-sec/>
            <app-decouverte-sec/>
          </main>`,
})
export default class HomeComponent {

}
