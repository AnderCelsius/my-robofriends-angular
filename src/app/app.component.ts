import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { IRobot } from './model/robot';
import { ROBOTS } from '../../robots.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'my-first-project';
  robots: IRobot[] = [];

  robot1: IRobot = ROBOTS[0];
  robot2: IRobot = ROBOTS[1];
  robot3: IRobot = ROBOTS[2];
  robot4: IRobot = ROBOTS[3];

  constructor() {
    this.robots = ROBOTS;
  }

  onRobotClicked(robot: IRobot): void {
    console.log(robot);
  }

  onRobotViewed(event: MouseEvent): void {
    console.log(event);
  }
}
