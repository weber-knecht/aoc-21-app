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
    this.result = 0;
    this.parsedInput=this.input.split(" ");
    for (let index = 1; index < this.parsedInput.length; index++) {
      let previousElement = this.parsedInput[index-1];
      let currentElement = this.parsedInput[index];

      if (+currentElement > +previousElement) {
        this.result++;
      }
    }
  }

  Day1Part2() {
    this.result = 0;
    this.parsedInput=this.input.split(" ");

    let prv = 0;
    let cur = 0;
    for (let i = 0; i < this.parsedInput.length; i++) {
      cur = +this.parsedInput[i]
      for (let j = i+1; j < i + 3; j++) {
        cur += +this.parsedInput[j]
      }
      console.log(cur + " > " + prv);
      if (cur > prv && prv != 0) {
        this.result++;
      }
      prv = cur;
      cur = 0;
    }
  }

}
