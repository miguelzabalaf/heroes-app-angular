import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {

  hero: Heroe;

  constructor( private activatedRoute: ActivatedRoute,
               private heroService: HeroesService 
    ) { 

    this.activatedRoute.params.subscribe( params => {

      this.hero = this.heroService.getHero( params['id'] );

    } )

   }

  ngOnInit(): void {
  }

}
