import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coffeshop';

  images = [ 
    {
      src:'https://placeimg.com/300/300/nature/6'
    },
    {
      src:'https://placeimg.com/300/300/nature/7'
    },
    {
      src:'https://placeimg.com/300/300/nature/8'
    },
    {
      src:'https://placeimg.com/300/300/nature/9'
    },
    {
      src:'https://placeimg.com/300/300/nature/2'
    },
  ];
 
  clientImages = [ 
    {
      src:'https://placeimg.com/300/300/nature/6'
    },
    {
      src:'https://placeimg.com/300/300/nature/7'
    },
    {
      src:'https://placeimg.com/300/300/nature/8'
    },
    {
      src:'https://placeimg.com/300/300/nature/9'
    },
    {
      src:'https://placeimg.com/300/300/nature/2'
    },
  ];
  index=0
  onChange(idx:any) {
    console.log(idx);
    this.index = idx;
  }
}
