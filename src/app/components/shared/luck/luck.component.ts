import { UiService } from './../../../services/ui.service';
import { StorageService } from './../../../services/storage.service';
import { Component, Input, OnInit } from '@angular/core';
import { JugadaI } from 'src/app/interfaces/jugada.interface';
import { uuid } from 'uuidv4';

@Component({
  selector: 'app-luck',
  templateUrl: './luck.component.html',
  styleUrls: ['./luck.component.scss'],
})
export class LuckComponent implements OnInit {

  @Input() numberMax: number;
  @Input() playMax: number;
  @Input() site: string;

  jugada: string = 'mucha suerte 😊!'
  jugar: boolean = false;
  numbers: number[] = [];
  constructor(
    private storageService:StorageService,
    private uiService:UiService
  ) { }

  ngOnInit() {}

  goodLuck(){
    this.numbers = [];
    while(this.numbers.length < this.playMax){
      let number = Math.floor(Math.random() * this.numberMax) + 1;
      if(this.numbers.indexOf(number) === -1) this.numbers.push(number);
    }
    this.jugada = this.numbers.join(', ');
    this.jugar = true;
  }

  async saveJugada(){
    let guardarJugada: JugadaI = {
      site: this.site,
      numbers: this.numbers,
      date: new Date()
    }
    this.storageService.saveData(guardarJugada);
    this.uiService.showToast(`Jugada guardada con exito.`);
  }

}
