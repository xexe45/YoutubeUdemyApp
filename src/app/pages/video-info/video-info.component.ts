import { Component, OnInit } from "@angular/core";
import { YoutubeService } from "../../services/youtube.service";
import { Video } from "../../models/youtube.models";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-video-info",
  templateUrl: "./video-info.component.html",
  styleUrls: ["./video-info.component.scss"],
})
export class VideoInfoComponent implements OnInit {
  video: any = {};
  id;
  videos: Video[] = [];
  constructor(
    private youtubeService: YoutubeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params["id"];
      this.getVideoInfo(this.id);
      this.getPlayLists();
    });
  }

  getVideoInfo(id: string) {
    this.youtubeService.getVideoItem(id).subscribe((resp: any[]) => {
      this.video = resp[0];
      console.log(this.video);
    });
  }

  getPlayLists() {
    this.youtubeService.getPlaylistItems().subscribe((resp) => {
      this.videos.push(...resp);
      console.log(this.videos);
    });
  }

  watchVideo(video: Video) {
    console.log(this.id);
    this.router.navigate(["/watch", video.resourceId.videoId]);
  }
}
