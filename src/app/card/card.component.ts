import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IRobot } from '../model/robot';
import "tachyons";


@Component({
  selector: 'robot-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({
    required: true,
  })
  robot: IRobot;

  @Output()
  robotSelected = new EventEmitter<IRobot>();

  constructor() {
    this.robot = {
      id: 0,
      name: 'Robot',
      username: 'robot',
      email: 'robot@email.com',
      iconUrl: ''
    };
    
  }

  onRobotClicked() {
    console.log('onRobotClicked', this.robot?.id);
    this.robotSelected.emit(this.robot);
  }

  // onRobotViewed(event: Event) {
  //   console.log('onRobotViewed', event);
  // }
}