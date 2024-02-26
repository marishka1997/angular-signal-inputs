import {
  Component,
  OnInit,
  input,
  ChangeDetectionStrategy,
  computed,
  Input,
  SimpleChanges,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-plan-item',
  standalone: true,
  templateUrl: './plan-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./plan-item.component.scss'],
})
export class PlanItemComponent implements OnInit {
  planType = input<string>();
  paymentPerType = computed(() =>
    this.planType() == 'yearly' || this.planType() == 'daily' ? 100 : 150
  );

  calls = 0;

  constructor() {}

  ngOnInit() {}

  // ngOnChanges(changes: SimpleChanges) {
  //   const planType = changes['planType'].currentValue;
  //   this.paymentPerType = planType == 'yearly' ? 100 : 150;
  // }

  getCalls() {
    return ++this.calls;
  }
}
