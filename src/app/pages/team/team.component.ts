import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FullteamComponent } from '../../components/fullteam/fullteam.component';
import { CtasectionComponent } from '../../components/ctasection/ctasection.component';
import { FootersectionComponent } from '../../components/footersection/footersection.component';
import { gsap } from 'gsap';
@Component({
  selector: 'app-team',
  standalone: true,
  imports: [NavbarComponent, FullteamComponent, CtasectionComponent, FootersectionComponent],
  templateUrl: './team.component.html',
})
export default class TeamComponent implements OnInit {

  ngOnInit(): void {
    gsap.from('.fullteam_text',{
      y:50,
      opacity:0,
      skewX:'10px',
      duration:0.8,
      stagger:0.1
    })
    gsap.from('.fullteam_block',{
      y:50,
      opacity:0,
      duration:0.8,
      stagger:0.1
    })
  }
}
