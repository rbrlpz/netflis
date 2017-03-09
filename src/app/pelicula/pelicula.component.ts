import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
    @Input()
    peli : any;
  constructor() { }

  ngOnInit() {
  }

}
