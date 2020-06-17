import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes: Heroe[] = []
  term: string;

  constructor( private activatedRoute: ActivatedRoute,
               private heroService: HeroesService,
               private router: Router ) 
      { 

        this.activatedRoute.params.subscribe( params => {
         this.heroes = this.heroService.searchHeroes( params['term'] )
         this.term = params['term'];
        });

       }

  ngOnInit(): void {
  }

  showHero(id:number) {

    this.router.navigate( ['/hero', id] );

  }

}
