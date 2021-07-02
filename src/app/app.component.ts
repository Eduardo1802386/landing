import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public cards:Array<any>=[]
  ngOnInit(): void {
    this.cards=[
      {
      title:"Video 1",
      subtitle:"subtitle video 1" ,
      img:"https://picsum.photos/536/354" 
    },

    {
      title:"Video 2",
      subtitle:"subtitle video 2",
      img:"https://picsum.photos/536/354" 
       
    },

    {
      title:"Video 3",
      subtitle:"subtitle video 3" ,
      img:"https://picsum.photos/536/354" 
    }

    ]

    
  }

  title = 'landingpage-app';

}
