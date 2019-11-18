import { Component, OnInit } from '@angular/core';
import { files } from "../files";
import {myAppLinks} from "../myAppLinks";

@Component({
  selector: 'app-my-app-store',
  templateUrl: './my-app-store.component.html',
  styleUrls: ['./my-app-store.component.css']
})
export class MyAppStoreComponent implements OnInit {

  constructor( ) { }
  files = files;
  myAppLinks =myAppLinks;

  teller = 0;
  ngOnInit() {

  }

}
