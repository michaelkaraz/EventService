import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service';



@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="row">
    <div *ngFor="let event of events" class="col-md-5">
      <event-thumbnail (click) = "thumbnailClick(event.name)" [event]="event"></event-thumbnail>
    </div>
  </div>
  `
})
export class EventsListComponent implements OnInit {
  constructor(private eventService:EventService, private toastr: ToastrService){
    
  }
  events:any[]
  ngOnInit(){
    this.events = this.eventService.getEvents();
  }
  thumbnailClick(eventName){
    this.toastr.success(eventName)
  }
}