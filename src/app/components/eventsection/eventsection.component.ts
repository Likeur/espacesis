import { Component } from '@angular/core';

@Component({
  selector: 'app-eventsection',
  standalone: true,
  imports: [],
  templateUrl: './eventsection.component.html',
  styles: ``
})
export class EventsectionComponent {

  eventList = [
    {
      id:1,
      linkphoto: '../../../assets/images/devfest2.jpg',
      name : 'Devfest SE2023',
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia facere eius dolor officiis laboriosam a ut nihil odit ullam nisi nemo ad molestias nesciunt, fuga accusantium deserunt hic amet nulla!",
      albumLink : "https://photos.app.goo.gl/n4dLuFcuynJyKRkp6"
    },
    {
      id:2,
      linkphoto: '../../../assets/images/welcomeday.JPG',
      name : 'welcom Day',
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia facere eius dolor officiis laboriosam a ut nihil odit ullam nisi nemo ad molestias nesciunt, fuga accusantium deserunt hic amet nulla!",
      albumLink : ""
    },
    {
      id:3,
      linkphoto: '../../../assets/images/codefiesta.jpg',
      name : 'Code Fiesta Ed2',
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia facere eius dolor officiis laboriosam a ut nihil odit ullam nisi nemo ad molestias nesciunt, fuga accusantium deserunt hic amet nulla!",
      albumLink : "https://photos.app.goo.gl/tns9LhFvjnb9CjGy8"
    },
  ]
}
