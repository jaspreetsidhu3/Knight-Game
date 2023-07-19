import { Component, OnInit } from '@angular/core';
import { Game } from '../components/models/Game';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  gameRating=0;
  gameId:string="";
  game!:Game;
  routeSub!:Subscription;
  gameSub!:Subscription;
  constructor(
    private ActivatedRoute:ActivatedRoute,
    private httpService:HttpService

  ) { }

  ngOnInit(): void {
    this.routeSub=this.ActivatedRoute.params.subscribe((params:Params)=>{
      this.gameId=params['id'];
      this.getGameDetails(this.gameId);
    })
  }
  getGameDetails(id:string):void{
    this.gameSub=this.httpService.getGameDetails(id).subscribe((gameResp:Game)=>{
      gameResp.description=this.removeTags(gameResp.description);
      this.game=gameResp;
    })
  }

  removeTags(str:string):string {
    if ((str===null) || (str===''))
        return '';
    else
        str = str.toString();
    
    return str.replace( /(<([^>]+)>)/ig, '');
}
}
