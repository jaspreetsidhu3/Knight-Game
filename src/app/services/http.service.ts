import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { APIResponse } from '../components/models/APIResponse';
import { Game } from '../components/models/Game';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) {
    
   }
   getGameList(ordering:string,search?:string):Observable<APIResponse<Game>>{
      let params;
      if(search){
        params=new HttpParams().set('ordering',ordering).set('search',search);
      }
      else{
        params=new HttpParams().set('ordering',ordering);
      }
      return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`,{
        params:params,
      })
   }
   
   getGameDetails(_id:string):Observable<Game>{
    return this.http.get<Game>(`${env.BASE_URL}/games/${_id}`);
   }
}
