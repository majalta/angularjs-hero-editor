import {bootstrap} from '@angular/platform-browser-dynamic';

// Imports for loading & configuring the in-memory web api
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './app/in-memory-data.service';
import { provide } from '@angular/core';
import { XHRBackend } from '@angular/http';
import {HTTP_PROVIDERS} from '@angular/http';

import {AppComponent} from './app/app.component';

// Imports app routes
import { APP_ROUTER_PROVIDERS } from './app/app.routes';


bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(XHRBackend, { useClass: InMemoryBackendService }), // in-mem server
    provide(SEED_DATA,  { useClass: InMemoryDataService }) // in-mem server data
])
.catch(err => console.error(err));
