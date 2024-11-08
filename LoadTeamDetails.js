// Funktion zum Auslesen des URL-Parameters der TeamDetails Seiten
function getTeamFromUrl() {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('team'); // Gibt den Wert des "team"-Parameters zurück
} // Return Wert: ("CsGO"/"LeagueOfLegends"/"Rainbow6Siege") je nach Auswahl in index.html

// Funktion zum Laden des Team-Contents
function loadTeamContent() {
    const team = getTeamFromUrl();
    const contentDiv = document.getElementById('teamContent');
    if (team === 'Rainbow6Siege') {
        contentDiv.innerHTML = `<hr> <h1 class="aboutUsHeading" style="margin-top: 10vh;">...</h1>
        <p class="aboutUsText" style="margin-top: 10vh;"> Our Rainbow6Siege Team, its stats and its players are below. Feel free to explore our Team. </p>`;
    } else {
        contentDiv.innerHTML = `<hr> <h1 class="aboutUsHeading" style="margin-top: 10vh;">Team not found.</h1>
        <p class="aboutUsText" style="margin-top: 10vh;">Try another team, maybe it already exists.</p>`
    }
}

document.addEventListener('DOMContentLoaded', function() {
   loadTeamContent();
});