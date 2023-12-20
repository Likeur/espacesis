import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  navLinks = [
    {
      name : 'Acceuil',
      path : '../home',
    },
    {
      name : 'à propos',
      path : '../about',
    },
    {
      name : 'blog',
      path : '../blog',
    },
  ]

  toggleMenu(){
    const menuToggle = document.querySelector('.menu__toggle')!
    const barUn = document.querySelector('#bar-1')!
    const barDeux = document.querySelector('#bar-2')!

    menuToggle.classList.toggle('h-72')
    menuToggle.classList.toggle('p-8')
    barUn.classList.toggle('rotate-45')
    barUn.classList.toggle('absolute')
    barDeux.classList.toggle('mt-2')
    barDeux.classList.toggle('-rotate-45')
  }
}
