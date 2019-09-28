import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "number",
  templateUrl: "./number.component.html",
  styleUrls: ["./number.component.css"]
})
export class NumberComponent implements OnInit {
  @Input() text: String;
  constructor() {}
  ngOnInit() {}
}
