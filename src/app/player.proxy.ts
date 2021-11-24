import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './player.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerProxy {

  private readonly URL: string = 'https://my-json-server.typicode.com/typicode/demo/posts';

  constructor(private httpClient: HttpClient) {

  }

  public getPlayersStream(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.URL);
  }
}