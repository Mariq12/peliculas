// Función para agregar una nueva película
function agregarPelicula() {
  var movieName = document.getElementById("movieName").value;
  var movieYear = document.getElementById("movieYear").value;
  var movieLink = document.getElementById("movieLink").value;
  var redirectLink = document.getElementById("redirectLink").value;

  // Validación básica de los campos
      if (movieName.trim() === "" || movieYear.trim() === "" || movieLink.trim() === "" || redirectLink.trim() === "") {
        alert("Por favor completa todos los campos");
        return;
      }

      // Validar que movieYear sea un número de 4 dígitos
      if (!(/^\d{4}$/.test(movieYear))) {
        alert("Por favor ingresa un año válido (4 dígitos numéricos)");
        return;
      }

      // Validar que movieLink sea un enlace válido
      if (!isValidUrl(movieLink)) {
        alert("Por favor ingresa un enlace de imagen válido");
        return;
      }

      // Validar que redirectLink sea un enlace válido
      if (!isValidUrl(redirectLink)) {
        alert("Por favor ingresa un enlace de información válido");
        return;
      }

      // Crear el elemento de película
      var movieElement = document.createElement("div");
      movieElement.classList.add("container_movies");

      // Construir el HTML del elemento de película
      var html = '<a href="' + redirectLink + '">';
      html += '<img src="' + movieLink + '" alt="' + movieName + '">';
      html += "</a>";
      html += "<p>" + movieName + "</p>";
      html += "<p>Año: " + movieYear + "</p>";

      // Agregar el HTML al elemento de película
      movieElement.innerHTML = html;

      // Agregar la nueva película al contenedor de películas
      var containerForm = document.querySelector(".container_form");
      containerForm.parentNode.insertBefore(movieElement, containerForm.nextSibling);
	  //var moviesListContainer = document.getElementById("moviesList");
      //moviesListContainer.appendChild(movieElement);

      // Limpiar los campos del formulario
      document.getElementById("movieName").value = "";
      document.getElementById("movieYear").value = "";
      document.getElementById("movieLink").value = "";
      document.getElementById("redirectLink").value = "";

      // Opcional: Mostrar un mensaje de éxito
      alert("Película agregada correctamente");
    }

    // Función para validar si es un enlace válido
    function isValidUrl(url) {
      // Expresión regular para validar enlaces
      var urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
      return urlPattern.test(url);
    }

// Ingresa los datos manualmente
var moviesList = [
  "https://images-0.rakuten.tv/storage/global-movie/translation/artwork/84fe0d46-9369-472b-9442-8e75a7ec6082-harry-potter-y-la-piedra-filosofal-1656585961.jpeg",
  "https://images-1.rakuten.tv/storage/global-movie/translation/artwork/70dd3e44-2160-4815-a460-dd24e71d4332-harry-potter-y-la-camara-secreta-1656586080.jpeg",
  "https://m.media-amazon.com/images/S/pv-target-images/d513984fb648e7dcff2fc41be4002b8fbc9f8c3f0bf0878db7c4abb532ecc1a6.jpg",
  "https://m.media-amazon.com/images/S/pv-target-images/a7e79947458f867291d8c528e22eb6836b651bba6f7ed987a28d3262c8e39d1f.jpg",
  "https://m.media-amazon.com/images/S/pv-target-images/361542f977ffdadb7863ce868cd4b1720f18c5a4e9657b60dff154e7647bfe87.jpg",
  "https://m.media-amazon.com/images/S/pv-target-images/3a8497f217c406c7b423e19c531d8a9342b99a5c61de17eb79d30447e0a3faef.jpg",
  "https://musicart.xboxlive.com/7/32e15000-0000-0000-0000-000000000002/504/image.jpg",
  "https://musicart.xboxlive.com/7/44e15000-0000-0000-0000-000000000002/504/image.jpg"
];

// Agregar un enlace para redireccionar
var redirectLinks = [
  "https://es.wikipedia.org/wiki/Harry_Potter_y_la_piedra_filosofal_(pel%C3%ADcula)",
  "https://es.wikipedia.org/wiki/Harry_Potter_y_la_c%C3%A1mara_secreta_(pel%C3%ADcula)",
  "https://es.wikipedia.org/wiki/Harry_Potter_y_el_prisionero_de_Azkaban_(pel%C3%ADcula)",
  "https://es.wikipedia.org/wiki/Harry_Potter_y_el_c%C3%A1liz_de_fuego_(pel%C3%ADcula)",
  "https://es.wikipedia.org/wiki/Harry_Potter_y_la_Orden_del_F%C3%A9nix_(pel%C3%ADcula)",
  "https://es.wikipedia.org/wiki/Harry_Potter_y_el_misterio_del_pr%C3%ADncipe_(pel%C3%ADcula)",
  "https://es.wikipedia.org/wiki/Harry_Potter_y_las_reliquias_de_la_Muerte:_parte_1",
  "https://es.wikipedia.org/wiki/Harry_Potter_y_las_reliquias_de_la_Muerte:_parte_2",
  "https://www.example9.com"
];
//Agrega elementos a la lista usando .push
moviesList.push(
  "https://www.aceprensa.com/wp-content/uploads/2008/12/8966-0.jpg"
);
// Agregar los nombres de las películas abajo de las imágenes
var nameMovies = [
  "Harry Potter y la piedra filosofal",
  "Harry Potter y la cámara secreta",
  "Harry Potter y el prisionero de Azkaban ",
  "Harry Potter y el cáliz de fuego",
  "Harry Potter y la Orden del Fénix",
  "Harry Potter y el príncipe mestizo",
  "Harry Potter y las reliquias de la muerte: Parte 1",
  "Harry Potter y las reliquias de la muerte - Parte 2",
  "La saga Crepúsculo: Eclipse"
];
// Agrega el año debajo del nombre de cada pelicula
var year = [2001, 2002, 2004, 2005, 2007, 2009, 2010, 2011, 2011];

document.write('<div class="container_allMovies">');

//Desafío 1 - Convertir for en
//Desafío 2 Asegura que la imagen sea jpg o jpeg
var i = 0;
while (i < moviesList.length) {
  if (moviesList[i].endsWith("jpg") || moviesList[i].endsWith("jpeg")) {
    document.write('<div class="container_movies">');
    // Agregar enlace alrededor de la imagen
    document.write('<a href="' + redirectLinks[i] + '">');
    document.write("<img src=" + moviesList[i] + ">");
    document.write("</a>");
    document.write("<p>" + nameMovies[i] + "</p>");
    document.write("<p>Año: " + year[i] + "</p>");
    //Desafío 4 - Colocar títulos debajo de la imagen
    document.write("</div>");
  } else {
    document.write(
      "<p> La imagen " +
        i +
        " no se leyó porque no es un archivo jpeg o jpg </p>"
    );
  }
  i++;
}
document.write("</div>");
