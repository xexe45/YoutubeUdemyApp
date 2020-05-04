import { Component, OnInit, Input } from "@angular/core";
import { Video } from "../../models/youtube.models";

@Component({
  selector: "app-video",
  templateUrl: "./video.component.html",
  styleUrls: ["./video.component.scss"],
})
export class VideoComponent implements OnInit {
  @Input() video: any = {};

  constructor() {}

  ngOnInit(): void {}
}
