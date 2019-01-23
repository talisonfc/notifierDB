import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StreamProvider } from '../stream/stream';

@Injectable()
export class ProcessoProvider {

  collection: Array<any>

  constructor(
    public stream: StreamProvider,
    public http: HttpClient) {
    this.init()
  }

  init(){
    this.collection = new Array<any>()

    this.stream.listenFromEvent('message').subscribe(res=>{
      let temp = JSON.parse(String(res))
      if(temp.payload.table=='processo')
        this.collection.push(temp['payload'].data)
      // console.log(temp)
    })
  }

  getLista(){
    return this.collection;
  }

}
