import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private _heroesService: HeroesService,
               private _route: Router ) { 

    console.log('CONSTRUCTOR');

  }
  
  ngOnInit(): void {

    this.getHeroes();

  }
  
  getHeroes() {
    this.heroes = this._heroesService.getHeroes();
  }

  showHero(idx: number) {
    console.log(idx);
    this._route.navigate( ['/hero', idx] );
  }
}
