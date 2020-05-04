import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { YoutubeResponse } from "../models/youtube.models";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class YoutubeService {
  private url = "https://www.googleapis.com/youtube/v3/";
  private playlistsId = "UUuaPTYj15JSkETGnEseaFFg";
  private apiKey = "{{ YOUR_KEY }}";
  private nextPageToken = "";

  constructor(private http: HttpClient) {}

  getPlaylistItems() {
    const url = `${this.url}playlistItems`;

    const params = new HttpParams()
      .set("part", "snippet")
      .set("maxResults", "10")
      .set("key", this.apiKey)
      .set("playlistId", this.playlistsId);

    return this.http
      .get<YoutubeResponse>(url, { params })
      .pipe(
        map((resp) => {
          this.nextPageToken = resp.nextPageToken;
          return resp.items;
        }),
        map((items) => items.map((video) => video.snippet))
      );
  }

  getVideoItem(id: string) {
    const url = `${this.url}playlistItems`;
    const params = new HttpParams()
      .set("part", "snippet")
      .set("maxResults", "1")
      .set("key", this.apiKey)
      .set("videoId", id)
      .set("playlistId", this.playlistsId);

    return this.http
      .get<YoutubeResponse>(url, { params })
      .pipe(
        map((resp) => {
          return resp.items;
        }),
        map((items) => items.map((video) => video.snippet))
      );
  }
}
