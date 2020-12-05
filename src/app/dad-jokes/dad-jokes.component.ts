import { Component, OnInit } from '@angular/core';
import { DadJokeService } from '../dad-jokes.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-dad-jokes',
  templateUrl: './dad-jokes.component.html',
  styleUrls: ['./dad-jokes.component.css'],
  animations: [
    trigger('visibilityChanged', [
      state('in', style({
        opacity: 0
      })),
      state('out', style({
        opacity: 1
      })),
      transition('in => out', animate('500ms')),
      transition('out => in', animate('500ms'))
    ])
  ]
})
export class DadJokesComponent implements OnInit {
  dadJoke = "";
  copied = false;
  hold = false;
  shortJoke: boolean;

  constructor(private dadJokeService: DadJokeService, private clipboard: Clipboard) {

  }

  ngOnInit(): void {
    this.getJoke();
  }

  getJoke() {
    if (!this.hold) {
      this.hold = true;
      this.dadJoke = "";
      setTimeout(() => {
        this.dadJokeService.getJoke()
          .subscribe(fetchedJoke => {
            this.dadJoke = fetchedJoke['joke'];
            if (this.dadJoke.length > 80) {
              this.shortJoke = false;
            } else {
              this.shortJoke = true;
            }
          });
        this.copied = false;
      }, 500);
      setTimeout(() => {
        this.hold = false;
      }, 500);
    }
  }

  copyString(): void {
    this.clipboard.copy(this.dadJoke);
    this.copied = true;
  }

}
