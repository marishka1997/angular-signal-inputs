import { Component, computed, effect, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

function toUpperCase(value: string): string {
  return value.toUpperCase();
}

@Component({
  selector: 'app-example-component',
  standalone: true,
  imports: [FormsModule, RouterOutlet],
  templateUrl: './example-component.component.html',
  styleUrl: './example-component.component.scss',
})
export class ExampleComponentComponent {
  optionalInput = input<string>();

  optionalInputWithInitialvalue = input('OK, I have a value');

  optionalInputInitialValueWithTransform = input('OK, I have a value', {
    transform: toUpperCase,
  });

  optionalInputInitialValueWithAlias = input('OK, I have a value', {
    transform: toUpperCase,
    alias: 'optionalInputWithAlias',
  });

  requiredInput = input.required();

  requiredInputWithTransform = input.required({ transform: toUpperCase });

  requiredInputWithAlias = input.required({
    transform: toUpperCase,
    alias: 'withAlias',
  });

  computedValue = computed(
    () =>
      `optionalInput + optionalInputInitialValueWithAlias = ${this.optionalInput()} + ${this.optionalInputInitialValueWithAlias()}`
  );
}
