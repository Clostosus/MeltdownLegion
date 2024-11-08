// JavaScript um den gleichen Header&Footer in verschiedene Seiten zu laden
document.addEventListener('DOMContentLoaded', function() {
// Header nach dem Laden des Dokuments per fetch einfügen
    fetch('header.html')
          .then(response => response.text()) // text aus fetch auswaehlen
          .then(data => { document.getElementById('header').innerHTML = data;}) // text ins innere html des <header> laden. 
          .catch(error => console.error('Error loading header:', error));

// Footer beim Laden der Page per fetch einfügen
    fetch('footer.html')
          .then(response => response.text())
          .then(data => { document.getElementById('footer').innerHTML = data;})
          .catch(error => console.error('Error loading footer:', error));
});

document.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY > 50) { // Die Höhe, ab der der Header transparent wird
        console.log("Hallo!");
        header.classList.add("transparent");
    } else {
        header.classList.remove("transparent");
    }
});