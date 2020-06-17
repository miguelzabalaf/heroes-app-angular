import { Injectable } from '@angular/core';
import { SplitInterpolation } from '@angular/compiler';
import { Heroe } from '../interfaces/heroe.interface';

@Injectable()
export class HeroesService {

  hero:Heroe;

  private heroes: Heroe[] = [
    {
      nombre: "Aquaman",
      bio: "Aquaman's most recognized power is the telepathic ability to communicate with marine life, which can summon at great distances.",
      img: "assets/img/aquaman.jpg",
      aparicion: "1941-11-01",
      casa:"DC",
      id: 1
    },
    {
      nombre: "Batman",
      bio: "The main features of Batman are summarized in «physical dexterity, deductive abilities and obsession». Most of the basic characteristics of the comics have varied due to the different interpretations they have given to the character.",
      img: "assets/img/batman.jpg",
      aparicion: "1939-05-01",
      casa:"DC",
      id: 2
    },
    {
      nombre: "Daredevil",
      bio: "Having lost his sight, Daredevil's remaining four senses were augmented by radiation to superhuman levels, in the accident he had as a child. Despite his blindness, he can 'see' through a 'sixth sense' that serves as a bat-like radar.",
      img: "assets/img/daredevil.jpg",
      aparicion: "1964-01-01",
      casa: "Marvel",
      id: 3
    },
    {
      nombre: "Hulk",
      bio: "His main power is his ability to increase his strength to practically unlimited levels while increasing his fury. Depending on which Hulk personality is in command at the time (the Hulk Banner is the weakest, but he makes up for it with his intelligence).",
      img: "assets/img/hulk.jpg",
      aparicion: "1962-05-01",
      casa:"Marvel",
      id: 4
    },
    {
      nombre: "Green Lantern",
      bio: "Possessor of the ring of power that possesses the ability to create manifestations of solid light through the use of thought. It is powered by the Green Flame (reviewed by later writers as a mystical power called Starheart), a magical flame contained within an orb (the orb was actually a green metal meteorite that fell to Earth, which a manufacturer found of lamps called Chang)",
      img: "assets/img/linterna-verde.jpg",
      aparicion: "1940-06-01",
      casa: "DC",
      id: 5
    },
    {
      nombre: "Spider-Man",
      bio: "After being bitten by a radioactive spider, he obtained the following superhuman powers, great strength, agility, power to climb walls. Spider-Man's strength allows him to lift 10 tons or more. Thanks to this great strength Spider-Man can perform incredible jumps. A \ 'arachnid sense \', which lets you know if a danger hangs over it, before it happens. Sometimes this can lead Spider-Man to the source of the danger.",
      img: "assets/img/spiderman.jpg",
      aparicion: "1962-08-01",
      casa: "Marvel",
      id: 6
    },
    {
      nombre: "Wolverine",
      bio: "In the fictional universe of Marvel, Wolverine has regenerative powers that can heal any wound, no matter how mortal it is, in addition that same power makes him immune to any disease on Earth and some aliens. He also possesses superhuman strength, which while not comparable to that of other superheroes like the Hulk, does surpass that of any human.",
      img: "assets/img/wolverine.jpg",
      aparicion: "1974-11-01",
      casa: "Marvel",
      id: 7
    }
  ];

  constructor() {
    console.log(this.heroes);
  }

  getHeroes():Heroe[] {
    return this.heroes;
  }

  getHero(idx: string) {
    const id = Number(idx)
    this.hero = this.heroes.find( x => x.id === id )
    return this.hero;
  }

  searchHeroes(term: string) {

    let heroesArray:Heroe[] = [];
    term = term.toLocaleLowerCase();

    for( let hero of this.heroes ) {

      let nameHero = hero.nombre.toLocaleLowerCase();

      if( nameHero.indexOf( term ) >= 0 ) {
        heroesArray.push( hero )
      }

    }

    return heroesArray;
    
  }

}