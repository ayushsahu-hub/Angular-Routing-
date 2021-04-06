import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    {name:'James',age:24,job:'Designer',employed:true},
    {name:'Jill',age:25,job:'Engineer',employed:false},
    {name:'Elyse',age:26,job:'Designer',employed:true}
  ];
  headers =[
    {key:'name',label:'Name'},
    {key:'name',label:'Age'},
    {key:'job',label:'Job'},
    {key:'employed',label:'Have a Job?'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
