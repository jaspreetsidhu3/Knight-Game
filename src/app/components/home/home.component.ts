import { Component, OnDestroy, OnInit } from '@angular/core';
import { Game } from '../models/Game';
import { HttpService } from 'src/app/services/http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { APIResponse } from '../models/APIResponse';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  public sort:string='';
  public games:Array<Game>=[];
  private routeSub!: Subscription;
  private gameSub!: Subscription;
  constructor(private httpServices:HttpService, private activatedRoute:ActivatedRoute, private router:Router ){ }

  ngOnInit(): void {
    this.routeSub= this.activatedRoute.params.subscribe((params:Params)=>{
        if(params['game-search']){
          this.searchGames('metacrit',params['game-search']);
        }else{
          this.searchGames('metacrit');
        }
    })
    
  }
  searchGames(sort:string,search?:string):void{
    this.gameSub= this.httpServices.getGameList(sort,search)
    .subscribe((gameList:APIResponse<Game>)=>{
      this.games=gameList.results;
      console.log(gameList.results);
    })
  }
  ngOnDestroy():void{
    if(this.gameSub){
      this.gameSub.unsubscribe();
    }
    if(this.routeSub){
      this.routeSub.unsubscribe();
    }
  }
  openGame(id:number){
    this.router.navigate(['details',id]);
  }
}
