import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aoc-app';
  result: number = 0;
  input: string;
  parsedInput: string[] = [];

  Day1Part1() {
    this.parsedInput=(this.input.split(" "));

    for (let index = 0; index < this.parsedInput.length; index++) {
      

    }


  }
}
