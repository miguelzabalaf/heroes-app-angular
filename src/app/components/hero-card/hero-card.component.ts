import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {

  @Input() hero: Heroe;

  constructor( private heroService: HeroesService,
               private router: Router ) { 
   }

  ngOnInit(): void {
  }

  showHero(id) {
    this.router.navigate( ['/hero', id] );
  }

}
