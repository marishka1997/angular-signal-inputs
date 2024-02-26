import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlanComponent } from './plan/plan.component';
import { PlanItemComponent } from './plan-item/plan-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlanComponent, PlanItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-signal-inputs';
}
