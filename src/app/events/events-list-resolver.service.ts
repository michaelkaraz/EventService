import { Router, CanActivate, ActivatedRouteSnapshot, Resolve } from "@angular/router"
import { Injectable } from "@angular/core"
import { EventService } from './shared/event.service'
import {map} from 'rxjs/operators'
@Injectable()
export class EventsListResolverService implements Resolve<any> {
    constructor(private eventService:EventService, private router:Router) {

    }
    resolve() {
       return this.eventService.getEvents().pipe(map(events=>events))
    }

  


} 