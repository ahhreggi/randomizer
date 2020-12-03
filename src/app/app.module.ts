import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListsComponent } from './lists/lists.component';
import { NumbersComponent } from './numbers/numbers.component';
import { GamesComponent } from './games/games.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { StringGeneratorComponent } from './string-generator/string-generator.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClipboardModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ListsComponent,
    NumbersComponent,
    GamesComponent,
    StringGeneratorComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
