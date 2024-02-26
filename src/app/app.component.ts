import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExampleComponentComponent } from './example-component/example-component.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExampleComponentComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-signal-inputs';
  value = 'test';
}
