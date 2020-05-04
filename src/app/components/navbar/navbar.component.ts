import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  open = true;

  @Output() emitEvent = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.open = !this.open;
    this.emitEvent.emit(this.open);
  }
}
