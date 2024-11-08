// Array mit Daten für die News-Boxen
const newsData = [
    {
        imageSrc: "Images/Rainbow6Siege.jpg",
        author: "Tom",
        date: "27-10-2024",
        title: "Exciting News",
        snippet: "This is a brief snippet...",
        readMoreLink: "news1.html"
    },
    {
        imageSrc: "Images/CsGO.jpg",
        author: "Finn",
        date: "26-10-2024",
        title: "Breaking News",
        snippet: "Another news snippet...",
        readMoreLink: "news2.html"
    },
    {
        imageSrc: "Images/LeagueOfLegends.jpg",
        author: "Josh",
        date: "25-10-2024",
        title: "LoL News",
        snippet: "A third snippet...",
        readMoreLink: "news3.html"
    }
];

// Funktion zum Laden der Inhalte in die News-Boxen
function loadNewsContent() {
    newsData.forEach((newsItem, index) => {
        // IDs für jedes Element anhand des Indexes erstellen
        const imageElement = document.getElementById(`newsImage${index + 1}`);
        const authorElement = document.getElementById(`newsAuthor${index + 1}`);
        const dateElement = document.getElementById(`newsDate${index + 1}`);
        const titleElement = document.getElementById(`newsTitle${index + 1}`);
        const snippetElement = document.getElementById(`newsSnippet${index + 1}`);
        const readMoreElement = document.getElementById(`readMore${index + 1}`);
        
        // Bild und Textinhalte zuweisen
        if (imageElement) {
            imageElement.style.backgroundImage = `url(${newsItem.imageSrc})`;
        }
        if (authorElement) {
            authorElement.textContent = newsItem.author;
        }
        if (dateElement) {
            dateElement.textContent = newsItem.date;
        }
        if (titleElement) {
            titleElement.textContent = newsItem.title;
        }
        if (snippetElement) {
            snippetElement.textContent = newsItem.snippet;
        }
        if (readMoreElement) {
            readMoreElement.href = newsItem.readMoreLink;
        }
    });
}

// Array mit Daten für Tournament-Box
const tournamentData = [
    {
       Name: "KFO SERIES IA | RAINBOW SIX SIEGE 2v2",
       OurTeamNumber: 4,
       OpposedTeamNumber: 3,
       Outcome: "WIN",
       date: "31-10-2023"
    },
    {
      Name: "BLAST Premier World Final 2024",
      OurTeamNumber: 0,
      OpposedTeamNumber: 0,
      Outcome: "UPCOMING",
      date: "30-11-2024"
    }
 ];

function showUpcoming(el){
    el?.classList.add("active");
    document.getElementById("btnPast").classList.remove("active");

    const nameElem = document.getElementById(`tournamentName`);
    const outcomeElem = document.getElementById(`tournamentOutcome`);
    document.getElementById('tournamentResult').innerHTML = "<span class=\"upcomingTournamentDate\" id=\"UpcomingTournamentDate\"></span>";
    const dateElem = document.getElementById(`UpcomingTournamentDate`);

    // Rufe das PHP-Skript über AJAX ab
    fetch('index.php')
        .then(response => response.text())  // Wandle die Antwort in Text um
        .then(data => {
            // Zeige die Antwort (z. B. "Hello, World!") im HTML an
            if(nameElem){ nameElem.textContent = data; }
        })
        .catch(error => {
            console.error('Fehler beim Abrufen des PHP-Skripts:', error);
    });

    // if(nameElem){nameElem.textContent = tournamentData[1].Name;}
    if(outcomeElem){outcomeElem.textContent = tournamentData[1].Outcome;}
    if(dateElem){dateElem.textContent = tournamentData[1].date;}
    outcomeElem.className = "tournamentOutcomeUpcoming";
}

function showPast(el){
    el.classList.add("active");
    document?.getElementById("btnUpcoming").classList.remove("active");
    const nameElem = document.getElementById(`tournamentName`);
    const outcomeElem = document.getElementById(`tournamentOutcome`);
    document.getElementById('tournamentResult').innerHTML = "<span class=\"resultNumber\" id=\"TourResultLeft\">1</span> <span class=\"resultDivider\">:</span> <span class=\"resultNumber\" id=\"TourResultRight\">3</span>";
    const leftResultElem = document.getElementById(`TourResultLeft`);
    const rightResultElem = document.getElementById(`TourResultRight`);
    if(nameElem){nameElem.textContent = tournamentData[0].Name;}
    if(outcomeElem){outcomeElem.textContent = tournamentData[0].Outcome;}
    if(leftResultElem){leftResultElem.textContent = tournamentData[0].OurTeamNumber;}
    if(rightResultElem){ rightResultElem.textContent = tournamentData[0].OpposedTeamNumber;}
    outcomeElem.className = "tournamentOutcome";
}


document.addEventListener('DOMContentLoaded', function() {
    loadNewsContent();
    showUpcoming(document.getElementById("btnUpcoming"));
});