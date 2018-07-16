import { Component, OnInit } from '@angular/core';
import {EventService} from '../shared/events.service'
import {ToastrService} from '../shared/toastr.service'

@Component({
  moduleId: module.id,
  selector: 'events-list',
  templateUrl: 'events-list.component.html',
  styleUrls:['events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events:any[]

  constructor(private eventService:EventService, private toastr:ToastrService){
  }

  ngOnInit(){
    this.events = this.eventService.getEvents()
  }

  handleThumbnailClick(eventName){
    this.toastr.success(eventName)
  }
}
