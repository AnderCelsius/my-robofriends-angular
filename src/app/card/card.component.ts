import { Component, Input } from '@angular/core';
import { IRobot } from '../model/robot';
import "tachyons";
import {  NgIf } from '@angular/common';

// Use NgClass when you want to dynamically add styles to template

@Component({
  selector: 'robot-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({
    required: true,
  })
  robot: IRobot;

  @Input({
    required: true,
  })
  isEven: boolean = false;

  constructor() {
    this.robot = {
      id: 0,
      name: 'Robot',
      username: 'robot',
      email: 'robot@email.com',
      iconUrl: ''
    };
    
  }

  isImageVisible(): string {
    return this.robot && this.robot.iconUrl;
  }

  onRobotClicked() {
    console.log('onRobotClicked', this.robot?.id);
  }

  applyEvenStyle() {
    return "is-even"
  }

  cardClasses() {

  }
}

