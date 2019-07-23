import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Imovie } from '../models/main.model';
import { Observable } from "rxjs";
import { map } from "rxjs/operators"

const BASE_URL  = "http://www.omdbapi.com/?apikey=2d2c9886&";

@Injectable({
    providedIn:"root"
})

export class MainService{
    constructor(private http:HttpClient){

    }
    getSearchedMovies(title,type):Observable<[Imovie]>{
      let baseUrl = BASE_URL;
      baseUrl = `${baseUrl}t=${title}&type=${type}`
      return this.http.get<[Imovie]>(baseUrl);
    }

    getSearchedData(id):Observable<Imovie>{
      let baseUrl = BASE_URL;
      baseUrl = `${baseUrl}i=${id}`
      return this.http.get<Imovie>(baseUrl);
    }
}
