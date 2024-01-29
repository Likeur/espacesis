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
      name : 'Devfest SE2023',
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia facere eius dolor officiis laboriosam a ut nihil odit ullam nisi nemo ad molestias nesciunt, fuga accusantium deserunt hic amet nulla!",
      albumLink : ""
    },
    {
      id:2,
      name : 'Soft Day',
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia facere eius dolor officiis laboriosam a ut nihil odit ullam nisi nemo ad molestias nesciunt, fuga accusantium deserunt hic amet nulla!",
      albumLink : ""
    },
    {
      id:3,
      name : 'Code Fiesta Ed2',
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia facere eius dolor officiis laboriosam a ut nihil odit ullam nisi nemo ad molestias nesciunt, fuga accusantium deserunt hic amet nulla!",
      albumLink : ""
    },
  ]
}
