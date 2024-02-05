import { Component, OnInit, Optional } from '@angular/core';
import { RouterModule } from '@angular/router';
import {gsap} from 'gsap';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  

  openMenuTl = gsap.timeline({
    defaults:{
      duration:1,
      ease:'power4.inOut'
    }
  })

  ngOnInit(): void {
    gsap.set('.nav_Wrapper',{
      scaleY:0
    })
    gsap.set('.nav_links',{
      y:100
    })
    gsap.set('.nav_container',{
      display:'none'
    })  
    
  }
  
  menuIsOpen = false
  
  toggleMenu(){

    this.menuIsOpen = !this.menuIsOpen
    this.openMenuTl.to('.nav_container',{
      display:'grid'
    }).to('.nav_Wrapper',{
      scaleY:1,
      transformOrigin:'top'
    }, "<").to('.btn_barres',{
      backgroundColor:'white'
    }, "<").to('.nav_links',{
      y:0,
      stagger:0.1,
    }, "<")

    this.openMenuTl.pause()

    if(this.menuIsOpen){
      this.openMenuTl.play()
    }else{
      this.openMenuTl.reverse()
    }
  }
}
