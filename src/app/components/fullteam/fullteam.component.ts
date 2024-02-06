import { Component } from '@angular/core';

@Component({
  selector: 'app-fullteam',
  standalone: true,
  imports: [],
  templateUrl: './fullteam.component.html',
})
export class FullteamComponent {

  teamList = [
    {
      id:1,
      photoLink : '../../../assets/images/mmc.jpg',
      name:'Chrinovic MM',
      post: 'Lead',
      linkedin: 'https://www.linkedin.com/in/chrinovic-mukeba-5aa765230/',
      instagram : 'https://www.instagram.com/chrinovicmm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },
    {
      id:2,
      photoLink : '../../../assets/images/muska.jpg',
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
      linkedin: '',
      instagram : 'https://www.instagram.com/_i_am_chris_tshikwata?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },
    {
      id:4,
      photoLink : '../../../assets/images/like.jpg',
      name:'Likeur off',
      post: 'Designer',
      linkedin: 'https://www.linkedin.com/in/likeur-off-47984327a/',
      instagram : 'https://www.instagram.com/likeur_off/'
    },
    {
      id:5,
      photoLink : '../../../assets/images/atia.jpg',
      name:'Athia',
      post: 'Tresorière',
      linkedin: '...',
      instagram : '...'
    },
    {
      id:6,
      photoLink : '../../../assets/images/altha.jpg',
      name:'Altha',
      post: 'MC & Sec',
      linkedin: '',
      instagram : 'https://www.instagram.com/altha_msk?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },
    {
      id:7,
      photoLink : '../../../assets/images/glo.jpg',
      name:'Glodie Lukose',
      post: 'Web',
      linkedin: '...',
      instagram : 'https://www.instagram.com/glodielukose?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
    },
    {
      id:8,
      photoLink : '../../../assets/images/lkanan.jpg',
      name:'L kanan',
      post: 'ML',
      linkedin: '...',
      instagram : '...'
    },
    {
      id:9,
      photoLink : '../../../assets/images/jules.jpg',
      name:'Jules cesar',
      post: 'web',
      linkedin: '...',
      instagram : '...'
    },
    {
      id:10,
      photoLink : '../../../assets/images/jus.jpg',
      name:'Arcel',
      post: 'designer co',
      linkedin: '...',
      instagram : '...'
    },
    {
      id:11,
      photoLink : '../../../assets/images/fasturtle.jpg',
      name:'Wonder',
      post: 'event planner',
      linkedin: '...',
      instagram : '...'
    },
    {
      id:12,
      photoLink : '../../../assets/images/lmr.jpg',
      name:'Lmr lumière',
      post: 'ML',
      linkedin: '...',
      instagram : '...'
    },
    {
      id:13,
      photoLink : '../../../assets/images/rooney.jpg',
      name:'Rooney',
      post: 'Iot',
      linkedin: '...',
      instagram : '...'
    }
  ]
}
