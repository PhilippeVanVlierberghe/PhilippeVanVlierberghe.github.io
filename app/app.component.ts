import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterOutlet} from '@angular/router';
import { slideOutAnimation } from './animations';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [slideOutAnimation]
})

export class AppComponent {
  title = "Portfolio Philippe Van Vlierberghe";
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  constructor(private titleService: Title) {
    this.titleService.setTitle("Portfolio in Angular");

  }

}
