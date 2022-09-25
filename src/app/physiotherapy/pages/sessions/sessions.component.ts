import {Component, Injectable, OnInit} from '@angular/core';
import {Treatment} from "../../model/treatment";
import {TreatmentsService} from "../../services/treatments.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class SessionsComponent implements OnInit {
  sessions: string[]=[];
  treatments: Treatment[]=[];
  id: number = 0;
  session_number = 0;



  constructor(private treatmentsService: TreatmentsService, private route: ActivatedRoute, private router: Router) {
    this.getAllTreatments();

  }
  ngOnInit(): void {
    console.log(this.treatments.length);
    this.sessions = ["https://www.youtube.com/embed/knVwokXITGI", "https://www.youtube.com/embed/u2Ms34GE14U"];
    console.log(this.sessions[0]);
  }

  getAllSessions(id: number){
    this.treatmentsService.getTreatmentByTitle("Obesity").subscribe((response:any)=>{
      //this.sessions = response.sessions;
      this.treatments = response;
    })

  }

  getAllTreatments(){
    this.treatmentsService.getAll().subscribe((response:any)=>{

      this.treatments=response;
    })
  }

  nextSession(){
    this.session_number+=1;
  }

  prevSession(){
    this.session_number-=1;
  }
}
