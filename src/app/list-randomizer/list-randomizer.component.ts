import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-randomizer',
  templateUrl: './list-randomizer.component.html',
  styleUrls: ['./list-randomizer.component.css']
})
export class ListRandomizerComponent implements OnInit {

  currentInput: string;
  listOutput: string[];

  constructor() { }

  ngOnInit(): void {

  }

  clearList(): void {
    this.currentInput = '';
    this.listOutput = [];
  }

  removeDupes(inputText: string): void {
    this.listOutput = [...new Set(this.listOutput)];
    this.currentInput = this.listOutput.join('\n');
  }

  sortList(inputText: string): void {
    if (inputText) {
      this.listOutput = inputText.trim().split('\n').filter(Boolean);
      this.listOutput.sort();
      this.currentInput = this.listOutput.join('\n');
    }
  }

  randomizeList(inputText: string): void {
    if (inputText) {
      let items = inputText.trim().split('\n').filter(Boolean);
      for (let i = items.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
      }
      this.listOutput = items;
      this.currentInput = this.listOutput.join('\n');
    } else {
      this.listOutput = [];
    }
  }


}
