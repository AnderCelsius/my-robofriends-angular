import { Component } from '@angular/core';
import { NgFor, TitleCasePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { IRobot } from './model/robot';
import { FormsModule } from '@angular/forms';
import { ROBOTS } from '../../robots.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, FormsModule, NgFor, TitleCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'my-first-project';
  robots: IRobot[] = [];
  filteredRobots: IRobot[] = [];
  searchTerm: string = '';

  items: any[] = [];
  validationError: string | null = null;

  constructor() {
    this.robots = [];
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

  addItem(event: any): void {
    const inputValue = event.target.value.trim().toLowerCase();
    if (inputValue) {
      if (!this.items.includes(inputValue)) {
        this.items.push(inputValue);
        event.target.value = ''; // Clear the input field after adding
        this.validationError = null; // Clear any previous validation error
      } else {
        this.validationError = 'Item already exists in the list.';
      }
    }
  }

  clearItems(): void {
    this.items = [];
    this.validationError = null; // Clear any validation error when list is cleared
  }
}
