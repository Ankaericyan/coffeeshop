// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { ClientsFeedbackComponent } from './clients-feedback.component';

// describe('ClientsFeedbackComponent', () => {
//   let component: ClientsFeedbackComponent;
//   let fixture: ComponentFixture<ClientsFeedbackComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ ClientsFeedbackComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(ClientsFeedbackComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });




// // ----------------------
// import {
//   Component,
//   OnInit,
// } from '@angular/core';
// import { slideAnimation } from './slide.animation';


// @Component({
//   selector: 'clients-feedback',
//   templateUrl: './clients-feedback.component.html',
//   styleUrls: ['./clients-feedback.component.css'],
//   animations: [slideAnimation]
// })
// export class CarouselComponent implements OnInit {
//   currentIndex = 0;
//   slides = [
//     {image: 'assets/img/carousel-1.jpg', description: 'Image 00'},
//     {image: 'assets/img/carousel-2.jpg', description: 'Image 01'},
//     {image: 'assets/img/carousel-1.jpg', description: 'Image 02'},
//     {image: 'assets/img/carousel-2.jpg', description: 'Image 03'},
//     {image: 'assets/img/carousel-1.jpg', description: 'Image 04'}
//   ];

//   constructor() {
//     this.preloadImages();
//   }
//   ngOnInit(): void {

//   }

//   preloadImages() {
//     this.slides.forEach(slide => {
//       (new Image()).src = slide.image;
//     });
//   }

//   setCurrentSlideIndex(index:number) {
//     this.currentIndex = index;
//   }

//   isCurrentSlideIndex(index:number) {
//     return this.currentIndex === index;
//   }

//   prevSlide() {
//     this.currentIndex = (this.currentIndex < this.slides.length - 1) ? ++this.currentIndex : 0;
//   }

//   nextSlide() {
//     this.currentIndex = (this.currentIndex > 0) ? --this.currentIndex : this.slides.length - 1;
//   }
// }
