import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-normal-input',
  standalone: true,
  imports: [],
  templateUrl: './normal-input.component.html',
  styleUrl: './normal-input.component.scss',
})
export class NormalInputComponent implements OnChanges {
  @Input({ required: true }) count = 0;

  doubleCount = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['count']?.currentValue) {
      this.doubleCount = this.count * 2;
    }
  }
}
