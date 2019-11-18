import { Component, OnInit } from "@angular/core";
import { images } from "../images";

@Component({
  selector: "app-image-gallery",
  templateUrl: "./image-gallery.component.html",
  styleUrls: ["./image-gallery.component.css"]
})
export class ImageGalleryComponent implements OnInit {
  constructor() {}
  images = images;
  isShowBabbel = true;

  toggleDisplayBabbel() {
    this.isShowBabbel = !this.isShowBabbel;
  }

  isShowGobalKnowledge = true;
  toggleDisplayGobalKnowledge() {
    this.isShowGobalKnowledge = !this.isShowGobalKnowledge;
  }

  isShowSoloLearn = true;
  toggleDisplaySoloLearn() {
    this.isShowSoloLearn = !this.isShowSoloLearn;
  }

  ngOnInit() {}
}
