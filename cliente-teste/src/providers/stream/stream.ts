import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Socket } from 'ng-socket-io'

@Injectable()
export class StreamProvider{

  constructor(
    public socket: Socket,
    public http: HttpClient) {
      this.init()
    
  }

  init(){
    this.socket.connect()
  }

  listenFromEvent(event){
    return this.socket.fromEvent(event)
  }

}
