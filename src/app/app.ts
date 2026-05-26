import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar'; // 1. ייבוא הקומפוננטה
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('my-portfolio1');
}
