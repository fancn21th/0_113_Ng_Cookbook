import { Injectable } from "@angular/core";
import { RandomActiveDirective } from "./random-active.directive";

@Injectable({
  providedIn: "root"
})
export class RandomActiveService {
  private elements: Array<RandomActiveDirective> = [];
  private t: number;
  private activatedElement: RandomActiveDirective;

  constructor() {}

  private activateElement() {
    const randomNumber = Math.floor(Math.random() * this.elements.length);
    this.activatedElement = this.elements[randomNumber];
  }

  register(element) {
    this.elements.push(element);
    window.clearInterval(this.t);
    this.t = window.setInterval(this.activateElement.bind(this), 1000);
  }

  isActive(element) {
    return this.activatedElement === element;
  }
}
