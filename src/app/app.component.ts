import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { IRobot } from './model/robot';
import { FormsModule } from '@angular/forms';
import { ROBOTS } from '../../robots.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CardComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'my-first-project';
  robots: IRobot[] = [];
  filteredRobots: IRobot[] = [];
  searchTerm: string = '';

  constructor() {
    this.robots = ROBOTS;
    this.filteredRobots = this.robots;
  }


  onRobotClicked(robot: IRobot): void {
    console.log('onRobotClicked', robot);
  }

  robotTrackBy(index: number, robot: IRobot): number {
    return robot.id;
  }

  onSearchChange(searchTerm: string): void {
    searchTerm = searchTerm.toLowerCase();
    this.filteredRobots = this.robots.filter(robot => 
      robot.name.toLowerCase().includes(searchTerm) || 
      robot.username.toLowerCase().includes(searchTerm)
    );
  }
}
