import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {

  hero: Heroe;
  heroes: Heroe[] = [];
  recomentations: Heroe[] = []

  constructor( private activatedRoute: ActivatedRoute,
               private heroService: HeroesService,
               private router: Router 
    ) { 

    this.activatedRoute.params.subscribe( params => {

      this.hero = this.heroService.getHero( params['id'] );

      this.getRecomendations();

    } )

   }

  ngOnInit(): void {
  }

  // getRecomendations() {

  //   const heroes = this.heroService.getHeroes()

  //   heroes.map( heroRec => {

  //     if (heroRec.casa === this.hero.casa && heroRec.nombre != this.hero.nombre) {
  //       this.recomentations.push(heroRec);
  //     }

  //   } )

  // }

  getRecomendations() {
     this.heroes = this.heroService.getHeroes();
  }


  showRecomendation(id: number) {
    this.router.navigate( ['/hero', id] )
  }

}
