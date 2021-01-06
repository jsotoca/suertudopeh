import { UiService } from './../../services/ui.service';
import { OpcionI } from './../../interfaces/jugada.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tinka',
  templateUrl: './tinka.page.html',
  styleUrls: ['./tinka.page.scss'],
})
export class TinkaPage implements OnInit {

  tablero: OpcionI[] = [];
  jugada: number[] = [];
  texto: string = 'Tu jugada aquí';

  constructor(
    private uiService:UiService
  ) {
    for (let i = 1; i <= 45; i++) {
      this.tablero.push({number:i,status:false});
    }
  }

  ngOnInit() {
  }

  seleccionar(number:number){
    let repetido = false;
    if(this.jugada.length > 0) {
      const idx = this.jugada.indexOf(number);
      if(idx != -1){
        this.tablero[number-1].status = false;
        this.jugada.splice(idx, 1);
        repetido = true;
      }
    }
    if(this.jugada.length < 6 && !repetido) {
      this.tablero[number-1].status = true;
      this.jugada.push(number);
      this.uiService.showToast(`Seleccionaste ${number}`);
    }
    else {
      if(!repetido) this.uiService.showToast('ya alcanzaste el limite de 6 números seleccionados.');
      else this.uiService.showToast(`Se elimino ${number} de tu jugada`);
    }
    this.texto = this.jugada.join(', ');
  }

}
