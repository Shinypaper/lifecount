import { Component } from '@angular/core';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  lifeLeft = Date

  getLife() {
    const today = new Date()
    const targetDate = new Date(this.lifeLeft.toString())
    const weeks = Math.round((today.getTime() - targetDate.getTime()) / 604800000)
    const lifeUsed = Array.from({ length: weeks }, (v, k) => k + 1);
    const death = targetDate.setDate(targetDate.getDate() + (365 * 80))
    const deathDate = new Date(death)
    const deathWeeks = Math.round((deathDate.getTime() - today.getTime()) / 604800000)
    const deathArray = Array.from({ length: deathWeeks }, (v, k) => k + 1);
    return { lifeUsed, deathArray }
  }
}
