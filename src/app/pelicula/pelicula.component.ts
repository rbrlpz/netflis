import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pelicula',
  templateUrl: './pelicula.component.html',
//  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
	@Input()
	pelicula : any;
  constructor() { }

  ngOnInit() {
  }

}
