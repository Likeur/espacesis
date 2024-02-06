import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FullteamComponent } from '../../components/fullteam/fullteam.component';
import { CtasectionComponent } from '../../components/ctasection/ctasection.component';
import { FootersectionComponent } from '../../components/footersection/footersection.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [NavbarComponent, FullteamComponent, CtasectionComponent, FootersectionComponent],
  templateUrl: './team.component.html',
})
export default class TeamComponent {}
