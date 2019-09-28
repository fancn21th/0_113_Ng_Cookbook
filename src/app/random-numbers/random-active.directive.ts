import { Directive, HostBinding } from "@angular/core";
import { RandomActiveService } from "./random-active.service";

@Directive({
  selector: "[active]"
})
export class RandomActiveDirective {
  @HostBinding("class.active") get className() {
    return this.randomActiveService.isActive(this);
  }

  constructor(private randomActiveService: RandomActiveService) {
    this.randomActiveService.register(this);
  }
}
