import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { slideAnimation } from './slide.animation';


@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [slideAnimation]
})
export class CarouselComponent implements OnInit {
  currentIndex = 0;
  @Input() slideFor!: string
  slides: any = [];

  constructor() {
    this.preloadImages();
  }
  ngOnInit(): void {
    this.setSlider();

  }

  setSlider() {
    if (this.slideFor === 'clients') {
      this.slides = [
        {
          src: 'assets/img/client.png'
        },
        {
          src: 'assets/img/client.png'
        },
        {
          src: 'assets/img/client.png'
        },
        {
          src: 'assets/img/client.png'
        },
        {
          src: 'assets/img/client.png'
        },
      ];
    }
    if (this.slideFor === 'home') {
      this.slides = [
        {
          src: 'assets/img/carousel-1.jpg'
        },
        {
          src: 'assets/img/carousel-2.jpg'
        },
        {
          src: 'assets/img/carousel-1.jpg'
        },
        {
          src: 'assets/img/carousel-2.jpg'
        },
        {
          src: 'assets/img/carousel-1.jpg'
        },
        {
          src: 'assets/img/carousel-2.jpg'
        },

      ];

    }
  }

  preloadImages() {
    this.slides.forEach((slide: any) => {
      (new Image()).src = slide.image;
    });
  }

  setCurrentSlideIndex(index: number) {
    this.currentIndex = index;
  }

  isCurrentSlideIndex(index: number) {
    return this.currentIndex === index;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex < this.slides.length - 1) ? ++this.currentIndex : 0;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex > 0) ? --this.currentIndex : this.slides.length - 1;
  }
}
