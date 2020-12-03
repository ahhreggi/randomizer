import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-string-generator',
  templateUrl: './string-generator.component.html',
  styleUrls: ['./string-generator.component.css']
})
export class StringGeneratorComponent implements OnInit {

  alphaLower = 'abcdefghijklmnopqrstuvwxyz';
  alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  numbers = '1234567890';
  special = '!@#$%.';
  generatedString: string;
  length = 12;
  enableNumbers = true;
  enableSpecial = true;
  copied = false;
  level = 2;

  constructor(private clipboard: Clipboard) { }

  ngOnInit(): void {
    this.generateString();
  }

  generateString(): void {
    // Concatenate valid string groups
    // TODO: Check if user wants certain groups, mainly numbers and special characters, and specify length
    let chars = this.alphaLower + this.alphaUpper;
    // Add numbers if enabled
    if (this.enableNumbers) {
      chars += this.numbers;
    }
    // Add special characters if enabled
    if (this.enableSpecial) {
      chars += this.special;
    }
    // Get chars length
    const charsLength = chars.length;
    // Generate string
    let str = '';
    for (let i = 0; i < this.length; i++) {
      str += chars.charAt(Math.floor(Math.random() * charsLength));
    }
    const valid = this.checkReq(str);
    if (!valid) {
      this.generateString();
    } else {
      this.generatedString = str;
      this.copied = false;
      this.evalSecurity(str);
    }
  }

  copyString(): void {
    this.clipboard.copy(this.generatedString);
    this.copied = true;
  }

  checkReq(str: string): boolean {
    let lowerCheck = false;
    let upperCheck = false;
    let numberCheck = false;
    let specialCheck = false;
    for (const c of this.alphaLower) {
      if (str.includes(c)) {
        lowerCheck = true;
        break
      }
    }
    for (const c of this.alphaUpper) {
      if (str.includes(c)) {
        upperCheck = true;
        break
      }
    }
    if (this.enableNumbers) {
      for (const n of this.numbers) {
        if (str.includes(n)) {
          numberCheck = true;
          break
        }
      }
    }
    if (this.enableSpecial) {
      for (const s of this.special) {
        if (str.includes(s)) {
          specialCheck = true;
          break
        }
      }
    }
    return lowerCheck && upperCheck && (!this.enableNumbers || numberCheck) && (!this.enableSpecial || specialCheck);
  }

  makeShorter(): void {
    if (this.length > 4) {
      this.length -= 1
    }
    this.generateString();
  }

  makeLonger(): void {
    if (this.length < 20) {
      this.length += 1
    }
    this.generateString();
  }

  toggleNumbers() {
    this.enableNumbers = !this.enableNumbers;
    this.generateString();
  }

  toggleSpecial() {
    this.enableSpecial = !this.enableSpecial;
    this.generateString();
  }

  evalSecurity(pass: string): void {
    let rating = 0;
    rating += this.length;
    rating += this.enableNumbers ? 1 : 0;
    rating += this.enableSpecial ? 1 : 0;
    if (rating >= 15) {
      rating = 4;
    } else if (rating === 14) {
      rating = 3;
    } else if (rating === 13) {
      rating = 2;
    } else {
      rating = 1;
    }
    this.level = rating;
  }

}
