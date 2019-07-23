import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Imovie } from '../../models/main.model';
import { MainService } from  '../../services/main.service'

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})
export class SearchDetailsComponent implements OnInit {
  searchedObj:Imovie = {};

  constructor(private _ac:ActivatedRoute,private mainSrvc:MainService ) { }

  ngOnInit() {
    this.mainSrvc.getSearchedData(this._ac.snapshot.params.id).subscribe((successResponse:Imovie) => {
       this.searchedObj = successResponse;
     },errorResponse => {
      this.searchedObj = {};
     })
  }

}
