import { Component } from '@angular/core';

@Component({
  selector: 'app-teamsection',
  standalone: true,
  imports: [],
  templateUrl: './teamsection.component.html',
  styles: ``
})
export class TeamsectionComponent {

  teamList1 = [
    {
      id:1,
      photoLink : '../../../assets/images/like.jpg',
      name:'Chrinovic MM',
      post: 'Lead',
      linkedin: '...'
    },
    {
      id:2,
      photoLink : '../../../assets/images/like.jpg',
      name:'John Muska',
      post: 'co-lead',
      linkedin: '...'
    },
    {
      id:3,
      photoLink : '../../../assets/images/like.jpg',
      name:'Christian',
      post: 'co-lead',
      linkedin: '...'
    },
    {
      id:4,
      photoLink : '../../../assets/images/like.jpg',
      name:'Likeur off',
      post: 'Designer',
      linkedin: '...'
    },
    {
      id:5,
      photoLink : '../../../assets/images/like.jpg',
      name:'Athia',
      post: 'Tresorière',
      linkedin: '...'
    },
    {
      id:6,
      photoLink : '../../../assets/images/like.jpg',
      name:'Altha',
      post: 'MC & Sec',
      linkedin: '...'
    },
    {
      id:7,
      photoLink : '../../../assets/images/like.jpg',
      name:'Glodie Lukose',
      post: 'Web',
      linkedin: '...'
    },
    {
      id:8,
      photoLink : '../../../assets/images/like.jpg',
      name:'L kanan',
      post: 'ML',
      linkedin: '...'
    }
  ]
} 
