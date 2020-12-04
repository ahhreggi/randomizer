import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ListsComponent } from './lists/lists.component';
import { NumbersComponent } from './numbers/numbers.component';
import { GamesComponent } from './games/games.component';
import { StringGeneratorComponent } from './string-generator/string-generator.component';
import { ListRandomizerComponent } from './list-randomizer/list-randomizer.component';
import { BobRossIpsumComponent } from './bob-ross-ipsum/bob-ross-ipsum.component';
import { DadJokesComponent } from './dad-jokes/dad-jokes.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'lists-and-strings', component: ListsComponent },
  { path: 'numbers', component: NumbersComponent },
  { path: 'games', component: GamesComponent },
  { path: 'lists-and-strings/password-generator', component: StringGeneratorComponent },
  { path: 'lists-and-strings/list-randomizer', component: ListRandomizerComponent },
  { path: 'lists-and-strings/bob-ross-ipsum', component: BobRossIpsumComponent },
  { path: 'lists-and-strings/dad-jokes', component: DadJokesComponent },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
