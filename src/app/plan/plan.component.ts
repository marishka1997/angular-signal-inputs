import { ChangeDetectionStrategy, Component, effect, OnInit, signal } from '@angular/core';
import { PlanItemComponent } from '../plan-item/plan-item.component';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [PlanItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.scss',
})
export class PlanComponent implements OnInit {
  planType: 'monthly' | 'yearly' | 'daily' = 'monthly';

  value = signal(0);

  constructor() {
    const ref = effect(() => {
      console.log(this.value());
    });
  }

  ngOnInit() {}

  changePlan() {
    this.planType = this.planType == 'monthly' ? 'yearly' : 'monthly';
    this.value.update((v) => v + 1);
  }

  changeToSamePlan() {
    this.planType = this.planType == 'daily' ? 'yearly' : 'daily';
  }
}
