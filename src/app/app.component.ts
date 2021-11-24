import { Component, OnInit, VERSION } from '@angular/core';
import { Post } from './player.model';
import { PlayerProxy } from './player.proxy';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  posts: Post[];

  constructor(private playerProxy: PlayerProxy) {

  }

  ngOnInit(): void {
    this.playerProxy.getPlayersStream().subscribe((players: Post[]): void => {
      console.log('Inside subscribe: ');
      this.posts = players;
    });
  }

}
