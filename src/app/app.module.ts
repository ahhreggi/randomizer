import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StringsComponent } from './strings/strings.component';
import { NumbersComponent } from './numbers/numbers.component';
import { GamesComponent } from './games/games.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { StringGeneratorComponent } from './string-generator/string-generator.component';
import { ListRandomizerComponent } from './list-randomizer/list-randomizer.component';
import { BobRossIpsumComponent } from './bob-ross-ipsum/bob-ross-ipsum.component';
import { DadJokesComponent } from './dad-jokes/dad-jokes.component';
import { TelephoneNumberComponent } from './telephone-number/telephone-number.component';
import { IntegerGeneratorComponent } from './integer-generator/integer-generator.component';
import { DiceRollerComponent } from './dice-roller/dice-roller.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClipboardModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    StringsComponent,
    NumbersComponent,
    GamesComponent,
    StringGeneratorComponent,
    ListRandomizerComponent,
    BobRossIpsumComponent,
    DadJokesComponent,
    TelephoneNumberComponent,
    IntegerGeneratorComponent,
    DiceRollerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
