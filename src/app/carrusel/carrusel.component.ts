import { Component, OnInit, Input } from '@angular/core';
import { PeliculaComponent } from "../pelicula/pelicula.component";

@Component({
  selector: 'carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
    @Input()
    categoria : any;

  constructor() { }

  ngOnInit() {
  }

}
