import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'src/app/dashboard.component.html',
    styleUrls: ['src/app/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(
        private heroService: HeroService,
        private router: Router
    ) { }

    ngOnInit() {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1,5))
            .catch(error => console.error("er: " + error));
    }

    gotoDetail(hero: Hero) {
        let link = ['HeroDetail',{id: hero.id}];
        this.router.navigate(link);
    }
}
