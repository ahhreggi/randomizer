import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { StringsComponent } from './strings/strings.component';
import { NumbersComponent } from './numbers/numbers.component';
import { GamesComponent } from './games/games.component';
import { StringGeneratorComponent } from './string-generator/string-generator.component';
import { ListRandomizerComponent } from './list-randomizer/list-randomizer.component';
import { BobRossIpsumComponent } from './bob-ross-ipsum/bob-ross-ipsum.component';
import { DadJokesComponent } from './dad-jokes/dad-jokes.component';
import { TelephoneNumberComponent } from './telephone-number/telephone-number.component';
import { IntegerGeneratorComponent } from './integer-generator/integer-generator.component';
import { DiceRollerComponent } from './dice-roller/dice-roller.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'strings', component: StringsComponent },
  { path: 'numbers', component: NumbersComponent },
  { path: 'games', component: GamesComponent },
  { path: 'strings/password-generator', component: StringGeneratorComponent },
  { path: 'strings/list-randomizer', component: ListRandomizerComponent },
  { path: 'strings/bob-ross-ipsum', component: BobRossIpsumComponent },
  { path: 'strings/dad-jokes', component: DadJokesComponent },
  { path: 'numbers/telephone-number', component: TelephoneNumberComponent },
  { path: 'numbers/integer-generator', component: IntegerGeneratorComponent },
  { path: 'games/dice-roller', component: DiceRollerComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
