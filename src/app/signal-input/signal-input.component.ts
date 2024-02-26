import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-signal-input',
  standalone: true,
  imports: [],
  templateUrl: './signal-input.component.html',
  styleUrl: './signal-input.component.scss',
})
export class SignalInputComponent {
  count = input.required<number>();

  doubleCount = computed(() => this.count() * 2);
}
