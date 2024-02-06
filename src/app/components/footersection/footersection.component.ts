import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footersection',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footersection.component.html',
})
export class FootersectionComponent {

  scrollToTop(){
    document.documentElement.scrollTop = 0
  }
}
