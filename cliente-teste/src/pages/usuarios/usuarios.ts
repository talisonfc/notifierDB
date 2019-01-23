import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';

@IonicPage({name: 'usuarios-page'})
@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
})
export class UsuariosPage {

  usuarios: Array<any>

  constructor(
    public usuarioProvider: UsuarioProvider,
    public navCtrl: NavController, public navParams: NavParams) {
      this.init()
  }

  init(){
    this.usuarios = this.usuarioProvider.getLista()
  }

}
