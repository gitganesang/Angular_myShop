import { Component, OnInit } from '@angular/core';
import { ImyCard } from 'src/app/interfaces/myCard-interfaces';
import { myCard } from 'src/app/mock/myCard';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.scss']
})
export class MyCardComponent implements OnInit {

  myCardInfo: ImyCard;

  constructor() {
    this.myCardInfo = myCard;
  }

  ngOnInit(): void {
  }

}
