import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ListsComponent } from './lists/lists.component';
import { NumbersComponent } from './numbers/numbers.component';
import { GamesComponent } from './games/games.component';
import { StringGeneratorComponent } from './string-generator/string-generator.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'lists', component: ListsComponent },
  { path: 'numbers', component: NumbersComponent },
  { path: 'games', component: GamesComponent },
  { path: 'lists/string-generator', component: StringGeneratorComponent },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
