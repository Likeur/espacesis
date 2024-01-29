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
      photoLink : '../../../assets/images/mmc.jpg',
      name:'Chrinovic MM',
      post: 'Lead',
      linkedin: '...',
      instagram : '...'
    },
    {
      id:2,
      photoLink : '../../../assets/images/like.jpg',
      name:'John Muska',
      post: 'co-lead',
      linkedin: '...',
      instagram : '...'
    },
    {
      id:3,
      photoLink : '../../../assets/images/christian.jpg',
      name:'Christian',
      post: 'co-lead',
      linkedin: '...',
      instagram : '...'
    },
    {
      id:4,
      photoLink : '../../../assets/images/like.jpg',
      name:'Likeur off',
      post: 'Designer',
      linkedin: '...',
      instagram : '...'
    },
    {
      id:5,
      photoLink : '../../../assets/images/like.jpg',
      name:'Athia',
      post: 'Tresorière',
      linkedin: '...',
      instagram : '...'
    },
    {
      id:6,
      photoLink : '../../../assets/images/like.jpg',
      name:'Altha',
      post: 'MC & Sec',
      linkedin: '...',
      instagram : '...'
    },
    {
      id:7,
      photoLink : '../../../assets/images/glo.jpg',
      name:'Glodie Lukose',
      post: 'Web',
      linkedin: '...',
      instagram : '...'
    },
    {
      id:8,
      photoLink : '../../../assets/images/lkanan.jpg',
      name:'L kanan',
      post: 'ML',
      linkedin: '...',
      instagram : '...'
    }
  ]
} 
