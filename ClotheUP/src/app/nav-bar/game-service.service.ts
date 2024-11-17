import { Injectable } from '@angular/core';
import { Game, Post } from './types';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GameServiceService {
  private games: Game[];
  constructor(private http: HttpClient) {
    this.games = [{title:"az",genre:"ti",year:11},{title:"tnr",genre:"mmorpg",year:2024},{title:"az",genre:"ti",year:11}];
   }

   getGames(){
    return this.games;
   }
   getAllPosts(){
    const url = "https://jsonplaceholder.typicode.com/posts"

    return this.http.get<Post[]>(url);
   }
   addGame(game: Game){
      this.games.push(game);
   }
}
