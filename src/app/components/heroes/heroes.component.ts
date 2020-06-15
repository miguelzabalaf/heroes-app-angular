import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];

  constructor( private _heroesService: HeroesService ) { 
    console.log('CONSTRUCTOR');
  }
  
  ngOnInit(): void {

    this.getHeroes();

  }
  
  getHeroes() {
    this.heroes = this._heroesService.getHeroes();
  }

}
