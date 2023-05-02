import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2 *ngIf="displayName; else nameElseBlock">code evolution2</h2>
    <ng-template #nameElseBlock>
      <h2>Name is hidden</h2>
    </ng-template>

    <div *ngIf="displayName; then thenBlock; else newElseBlock"></div>
    <ng-template #thenBlock>
      <p>code evolution</p>
    </ng-template>

    <ng-template #newElseBlock>
      <p>Hidden</p>
    </ng-template>

    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You picked red color</div>
      <div *ngSwitchCase="'blue'">You picked blue color</div>
      <div *ngSwitchCase="'green'">You picked green color</div>
      <div *ngSwitchDefault>Pick again</div>
    </div>

    <div *ngFor="let color of colors; index as i">
      <h2>{{ i }} {{ color }}</h2>
    </div>

    <div *ngFor="let color of colors; first as f">
      <h2>{{ f }} {{ color }}</h2>
    </div>

    <div *ngFor="let color of colors; last as l">
      <h2>{{ l }} {{ color }}</h2>
    </div>

    <!--even as e and odd as o-->
  `,
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  displayName = false;
  color = 'green';
  public colors = ['red', 'blue', 'green', 'yellow'];
}
