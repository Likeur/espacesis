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
      description: "Les DevFests sont des conférences locales organisées par les groupes de développeurs Google (GDG) dans le monde entier. Chaque DevFest est conçu par ses organisateurs locaux pour répondre aux besoins et aux intérêts de la communauté de développeurs locale.",
      albumLink : "https://photos.app.goo.gl/n4dLuFcuynJyKRkp6"
    },
    {
      id:2,
      linkphoto: '../../../assets/images/welcomeday.JPG',
      name : 'welcome Day',
      description: "Est une journée pour acceuillir les nouveau membres du club et leur présenter l'objectif du club , le bénéfice, la vision , la présentation des projets par les anciens membres et quelques retours d'expériences de la part des alumnis du club pour encourager les nouveaux membres du club",
      albumLink : ""
    },
    {
      id:3,
      linkphoto: '../../../assets/images/codefiesta.jpg',
      name : 'Code Fiesta Ed2',
      description: "Code fiesta est un évennement dans lesquels les développeurs de la communauté se rétrouve pour faire differentes activités comme des challenges de code , des live coding , festoyer et quelques retours d'experiences.",
      albumLink : "https://photos.app.goo.gl/tns9LhFvjnb9CjGy8"
    },
  ]
}
