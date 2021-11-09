import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banda-sonora',
  templateUrl: './banda-sonora.component.html',
  styleUrls: ['./banda-sonora.component.css']
})
export class BandaSonoraComponent implements OnInit {
  audio = new Audio();
  audioPlay:Boolean = false;

  constructor() {
    this.audio.src = '../../../assets/media/Naruto Soundtrack.mp3';
    this.audio.load();
  }

  ngOnInit(): void {
  }

  reproducir(){
    this.audio.load();
    this.audio.play();
    this.audioPlay = true;
  }

  pausar(){
    this.audio.pause();
    this.audioPlay = false;
  }

}
