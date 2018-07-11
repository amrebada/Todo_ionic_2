import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { TodoProvider } from "../../providers/todo/todo";
/**
 * Generated class for the ArchivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-archive',
  templateUrl: 'archive.html',
})
export class ArchivePage {

  public archivedTodos = [];

  constructor(public todoProvider: TodoProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.archivedTodos = todoProvider.getArchivedTodos();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArchivePage');
  }

}
