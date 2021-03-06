import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';



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
  constructor(private eventService:EventService, private toastr: ToastrService, private route:ActivatedRoute){
    
  }
  events:any
  ngOnInit(){
    //this.eventService.getEvents().subscribe(events=>{
     // this.events = events
    //}
   // );
    this.events = this.route.snapshot.data['events']
  }
  thumbnailClick(eventName){
    this.toastr.success(eventName)
  }
}