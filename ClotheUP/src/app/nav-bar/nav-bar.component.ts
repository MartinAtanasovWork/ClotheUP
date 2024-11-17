import { Component, OnInit } from "@angular/core";
import { Game, Post } from "./types";
import { NavBarItemComponent } from "../nav-bar-item/nav-bar-item.component";
import { GameServiceService } from "./game-service.service";

@Component({
    selector:"app-nav-bar",
    templateUrl: "./nav-bar.component.html",
    imports: [NavBarItemComponent],
    providers:[GameServiceService],
    styleUrl: "./nav-bar.component.css",
    standalone:true
})
export class NavBarComponent implements OnInit{
    games: Game[] = [];
    posts: Post[] = [];
    likes = 0;
    constructor(private gs: GameServiceService){
       this.games = gs.getGames();       
    }
    onClick(){
        console.log("click");        
    }
   addGame(){
        let game = {title:"val",genre:"shooter",year:2019}  
        
        this.gs.addGame (game);
    } 

    onLike(like:string){
     console.log(like);                   
    }

    ngOnInit(){
        this.gs.getAllPosts().subscribe(data => {
            this.posts = data;
        })
    }
}