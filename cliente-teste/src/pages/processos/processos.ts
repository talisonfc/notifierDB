import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProcessoProvider } from '../../providers/processo/processo';

@IonicPage({name: 'processos-page'})
@Component({
  selector: 'page-processos',
  templateUrl: 'processos.html',
})
export class ProcessosPage {

  processos: Array<any>

  constructor(
    public processoProvider: ProcessoProvider,
    public navCtrl: NavController, public navParams: NavParams) {
      this.init()
  }

  init(){
    this.processos = this.processoProvider.getLista()
  }

}
