import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-feedback',
  templateUrl: './clients-feedback.component.html',
  styleUrls: ['./clients-feedback.component.css']
})
export class ClientsFeedbackComponent implements OnInit {
  @Input() slideFor!: string;
  public images: any = [];
  constructor() {}
  ngOnInit(): void {

  }
}
