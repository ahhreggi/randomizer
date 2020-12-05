import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.css'],
  animations: [
    trigger('animateRoll', [
      state('rolling', style({
        opacity: 0
      })),
      state('rolled', style({
        opacity: 1
      })),
      transition('rolling => rolled', animate('150ms'))
    ]),
    trigger('animateSum', [
      state('rolling', style({
        opacity: 0
      })),
      state('rolled', style({
        opacity: 1
      })),
      transition('rolling => rolled', animate('300ms'))
    ])
  ]
})
export class DiceRollerComponent implements OnInit {

  amount = 2;
  diceValues = [];
  diceImages = [];
  sum: number;
  sumString: string;
  bgColor: string;
  rolling: boolean;
  count = true;

  dice = {
    1: "assets/images/dice/dice1.png",
    2: "assets/images/dice/dice2.png",
    3: "assets/images/dice/dice3.png",
    4: "assets/images/dice/dice4.png",
    5: "assets/images/dice/dice5.png",
    6: "assets/images/dice/dice6.png",
  }

  bgColors = [
    "dice-bg-red",
    "dice-bg-green",
    "dice-bg-blue",
    "dice-bg-purple",
    "dice-bg-pink",
    "dice-bg-teal"
  ]

  constructor() { }

  ngOnInit(): void {
    this.bgColor = this.bgColors[Math.floor(Math.random() * this.bgColors.length)];

  }


  getSumString(): string {
    let str = '';
    for (let dice of this.diceValues) {
      if (!str) {
        str += dice.toString();
      } else {
        str += " + " + dice.toString();
      }
    }
    str += " = ";
    return str;
  }

  showDice(): void {
    this.count = false;
  }

  roll(): void {
    if (!this.count) {
      // reset dice then wait 1 second
      this.rolling = true;
      this.diceValues = [];
      this.diceImages = [];
      this.sum = 0;
      ///
      for (let i = 0; i < this.amount; i++) {
        let num = Math.floor(Math.random() * 6) + 1;
        this.sum += num;
        this.diceValues.push(num);
        this.diceImages.push(this.dice[num]);
      }
      this.sumString = this.getSumString();
      setTimeout(() => {
        this.rolling = false;
      }, 400);
    }
  }

  addDie(): void {
    if (this.amount < 6) {
      this.amount += 1;
    }
    this.roll();
  }

  removeDie(): void {
    if (this.amount > 1) {
      this.amount -= 1;
    }
    this.roll();
  }

  reset(): void {
    this.count = true;
    this.rolling = true;
    this.diceValues = [];
    this.diceImages = [];
    this.sum = 0;
    console.log(this.count);
  }

}
