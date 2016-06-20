import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
    selector: 'my-heroes',
    templateUrl: 'src/app/heroes.component.html',
    styleUrls:  ['src/app/heroes.component.css'],
    directives: [HeroDetailComponent]
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
    addingHero: Boolean;
    error: any;

    constructor(
        private router: Router,
        private heroService: HeroService) { }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes() {
        this.heroService.getHeroes()
            .then(heroes => {this.heroes = heroes})
            .catch(error => {console.error(error)});
    }
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
    gotoDetail() {
        this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }

    addHero() {
        this.addingHero = true;
        this.selectedHero = null;
    }

    close(savedHero: Hero) {
        this.addingHero = false;
        if (savedHero) { this.getHeroes(); }
    }

    delete(hero: Hero, event: any) {
        event.stopPropagation();
        this.heroService
        .delete(hero)
        .then(res => {
            this.heroes = this.heroes.filter(h => h !== hero);
            if (this.selectedHero === hero) { this.selectedHero = null; }
        })
        .catch(error => this.error = error); // TODO: Display error message
    }


}
