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
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

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
    this.scrollAnimation()
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
    }).to('.reveal_text, .home_text_wrapper',{
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
    }, "-=1.5").from('.hero_photoes',{
      opacity:0,
      y:80,
      duration:1.5,
      stagger:{
        amount:0.3
      }
    }, "-=1.5").from('.hero_para, .hero_link, .hero_boxes',{
      opacity:0,
      y:80,
      duration:1.5,
      stagger:{
        amount:0.3
      }
    }, "-=1.5")

    // Revealing animations for main elements on the page

  }

  scrollAnimation(){
    gsap.from('.partner_text',{
      scrollTrigger:{
        trigger:'.partner_text',
        start:'top 85%',
      },
      y:50,
      opacity:0,
      skewX:'10px',
      duration:0.8,
      stagger:0.1
    })

    gsap.from('.discover_text',{
      scrollTrigger:{
        trigger:'.discover_text',
        start:'top 85%',
      },
      y:50,
      opacity:0,
      skewX:'10px',
      duration:0.8,
      stagger:0.1
    })
    gsap.from('.team_text',{
      scrollTrigger:{
        trigger:'.team_text',
        start:'top 85%',
      },
      y:50,
      opacity:0,
      skewX:'10px',
      duration:0.8,
      stagger:0.1
    })

    gsap.from('.event_text',{
      scrollTrigger:{
        trigger:'.event_text',
        start:'top 85%',
      },
      y:50,
      opacity:0,
      skewX:'10px',
      duration:0.8,
      stagger:0.1
    })
    gsap.from('.discover_para',{
      scrollTrigger:{
        trigger:'.discover_para',
        start:'top 85%',
      },
      y:50,
      opacity:0,
      duration:0.8,
      stagger:0.1
    })
    gsap.from('.team_block',{
      scrollTrigger:{
        trigger:'.team_block',
        start:'top 85%',
      },
      y:50,
      opacity:0,
      duration:0.8,
      stagger:0.1
    })

    gsap.to('.discover_para',{
      scrollTrigger:{
        trigger:'.discover_para',
        start:'top 85%',
        end:'top 10%',
        scrub:true
      },
      y:-40,
    })

    gsap.to('.discover_images',{
      scrollTrigger:{
        trigger:'.discover_images',
        start:'top 85%',
      },
      scaleY:'0',
      transformOrigin:'top',
      duration:1
    })
  }
}
