import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('searchHero', { static: true }) search: Input;

  constructor() { }

  ngOnInit(): void {

  }

  searchHero(term: string) {
    console.log(term);
  }

}
