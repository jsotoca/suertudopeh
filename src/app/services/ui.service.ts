import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(
    public toastController: ToastController,
    public router:Router
  ) { }

  async showToast(message:string) {
    const toast = await this.toastController.create({
      message,
      duration: 1000
    });
    toast.present();
  }

  navigateTo(site:string){
    this.router.navigate([site]);
  }
}
