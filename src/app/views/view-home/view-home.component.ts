import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent implements OnInit {
  stats =[
    {value:22,label:'No. Of Users'},
    {value:900,label:'Revenue'},
    {value:50,label:'satisfaction score'}
  ];
  items: [
    {image:'../../../assets/images/couch.jpeg',
    title:'Couch',description:'This is fantastic Couch'},
    {image:'/assets/images/dresser.jpeg',
    title:'Dresser',description:'This is fantastic dresser'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
