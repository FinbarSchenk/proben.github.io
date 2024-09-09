alert('Hallo Welt!');

//Externe Anbindung//
src="https://cdn.jsdelivr.net/npm/chart.js"
// JavaScript-Funktion zum Initialisieren der Standardansicht
function initializeDefaultView() {
    // Verstecke die Inhalte von upcoming und prognosis
    const upcomingSection = document.querySelector('.upcoming');
    const prognosisSection = document.querySelector('.prognosis');

    if (upcomingSection) {
        upcomingSection.style.display = 'none';
    }

    if (prognosisSection) {
        prognosisSection.style.display = 'none';
    }

    // Zeige den Inhalt von previous an (standardmäßig ausgewählt)
    const previousSection = document.querySelector('.previous');
    if (previousSection) {
        previousSection.style.display = 'block';
    }
}

// JavaScript-Funktion zum Austauschen des Inhalts basierend auf der ausgewählten Klasse
function changeContent(className) {
    // Verstecke alle Abschnitte
    const sections = document.querySelectorAll('.previous, .upcoming, .prognosis');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Zeige den ausgewählten Abschnitt basierend auf der übergebenen Klasse an
    const selectedSection = document.querySelector(`.${className}`);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Event-Listener für Klickereignisse auf die Schaltflächen
document.addEventListener('DOMContentLoaded', () => {
    // Initialisiere die Standardansicht
    initializeDefaultView();

    // Finde die Schaltflächen mit den entsprechenden IDs
    const previousBtn = document.getElementById('previous');
    const upcomingBtn = document.getElementById('upcoming');
    const prognosisBtn = document.getElementById('prognosis');

    // Füge Klickereignis-Handler hinzu, um den Inhalt zu ändern
    previousBtn.addEventListener('click', () => {
        changeContent('previous');
    });

    upcomingBtn.addEventListener('click', () => {
        changeContent('upcoming');
    });

    prognosisBtn.addEventListener('click', () => {
        changeContent('prognosis');
    });
});

// Difinieren der Arrays
let arr1 = ["Resident Evil", "Resident Evil 2", "Resident Evil 3: Nemisis", "Resident Evil 4", "Resident Evil 5", "Resident Evil 6"];
let arr2 = ["Resident Evil 0", "Resident Evil 2 Remake", "Resident Evil 3 Remake", "Resident Evil 4 Remake", "Resident Evil 5 Remake", "Resident Evil 6 Remake"];
let arr3 = [8.2, 8.9, 8.8, 10, 9.3, 7.9];
let arr4 = [6.5, 9.0, 9.0, 10, 9.5, 8.3];

// Function to create a game chart with the given chartId and arrays
function createGameCharts() {
  // Daten für das Diagramm (Beispielwerte)
  const gameData1 = {
    labels: arr1,
    datasets: [
      {
        label: 'Bewertung',
        data: arr3,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointRadius: 5,
        pointHoverRadius: 8,
        fill: false,
        borderDash: [] // full line
      }
    ]
  };

  const gameData2 = {
    labels: arr2,
    datasets: [
      {
        label: 'Bewertung (dotted)',
        data: arr4,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointRadius: 5,
        pointHoverRadius: 8,
        fill: false,
        borderDash: [5, 5] // dotted line
      }
    ]
  };

  // Optionen für das Diagramm
   const gameOptions = {
      scales: {
          y: {
              min: 6,
              max: 10, // Maximale y-Achsenwert
                grid: {
                    color: 'white',
                  },
                ticks: {
                  color: 'white',
                },
                label: {
                  color: 'white',
                },
                },
                x: {
                  min: 0,
                  max: 8, // Maximale x-Achsenwert
                    grid: {
                      color: 'white',
                    },
                  ticks: {
                    color: 'white',
                  },
                  label: {
                    color: 'white',
                  },
                }
              }
            };



  // Canvas-Element für das Diagramm
  const ctx1 = document.getElementById('gameChart1').getContext('2d');
  const ctx2 = document.getElementById('gameChart2').getContext('2d');

  // Erstellen des Kurvendiagramms (Liniendiagramms) mit Chart.js
  const chart1 = new Chart(ctx1, {
    type: 'line',
    data: gameData1,
    options: gameOptions
  });

  const chart2 = new Chart(ctx2, {
    type: 'line',
    data: gameData2,
    options: gameOptions
  });
}

// Event-Listener für das Laden der Seite
document.addEventListener('DOMContentLoaded', () => {
  // Sort the arrays and create the game charts
  createGameCharts();
});