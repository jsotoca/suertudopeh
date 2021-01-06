import { StorageService } from './../../../services/storage.service';
import { UiService } from './../../../services/ui.service';
import { JugadaI, OpcionI } from './../../../interfaces/jugada.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.scss'],
})
export class TableroComponent implements OnInit {

  @Input() numberMax: number;
  @Input() playMax: number;
  @Input() site: string;

  tablero: OpcionI[] = [];
  jugada: number[] = [];
  texto: string = 'Tu jugada aquí';

  constructor(
    private storageService:StorageService,
    private uiService:UiService
  ) {}

  ngOnInit() {
    for (let i = 1; i <= this.numberMax; i++) {
      this.tablero.push({number:i,status:false});
    }
  }

  selectNumber(number:number){
    let repeat = false;
    if(this.jugada.length > 0) {
      const idx = this.jugada.indexOf(number);
      if(idx != -1){
        this.tablero[number-1].status = false;
        this.jugada.splice(idx, 1);
        repeat = true;
      }
    }
    if(this.jugada.length < this.playMax && !repeat) {
      this.tablero[number-1].status = true;
      this.jugada.push(number);
      this.uiService.showToast(`Seleccionaste ${number}`);
    }
    else {
      if(!repeat) this.uiService.showToast(`ya alcanzaste el limite de ${this.playMax} números seleccionados.`);
      else this.uiService.showToast(`Se elimino ${number} de tu jugada`);
    }
    this.texto = this.jugada.join(', ');
  }

  async saveJugada(){
    let guardarJugada: JugadaI = {
      site: this.site,
      numbers: this.jugada,
      date: new Date()
    }
    this.storageService.saveData(guardarJugada);
    this.uiService.showToast(`Jugada guardada con exito.`);
  }

}
