import { UiService } from './../../services/ui.service';
import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  constructor(
    public storage:StorageService,
    public alertController: AlertController,
    public uiService:UiService
  ) { }

  async ngOnInit() {
    await this.storage.loadData();
  }

  async deleteData(uuid:string) {
    const alert = await this.alertController.create({
      cssClass: 'opcion',
      header: 'Eliminar jugada',
      message: '¿Estas seguro de eliminar tu jugada guardada?',
      buttons: [
        {
          text: 'Eliminar',
          cssClass: 'eliminar',
          handler: () => {
            this.storage.deleteData(uuid);
            this.uiService.showToast('Jugada eliminada.');
          }
        }, {
          text: 'Cancelar',
          cssClass: 'cancelar'
        }
      ]
    });

    await alert.present();
  }


}
