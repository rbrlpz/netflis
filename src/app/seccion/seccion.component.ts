import { Component, Input, OnInit } from '@angular/core';
import { PeliculaComponent } from "../pelicula/pelicula.component";


@Component({
  selector: 'seccion',
  templateUrl: './seccion.component.html',
})
export class SeccionComponent implements OnInit {
	@Input()
	sec : any
  constructor() { }

  ngOnInit() {
  }

}
