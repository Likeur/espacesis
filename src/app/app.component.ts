import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import Lenis from '@studio-freight/lenis'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.lenisInit()
  }

  

  lenisInit(){
    const lenis = new Lenis()

    lenis.on('scroll', ($_e:any) => {
      console.log($_e)
    })

    function raf(time:any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    }
  }
