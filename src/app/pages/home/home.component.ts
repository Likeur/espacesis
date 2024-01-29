import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HerosectionComponent } from '../../components/herosection/herosection.component';
import { PartnersectionComponent } from '../../components/partnersection/partnersection.component';
import { CtasectionComponent } from '../../components/ctasection/ctasection.component';
import { EventsectionComponent } from '../../components/eventsection/eventsection.component';
import { FootersectionComponent } from '../../components/footersection/footersection.component';
import { TeamsectionComponent } from '../../components/teamsection/teamsection.component';
import { DiscoversectionComponent } from '../../components/discoversection/discoversection.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HerosectionComponent, PartnersectionComponent,DiscoversectionComponent,TeamsectionComponent, EventsectionComponent , CtasectionComponent,FootersectionComponent],
  template: `
          <main class="">
            <div class="bg-blue-300/15">
              <app-navbar/>
              <app-herosection/> 
            </div>
            <app-partnersection/> 
            <app-discoversection/> 
            <app-teamsection/> 
            <app-eventsection/> 
            <app-ctasection/> 
            <app-footersection/> 
          </main>`,
})
export default class HomeComponent {

}
