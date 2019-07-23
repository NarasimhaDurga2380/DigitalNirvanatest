import { Component, OnInit } from '@angular/core';
import { Imovie } from '../../models/main.model';
import { MainService } from  '../../services/main.service'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchList:Array<any> = [];
  typesList:Array<String> = ['movie','series','episode'];
  yearsList:Array<any> = this.getYearsList();
  title:String = "";
  type:String = "";
  year:String = "";
  isLoading:boolean = false;
  

  constructor(private mainSrvc:MainService) { }

  ngOnInit() {
             
  }

  searchResults(){
     this.isLoading = true;
     this.mainSrvc.getSearchedMovies(this.title,this.type).subscribe((successResponse:Array<Imovie>) => {
      if(typeof successResponse === 'object' && successResponse !== null)  this.searchList = [{...successResponse}];
      else if(Array.isArray(successResponse)) this.searchList = [...successResponse]
       this.isLoading = false;
     },errorResponse => {
      this.isLoading = false;
      this.searchList = [];
      console.log(errorResponse);
     })
  }

  getYearsList():Array<any>{
     let initialYear = 1990;
     let yrsList = [];
     for(var i= 0;i< 30;i++){
        initialYear = initialYear + 1;
        yrsList.push(initialYear)
      }
     return yrsList;
  }

}
