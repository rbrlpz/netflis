import { Component } from '@angular/core';
import { SeccionComponent } from './seccion/seccion.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  secciones = [
	  {
	  	"seccion" : "Estrenos",
	  	"peliculas" : [
	  	{
	  		"titulo": "Titulo 1",
	  		"poster" : "/assets/imgs/posters/movie1.jpg"
	  	},
	  	{
	  		"titulo": "Titulo 1",
	  		"poster" : "/assets/imgs/posters/movie1.jpg"
	  	},
	  	{
	  		"titulo": "Titulo 1",
	  		"poster" : "/assets/imgs/posters/movie1.jpg"
	  	},
	  	{
	  		"titulo": "Titulo 1",
	  		"poster" : "/assets/imgs/posters/movie1.jpg"
	  	},
	  	{
	  		"titulo": "Titulo 1",
	  		"poster" : "/assets/imgs/posters/movie1.jpg"
	  	},
	  	{
	  		"titulo": "Titulo 1",
	  		"poster" : "/assets/imgs/posters/movie1.jpg"
	  	},
	  	{
	  		"titulo": "Titulo 1",
	  		"poster" : "/assets/imgs/posters/movie1.jpg"
	  	},
	  	{
	  		"titulo": "Titulo 1",
	  		"poster" : "/assets/imgs/posters/movie1.jpg"
	  	}
	  	]
	  },
	  {
	  	"seccion" : "Infantiles",
	  	"peliculas" : [{
	  		"titulo": "Titulo 1",
	  		"poster" : "/assets/imgs/posters/movie1.jpg"
	  	}]
	  },
	  {
	  	"seccion" : "Terror",
	  	"peliculas" : [{
	  		"titulo": "Titulo 1",
	  		"poster" : "/assets/imgs/posters/movie1.jpg"
	  	}]
	  },
	  {
	  	"seccion" : "Accion",
	  	"peliculas" : [{
	  		"titulo": "Titulo 1",
	  		"poster" : "/assets/imgs/posters/movie1.jpg"
	  	}]
	  },


  ];
}
