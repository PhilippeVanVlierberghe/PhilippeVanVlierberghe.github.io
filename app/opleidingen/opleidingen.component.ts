import { Component, OnInit } from "@angular/core";
import { course } from "../courses";

@Component({
  selector: "app-opleidingen",
  templateUrl: "./opleidingen.component.html",
  styleUrls: ["./opleidingen.component.css"]
})
export class OpleidingenComponent implements OnInit {
  constructor() {}
  courses = course;
  ngOnInit() {}
}
