import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-integer-generator',
  templateUrl: './integer-generator.component.html',
  styleUrls: ['./integer-generator.component.css']
})
export class IntegerGeneratorComponent implements OnInit {

  minVal: any;
  maxVal: any;
  minError = false;
  maxError = false;
  rangeError = false;
  valid: boolean;
  randInt: number;
  clicked = false;
  copied = false;

  constructor(private clipboard: Clipboard) { }

  ngOnInit(): void {
  }

  isNumber(value: any) {
    return !isNaN(parseFloat(value)) && !isNaN(value - 0)
  }

  checkMin() {
    this.minError = false;
    if (!this.isNumber(this.minVal)) {
      this.minError = true;
    } else {
      this.minVal = Number(this.minVal);
    }
  }

  checkMax() {
    this.maxError = false;
    if (!this.isNumber(this.maxVal)) {
      this.maxError = true;
    } else {
      this.maxVal = Number(this.maxVal);
    }
  }

  checkRange() {
    this.rangeError = false;
    if (this.minVal && this.maxVal && (this.minVal >= this.maxVal)) {
      this.rangeError = true;
    }
  }

  checkValues() {
    this.checkMin();
    this.checkMax();
    this.checkRange();
    this.valid = !this.minError && !this.maxError && !this.rangeError ? true : false;
  }

  getInt() {
    this.clicked = true;
    this.copied = false;
    this.checkValues();
    console.log(this.valid);
    if (this.valid) {
      const min = Math.ceil(this.minVal);
      const max = Math.floor(this.maxVal);
      this.randInt = Math.floor(Math.random() * (max - min + 1) + min);
    } else {
      this.randInt = NaN;
    }
  }

  copyString(): void {
    if (this.valid) {
      this.clipboard.copy(this.randInt.toString());
      this.copied = true;
    }
  }
}
