import { Component, OnInit } from "@angular/core";
import { YoutubeService } from "../../services/youtube.service";
import { Video } from "../../models/youtube.models";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  videos: Video[] = [];

  constructor(private youtubeService: YoutubeService, private router: Router) {}

  ngOnInit(): void {
    this.youtubeService.getPlaylistItems().subscribe((resp) => {
      this.videos.push(...resp);
      console.log(this.videos);
    });
  }

  watchVideo(video: Video) {
    this.router.navigate(["/watch", video.resourceId.videoId]);
  }
}
