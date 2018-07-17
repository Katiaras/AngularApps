import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {appRoutes} from './routes';

import {
  AppComponent,EventsListComponent,EventThumbnailComponent,NavComponent,
EventService,ToastrService,EventDetailsComponent,CreateEventComponent,Error404Component,
EventRouteActivator,EventsListResolver
} from './index'

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
     EventRouteActivator,
     EventsListResolver,
     {provide:'canDeactivateCreateEvent', useValue:checkDirtyState}
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function checkDirtyState(component:CreateEventComponent) {
  if(component.isDirty)
    return window.confirm('You have not save the event yet. Do you really want to cancel?');
  return true
}
