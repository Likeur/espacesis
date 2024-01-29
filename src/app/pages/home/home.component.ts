import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HerosectionComponent } from '../../components/herosection/herosection.component';
import { PartnersectionComponent } from '../../components/partnersection/partnersection.component';
import { CtasectionComponent } from '../../components/ctasection/ctasection.component';
import { EventsectionComponent } from '../../components/eventsection/eventsection.component';
import { FootersectionComponent } from '../../components/footersection/footersection.component';
import { TeamsectionComponent } from '../../components/teamsection/teamsection.component';
import { DiscoversectionComponent } from '../../components/discoversection/discoversection.component';
import { gsap } from 'gsap';
import { AstMemoryEfficientTransformer } from '@angular/compiler';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, HerosectionComponent, PartnersectionComponent,DiscoversectionComponent,TeamsectionComponent, EventsectionComponent , CtasectionComponent,FootersectionComponent],
  templateUrl:'home.component.html' ,
})
export default class HomeComponent implements OnInit {
  
  ngOnInit(): void {
    gsap.set('.reveal_text',{
      y:80
    })

    this.revealAnimation() 
  }

  revealAnimation(){
    const revealtl = gsap.timeline({
      defaults:{
        duration:1,
        ease:'power4.inOut'
      }
    });

    revealtl.to('.reveal_text',{
      duration:1.5,
      opacity:1,
      y:0,
      stagger:{
        amount:2.5
      }
    }).to('.wrapper_home',{
      scaleY:'0',
      transformOrigin:'bottom',
      duration:2,
      stagger:{
        amount:1
      }
    }).to('.reveal_text',{
      opacity:0,
      y:40,
      display:"none"
    }, "<").from('.herotext',{
      opacity:0,
      y:80,
      duration:1.5,
      stagger:{
        amount:0.3
      }
    }, "-=1.5")

    // Revealing animations for main elements on the page

  }
}
