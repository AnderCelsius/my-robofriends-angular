import { Component, Input } from '@angular/core';
import { IRobot } from '../model/robot';
import "tachyons";
import {  NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { ROBOT_SETS, ROBOT_SETS_VALUE } from '../common/constants';

// Use NgClass when you want to dynamically add styles to template

@Component({
  selector: 'robot-card',
  standalone: true,
  imports: [NgIf, NgSwitch, NgSwitchCase],
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

  robotSets = ROBOT_SETS;
  ROBOT_TYPE = ROBOT_SETS_VALUE;

  constructor() {
    this.robot = {
      id: 0,
      name: 'Robot',
      username: 'robot',
      email: 'robot@email.com',
      iconUrl: '',
      set: 'set1'
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

