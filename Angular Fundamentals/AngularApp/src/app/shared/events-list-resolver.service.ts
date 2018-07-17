import {Router,RouterStateSnapshot, ActivatedRouteSnapshot,CanActivate} from "@angular/router"
import {Injectable} from "@angular/core"
import {EventService} from "../shared/events.service"
import { map } from "rxjs/operators";
import { Resolve } from "@angular/router";

@Injectable()
export class EventsListResolver implements Resolve<any> {
  constructor(private eventService:EventService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.eventService.getEvents().pipe(map(events=>events))
  }
}
