import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from '../nav-bar/types';

@Component({
  selector: 'app-nav-bar-item',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar-item.component.html',
  styleUrl: './nav-bar-item.component.css'
})
export class NavBarItemComponent {
  @Input('game') game : Game = {} as Game;  
  @Output() likeEvent = new EventEmitter<string>();  

  like(value: string){
      this.likeEvent.emit(value);
  }
}
