// JavaScript zur Bildrotation
const teams = [
    { src: "Images/Rainbow6Siege.jpg", link: "TeamDetails.html?team=Rainbow6Siege" },
    { src: "Images/CsGO.jpg", link: "TeamDetails.html?team=CsGo" },
    { src: "Images/LeagueOfLegends.jpg", link: "TeamDetails.html?team=LeagueOfLegends" }
  ];
  
  function rotateTeams(direction) {
    if (direction === "right") {
      teams.unshift(teams.pop()); // Letztes Element wird nach vorne geschoben
    } else {
      teams.push(teams.shift()); // Erstes Element wird nach hinten geschoben
    }
  
    // Aktualisiert die Bilder und Links
    document.querySelector("#leftTeamImage img").src = teams[0].src;
    document.querySelector("#leftTeamImage a").href = teams[0].link;
  
    document.querySelector("#centralTeamImage img").src = teams[1].src;
    document.querySelector("#centralTeamImage a").href = teams[1].link;
  
    document.querySelector("#rightTeamImage img").src = teams[2].src;
    document.querySelector("#rightTeamImage a").href = teams[2].link;
  }

  // Automatische Rotation alle 5 Sekunden/5000ms
setInterval(() => rotateTeams("right"), 5000);