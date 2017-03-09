import { Component } from '@angular/core';
import { CarruselComponent } from "./carrusel/carrusel.component"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    secciones = [{
        "nombre": "Estrenos",
        "peliculas": [{
            "titulo": "Alien Covenant",
            "sinopsis": "Anclado en un planeta remoto en el \n punto más alejado de la galaxia, el equipo de la nave Covenant \n descubre lo que creen es un inexplorado paraiso...",
            "anio": "2017",
            "categoria": "Ciencia ficcion, Terror, Accion",
            "clasificacion": "B15",
            "duracion": "189 min",
            "calificacion": "1 | 2 | 3 | 4 | 5 |",
            "poster": "C:\\xampp\\htdocs\\netflis\\posters\\alienconvenant.jpg",
            "trailer": "C:\\xampp\\htdocs\\netflis\\videos\\Alien_covenant.mp4",
        }, {
            "titulo": "Anabelle 2",
            "sinopsis": "Varios años después de la trágica muerte de su hija, \n un creador de muñecas y su mujer reciben en su casa a una monja...",
            "anio": "2017",
            "categoria": "Terror",
            "clasificacion": "B15",
            "duracion": "177 min",
            "calificacion": "1 | 2 | 3 | 4 | 5 |",
            "poster": "C:\\xampp\\htdocs\\netflis\\posters\\anabelle2.jpg",
            "trailer": "C:\\xampp\\htdocs\\netflis\\videos\\Anabelle2.mp4",

        }, {
            "titulo": "Assassins Creed",
            "sinopsis": "Callum Lynch (Michael Fassbender) es un criminal encerrado en prisión y \n condenado a ser ejecutado por sus delitos",
            "anio": "2016",
            "categoria": "Accion, Ciencia ficcion",
            "clasificacion": "B15",
            "duracion": "115 min",
            "calificacion": "1 | 2 | 3 | 4 | 5 |",
            "poster": "C:\\xampp\\htdocs\\netflis\\posters\\assassinscreed.jpg",
            "trailer": "C:\\xampp\\htdocs\\netflis\\videos\\Assassins_creed.mp4",

        }, {
            "titulo": "Avatar 2",
            "sinopsis": "Por el momento se rumorea que la segunda parte se desarrollará en \n los océanos de Pandora",
            "anio": "2018",
            "categoria": "Ciencia ficcion, Aventura",
            "clasificacion": "B",
            "duracion": "150 min",
            "calificacion": "1 | 2 | 3 | 4 | 5 |",
            "poster": "C:\\xampp\\htdocs\\netflis\\posters\\avatar2.jpg",
            "trailer": "C:\\xampp\\htdocs\\netflis\\videos\\Avatar2.mp4",

        }, {
            "titulo": "Avengers: Infinite War parte 1",
            "sinopsis": "Vengadores: Infinity War seguirá la lucha de los superhéroes de \n Marvel contra el mayor villano al que se han enfrentado nunca: Thanos.",
            "anio": "2018",
            "categoria": "Accion, Fantasia",
            "clasificacion": "B",
            "duracion": "130 min",
            "calificacion": "1 | 2 | 3 | 4 | 5 |",
            "poster": "C:\\xampp\\htdocs\\netflis\\posters\\avengersinfinitewar.jpg",
            "trailer": "C:\\xampp\\htdocs\\netflis\\videos\\Avengers_IW.mp4",

        }, {
            "titulo": "La bella y la bestia",
            "sinopsis": "Bella es una brillante y guapa joven que utiliza la lectura como \n válvula de escape de su rutinaria vida.",
            "anio": "2017",
            "categoria": "Romance, Fantasia",
            "clasificacion": "B",
            "duracion": "84 min",
            "calificacion": "1 | 2 | 3 | 4 | 5 |",
            "poster": "C:\\xampp\\htdocs\\netflis\\posters\\bellaylabestia.jpg",
            "trailer": "C:\\xampp\\htdocs\\netflis\\videos\\Beauty_and_best.mp4",

        }]
    }, {
        "nombre": "Terror",
        "peliculas": [{
                "titulo": "Besetment",
                "sinopsis": "La joven Amanda Millard está desesperada por un trabajo por lo que \n empieza a trabajar en un hotel bastante extraño...",
                "anio": "2016",
                "categoria": "Terror, Thriller",
                "clasificacion": "R",
                "duracion": "76 min",
                "calificacion": "1 | 2 | 3 | 4 | 5 |",
                "poster": "C:\\xampp\\htdocs\\netflis\\posters\\besetment.jpg",
                "trailer": "C:\\xampp\\htdocs\\netflis\\videos\\Besetmen.mp4",

            }, {
                "titulo": "Cars 3",
                "sinopsis": "Rayo McQueen sigue siendo el mejor coche de carreras del mundo, \n pero ahora que es uno de los más veteranos del circuito...",
                "anio": "2017",
                "categoria": "Animacion",
                "clasificacion": "A",
                "duracion": "90 min",
                "calificacion": "1 | 2 | 3 | 4 | 5 |",
                "poster": "C:\\xampp\\htdocs\\netflis\\posters\\cars3.jpg",
                "trailer": "C:\\xampp\\htdocs\\netflis\\videos\\Cars3.mp4",

            }, {
                "titulo": "Conjuro 3",
                "sinopsis": "Tal vez podríamos meternos con un clásico al estilo de Hombre Lobo \n Americano en Londres...",
                "anio": "2018",
                "categoria": "Thriller, Terror",
                "clasificacion": "R",
                "duracion": "120 min",
                "calificacion": "1 | 2 | 3 | 4 | 5 |",
                "poster": "C:\\xampp\\htdocs\\netflis\\posters\\elconjuro3.jpg",
                "trailer": "C:\\xampp\\htdocs\\netflis\\videos\\Conjuro3.mp4",

            }, {
                "titulo": "Deadpool 2",
                "sinopsis": "Ryan Reynolds (Eternal) repite como el desvergonzado mutante protagonista, \n en una cinta de la que por ahora solo se sabe que contará con la aparición de \n Cable...",
                "anio": "2018",
                "categoria": "Accion, Aventura, Comedia",
                "clasificacion": "R",
                "duracion": "90 min",
                "calificacion": "1 | 2 | 3 | 4 | 5 |",
                "poster": "C:\\xampp\\htdocs\\netflis\\posters\\deadpool2.jpg",
                "trailer": "C:\\xampp\\htdocs\\netflis\\videos\\Deadpool2.mp4",

            }, {
                "titulo": "Doctor Strange",
                "sinopsis": "El doctor Stephen Strange (Benedict Cumberbatch) es un reputado \n neurocirujano de Nueva York...",
                "anio": "2016",
                "categoria": "Fantasia, Aventura",
                "clasificacion": "B15",
                "duracion": "115 min",
                "calificacion": "1 | 2 | 3 | 4 | 5 |",
                "poster": "C:\\xampp\\htdocs\\netflis\\posters\\drstrange.jpg",
                "trailer": "C:\\xampp\\htdocs\\netflis\\videos\\DrStrange.mp4",

            }, {
                "titulo": "Fast & Furious 8",
                "sinopsis": "La carrera ha comenzado. Dom Toretto (Vin Diesel) y su equipo \n volverán en esta ocasión con más ganas de guerra que nunca. ",
                "anio": "2017",
                "categoria": "Accion, Suspenso",
                "clasificacion": "R",
                "duracion": "128 min",
                "calificacion": "1 | 2 | 3 | 4 | 5 |",
                "poster": "C:\\xampp\\htdocs\\netflis\\posters\\fastandfurious8.jpg",
                "trailer": "C:\\xampp\\htdocs\\netflis\\videos\\Fast_and_Furious8.mp4",

            }, {
                "titulo": "Ghost in the shell",
                "sinopsis": "Motoko Kusanagi (Scarlett Johansson), también conocida como The \n Major, es una agente especial cyborg, que lidera el grupo de trabajo de élite \n Sección 9...",
                "anio": "2017",
                "categoria": "Accion, Ciencia ficcion",
                "clasificacion": "B15",
                "duracion": "110 min",
                "calificacion": "1 | 2 | 3 | 4 | 5 |",
                "poster": "C:\\xampp\\htdocs\\netflis\\posters\\ghostintheshell.jpg",
                "trailer": "C:\\xampp\\htdocs\\netflis\\videos\\GhostIntheShell.mp4",

            }, {
                "titulo": "Guardians of the galaxy vol. 2",
                "sinopsis": "Continúan las aventuras del dispar equipo liderado por Peter Quill \n (Chris Pratt) a medida que viajan cruzando los confines del cosmos...",
                "anio": "2017",
                "categoria": "Accion, Ciencia ficcion, Aventura",
                "clasificacion": "B15",
                "duracion": "110 min",
                "calificacion": "1 | 2 | 3 | 4 | 5 |",
                "poster": "C:\\xampp\\htdocs\\netflis\\posters\\guardianesdelagalaxia2.jpg",
                "trailer": "C:\\xampp\\htdocs\\netflis\\videos\\Guardianes_de_la_galaxia2.mp4",

            }, {
                "titulo": "Inferno",
                "sinopsis": "La doctora ayudará a Langdon a recuperar sus recuerdos. Ante la \n amenaza de una plaga que pondrá muchas vidas en juego...",
                "anio": "2016",
                "categoria": "Suspenso, Crimen",
                "clasificacion": "B15",
                "duracion": "122 min",
                "calificacion": "1 | 2 | 3 | 4 | 5 |",
                "poster": "C:\\xampp\\htdocs\\netflis\\posters\\inferno.jpg",
                "trailer": "C:\\xampp\\htdocs\\netflis\\videos\\Inferno.mp4",

            }, {
                "titulo": "Jurassic World 2",
                "sinopsis": "Tras el caos creado por la fuga del inteligente Indominus Rex en \n el parque de Isla Nubla, en esta nueva entrega, por primera vez los dinosaurios \n se emplazarán fuera de las fronteras del parque de atracciones...",
                "anio": "2018",
                "categoria": "Aventura, Accion, Ciencia ficcion",
                "clasificacion": "B15",
                "duracion": "122 min",
                "calificacion": "1 | 2 | 3 | 4 | 5 |",
                "poster": "C:\\xampp\\htdocs\\netflis\\posters\\jurassicworld2.jpg",
                "trailer": "C:\\xampp\\htdocs\\netflis\\videos\\JurassicWorld2.mp4",

            }, {
                "titulo": "Justice League",
                "sinopsis": "Después del sacrificio realizado por Superman (Henry Cavill), la \n perspectiva de Bruce Wayne (Ben Affleck), nombre tras el que se oculta la \n ideantidad secreta de Batman, cambia radicalmente...",
                "anio": "2017",
                "categoria": "Aventura, Accion, Fantasia",
                "clasificacion": "B15",
                "duracion": "122 min",
                "calificacion": "1 | 2 | 3 | 4 | 5 |",
                "poster": "C:\\xampp\\htdocs\\netflis\\posters\\justiceleague.jpg",
                "trailer": "C:\\xampp\\htdocs\\netflis\\videos\\Justice_league.mp4",

            }, {
                "titulo": "Kong: La isla calavera",
                "sinopsis": "Al adentrarse en esta bella y también traicionera isla, los \n exploradores encontrarán algo absolutamente sorprendente...",
                "anio": "2017",
                "categoria": "Aventura, Accion, Fantasia",
                "clasificacion": "B15",
                "duracion": "108 min",
                "calificacion": "1 | 2 | 3 | 4 | 5 |",
                "poster": "C:\\xampp\\htdocs\\netflis\\posters\\kong.jpg",
                "trailer": "C:\\xampp\\htdocs\\netflis\\videos\\kong.mp4",

            }, {
                "titulo": "The Mummy",
                "sinopsis": "Pese a estar enterrada en una tumba sellada bajo las inclementes \n arenas del desierto, una antigua princesa (Sofia Boutella) cuyo destino le \n fue injustamente arrebatado se despierta en la actualidad...",
                "anio": "2017",
                "categoria": "Aventura, Accion, Terror",
                "clasificacion": "B15",
                "duracion": "117 min",
                "calificacion": "1 | 2 | 3 | 4 | 5 |",
                "poster": "C:\\xampp\\htdocs\\netflis\\posters\\lamomia.jpg",
                "trailer": "C:\\xampp\\htdocs\\netflis\\videos\\La_momia.mp4",

            }, {
                "titulo": "Life",
                "sinopsis": "El argumento del filme, basado en hechos reales, gira en torno a \n la amistad que mantuvieron el fotógrafo Dennis Stock y el actor James Dean...",
                "anio": "2015",
                "categoria": "Biografia, Drama",
                "clasificacion": "B15",
                "duracion": "112 min",
                "calificacion": "1 | 2 | 3 | 4 | 5 |",
                "poster": "C:\\xampp\\htdocs\\netflis\\posters\\life.jpg",
                "trailer": "C:\\xampp\\htdocs\\netflis\\videos\\Life.mp4",

            }, {
                "titulo": "Logan",
                "sinopsis": "Es el año 2029. Los mutantes prácticamente han desparecido. Un \n cansado y abatido Logan (Hugh Jackman) vive retirado en la ciudad mexicana de \n El Paso.",
                "anio": "2017",
                "categoria": "Accion, Aventura, Ciencia ficcion",
                "clasificacion": "B15",
                "duracion": "137 min",
                "calificacion": "1 | 2 | 3 | 4 | 5 |",
                "poster": "C:\\xampp\\htdocs\\netflis\\posters\\logan.jpg",
                "trailer": "C:\\xampp\\htdocs\\netflis\\videos\\Logan.mp4",

            }
        ]
    }
]

}
