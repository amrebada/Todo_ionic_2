
import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray, ToastController } from 'ionic-angular';
import { TodoProvider } from './../../providers/todo/todo';

import { ArchivePage } from "../archive/archive";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public todos = [];

  public isReorder = false;

  constructor(private toastCtrl: ToastController, private todoservice: TodoProvider, public navCtrl: NavController, private alertCtrl: AlertController) {
    this.todos = todoservice.getTodos();
  }

  /**
   * gotoArchivePage
   */
  public gotoArchivePage() {
    this.navCtrl.push(ArchivePage);
  }

  /**
   * archiveTodo
   */
  public archiveTodo(index) {
    this.todoservice.archiveTodo(index);
    let toastAdd = this.toastCtrl.create({
      message: "Todo Archived",
      duration: 2000
    });
    toastAdd.present();
  }

  /**
   * editTodo
   */
  public editTodo(index) {
    let editedTodo = this.todos[index];
    let alertEditMod = this.alertCtrl.create({
      title:"Edit " + editedTodo ,
      inputs:[
        {
          type: "text",
          placeholder: editedTodo,
          name: "todoEdited"
        }
      ],
      buttons:[
        {
          text:"Cancel"
        },
        {
          text: "Edit Todo",
          handler: (inputData) => {
            let todotext = inputData.todoEdited;
            this.todos[index] = todotext;
          }
        }
      ]
    });
    alertEditMod.present();

  }

  public toggleReorder() {
    this.isReorder = !this.isReorder;
  }

  public itemReordered($event) {
    reorderArray(this.todos, $event);

  }
  public addtodoalert() {
    let alertmod = this.alertCtrl.create({
      title: "Add Todo",
      message: "Enter Todo Text",
      inputs: [
        {
          type: "text",
          name: "todoInput",
          placeholder: "Go to GYM"
        }
      ],
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Add Todo",
          handler: (inputData) => {
            let todotext = inputData.todoInput;
            //this.todos.push(todotext);
            this.todoservice.addTodo(todotext);
            alertmod.onDidDismiss(() => {
              let toastAdd = this.toastCtrl.create({
                message: "Todo Added",
                duration: 2000
              });
              toastAdd.present();
            });

          }
        }
      ]

    });
    alertmod.present();
  }

}
