import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-telephone-number',
  templateUrl: './telephone-number.component.html',
  styleUrls: ['./telephone-number.component.css']
})
export class TelephoneNumberComponent implements OnInit {

  number;
  copied = false;
  areaCode = ["800", "844", "855", "866", "877", "888"];
  numbers = [];

  constructor(private clipboard: Clipboard) { }

  ngOnInit(): void {
    this.getNumber();
  }

  copyString(): void {
    this.clipboard.copy(this.number);
    this.copied = true;
  }

  getNumber(): void {
    let strNum;
    let randNum = Math.floor(Math.random() * 100);
    if (randNum === 0) {
      strNum = '00';
    } else if (randNum < 10) {
      strNum = '0' + randNum.toString();
    } else {
      strNum = randNum.toString();
    }
    strNum = this.areaCode[Math.floor(Math.random() * this.areaCode.length)] + "-555-01" + strNum;
    if (this.numbers.includes(strNum)) {
      this.getNumber();
    } else {
      this.number = strNum;
    }
  }

  nextNumber(): void {
    if (this.numbers.length === 3) {
      this.numbers.splice(2, 1);
    }
    this.numbers.unshift(this.number);
    this.getNumber();
  }

}
