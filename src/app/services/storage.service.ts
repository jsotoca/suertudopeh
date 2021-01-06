import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { JugadaI } from '../interfaces/jugada.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public jugadas: JugadaI[] = [];

  constructor(
    private storage: Storage
  ) { }

  generateUuid(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  saveData(value:JugadaI){
    value.uuid = this.generateUuid();
    this.jugadas.unshift(value);
    this.storage.set('jugadas', this.jugadas);
  }

  async loadData(){
    const data = await this.storage.get('jugadas');
    if (data) this.jugadas = data;
  }

  deleteData(uuid:string){
    this.jugadas = this.jugadas.filter(j => j.uuid !== uuid);
  }

}
