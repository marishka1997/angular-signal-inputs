import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NormalInputComponent } from './normal-input/normal-input.component';
import { SignalInputComponent } from './signal-input/signal-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignalInputComponent, NormalInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-signal-inputs';
  count = 0;

  increaseCount(): void {
    this.count++;
  }
}
