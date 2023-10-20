import { Component } from '@angular/core';
import { AnadirCochesComponent } from './anadir-coches/anadir-coches.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MueveTIC';
}

