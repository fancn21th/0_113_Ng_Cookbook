import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RandomNumbersComponent } from "./random-numbers.component";
import { NumberComponent } from "./number/number.component";
import { RandomActiveDirective } from "./random-active.directive";

@NgModule({
  declarations: [
    RandomNumbersComponent,
    NumberComponent,
    RandomActiveDirective
  ],
  imports: [CommonModule],
  exports: [RandomNumbersComponent]
})
export class RandomNumbersModule {}
