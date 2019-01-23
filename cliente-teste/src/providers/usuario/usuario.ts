import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StreamProvider } from '../stream/stream';

@Injectable()
export class UsuarioProvider {

  usuarios: Array<any>

  constructor(
    public stream: StreamProvider,
    public http: HttpClient) {
    this.init()
  }

  init(){
    this.usuarios = new Array<any>()

    this.stream.listenFromEvent('message').subscribe(res=>{
      let temp = JSON.parse(String(res))
      if(temp.payload.table=='usuario')
        this.usuarios.push(temp['payload'].data)
      // console.log(temp)
    })
  }

  getLista(){
    return this.usuarios;
  }

}
