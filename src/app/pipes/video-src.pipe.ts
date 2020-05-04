import { Pipe, PipeTransform } from "@angular/core";
import { Video } from "../models/youtube.models";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: "videoSrc",
})
export class VideoSrcPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(id: string): any {
    const url = `https://www.youtube.com/embed/${id}`;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
