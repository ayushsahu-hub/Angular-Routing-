import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
   modalOpen:boolean =false;
   items =[
     {title:'Why is the Sky Blue',content:'It is because of air'},
     {title:'Why is the orange taste sour?',content:'It is because of citric acid in them.'},
     {title:'What is the color of the cat?',content:'It is because of endorphins in them.'}
   ]
  constructor() { }

  ngOnInit(): void {    
  }
}
