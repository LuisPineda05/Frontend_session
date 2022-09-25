import { Component, OnInit} from '@angular/core';
import {Treatment} from "../../model/treatment";
import {TreatmentsService} from "../../services/treatments.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {take} from "rxjs/operators";



@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.css']
})
export class TreatmentsComponent implements OnInit {

  treatments: Treatment[]=[];

  constructor(private treatmentsService: TreatmentsService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllTreatments();
  }

  getAllTreatments(){
    this.treatmentsService.getAll().subscribe((response:any)=>{

    this.treatments=response;
    })
  }




   getTreatmentByQuery(title: string){
    if(title?.length) {
      this.treatmentsService.getTreatmentByTitle(title).subscribe((response: any)=> {
        this.treatments = response;
      }
    )}else{
      this.getAllTreatments();
    }
  }



}
