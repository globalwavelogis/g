// Generate random tracking details
function generateTrackingDetails(trackingNumber) {
  var trackingDetails = [
    { trackingNumber: 'LON321612789CZE', status: 'V průběhu přepravy', location: 'Lon, Seaport 3', date: '14-06-2023', time: '11:57' },
    { trackingNumber: 'LON201654709CZE', status: 'V průběhu přepravy', location: 'Námořní celnice, 'hranice Spojeného království', date: '22-06-2023', time: '9:21' },
    { trackingNumber: 'LON324654557CZE', status: 'Out for Delivery', location: 'San Francisco', date: '2023-06-04', time: '11:45' },
    { trackingNumber: 'LON123654987CZE', status: 'Delivered', location: 'San Francisco', date: '2023-06-04', time: '14:30' }
  ];

  // Find tracking details for the provided tracking number
  var details = trackingDetails.find(function (item) {
    return item.trackingNumber === trackingNumber;
  });

  return details || null;
}

// Track button click event
document.getElementById('trackButton').addEventListener('click', function () {
  var trackingNumber = document.getElementById('trackingNumber').value;
  var trackingTable = document.querySelector('.tracking-table');
  var tbody = trackingTable.querySelector('tbody');
  var resultDiv = document.querySelector('.result');
  var trackButton = document.getElementById('trackButton').value;

  // Generate random tracking details for the provided tracking number
  var trackingDetails = generateTrackingDetails(trackingNumber);

  // Clear previous table rows
  tbody.innerHTML = '';
  setTimeout(function () {
  if (trackingNumber == 'LON321612789CZE')
      {
        tbody.innerHTML = 'Janka Žigová';
      } else if (trackingNumber == 'LON201654709CZE')
      {
        tbody.innerHTML = 'Anna Hornova';
      }
  }, 1000);
  
  // Display the tracking details with a delay of 3 seconds
  setTimeout(function () {
    if (trackingDetails) {
      var row = document.createElement('tr');
      var columns = ['trackingNumber', 'status', 'location', 'date', 'time'];
      
      columns.forEach(function (column) {
        var cell = document.createElement('td');
        cell.textContent = trackingDetails[column];
        row.appendChild(cell);
      });

      tbody.appendChild(row);

      // Show the tracking details table
      trackingTable.style.display = 'table';
    } else {
      // Hide the tracking details table if no details found
      setTimeout(function () {
        // Hide the tracking details table if no details found
        trackingTable.style.display = 'none';

        // Show the result div with the error message
        resultDiv.innerHTML = '<p>No tracking details found for the provided tracking number.</p>';
        resultDiv.style.display = 'block';
      }, 1000);
    }
  }, 1000);
});

// Get the language selection element
const languageSelect = document.getElementById('languageSelect');

// Add an event listener for language selection
languageSelect.addEventListener('change', function () {
  // Get the selected language
  const selectedLanguage = this.value;

  // Define translations for each language
  const translations = {
    en: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      trackParcel: 'Track Parcel',
      placeholder: 'Enter Tracking Number',
      trackButton: 'Track',
      trackingNumber: 'Tracking Number',
      status: 'Status',
      location: 'Location',
      date: 'Date',
      time: 'Time',
      administrators: 'Administrators',
      noDetailsFound: 'No tracking details found for the provided tracking number.',
      trackingPage: 'Tracking Page'
    },
    cs: {
      home: 'Domů',
      services: 'Služby',
      about: 'O nás',
      contact: 'Kontakt',
      trackParcel: 'Sledovat balík',
      placeholder: 'Zadejte číslo sledování',
      trackButton: 'Sledovat',
      trackingNumber: 'ČS',
      status: 'Stav',
      location: 'Poloha',
      date: 'Datum',
      time: 'Čas',
      administrators: 'Administrátoři',
      noDetailsFound: 'Nebyly nalezeny žádné informace o sledování pro zadané číslo sledování.',
      trackingPage: 'Sledovací stránka'
    },
    de: {
      home: 'Startseite',
      services: 'Dienstleistungen',
      about: 'Über uns',
      contact: 'Kontakt',
      trackParcel: 'Paket verfolgen',
      placeholder: 'Geben Sie die Sendungsnummer ein',
      trackButton: 'Verfolgen',
      trackingNumber: 'Sendungsnummer',
      status: 'Status',
      location: 'Ort',
      date: 'Datum',
      time: 'Uhrzeit',
      administrators: 'Administratoren',
      noDetailsFound: 'Keine Sendungsdetails für die angegebene Sendungsnummer gefunden.',
      trackingPage: 'Sendungsverfolgung'
    },
    fr: {
      home: 'Accueil',
      services: 'Services',
      about: 'À propos',
      contact: 'Contact',
      trackParcel: 'Suivre le colis',
      placeholder: 'Entrez le numéro de suivi',
      trackButton: 'Suivre',
      trackingNumber: 'Numéro de suivi',
      status: 'Statut',
      location: 'Emplacement',
      date: 'Date',
      time: 'Heure',
      administrators: 'Administrateurs',
      noDetailsFound: 'Aucun détail de suivi trouvé pour le numéro de suivi fourni.',
      trackingPage: 'Page de suivi'
    },
    sk: {
      home: 'Domov',
      services: 'Služby',
      about: 'O nás',
      contact: 'Kontakt',
      trackParcel: 'Sledovať balík',
      placeholder: 'Zadajte sledovacie číslo',
      trackButton: 'Sledovať',
      trackingNumber: 'SC',
      status: 'Stav',
      location: 'Umiestnenie',
      date: 'Dátum',
      time: 'Čas',
      administrators: 'Administrátori',
      noDetailsFound: 'Pre zadané sledovacie číslo neexistujú žiadne informácie o sledovaní.',
      trackingPage: 'Sledovacia stránka'
    },
    // Add translations for other languages if needed
  };

  // Update the translations based on the selected language
  if (selectedLanguage in translations) {
    const translation = translations[selectedLanguage];
    const navLinks = document.querySelectorAll('nav ul li a');
    const trackParcelHeading = document.querySelector('.container h2');
    const trackingNumberInput = document.getElementById('trackingNumber');
    const trackButton = document.getElementById('trackButton');
    const trackingTableHeadings = document.querySelectorAll('.tracking-table th');
    const administrators = document.getElementById('adminText');
    const resultDiv = document.querySelector('.result');
    const trackPageHeader = document.getElementById('tPP');
    // Update navigation links
    navLinks.forEach((link, index) => {
      const key = Object.keys(translation)[index];
      link.textContent = translation[key];
    });

    // Update track parcel heading
    if (trackParcelHeading) {
      trackParcelHeading.textContent = translation.trackParcel;
    }

    // Update tracking number input placeholder
    if (trackingNumberInput) {
      trackingNumberInput.placeholder = translation.placeholder;
    }

    // Update track button text
    if (trackButton) {
      trackButton.textContent = translation.trackButton;
    }

    // Update tracking table headings
    trackingTableHeadings.forEach((heading, index) => {
      const key = Object.keys(translation).slice(7)[index];
      heading.textContent = translation[key];
    });

    // Update administrators text
    if (administrators) {
      administrators.textContent = translation.administrators;
    }

    // Update result div with error message
    if (resultDiv) {
      resultDiv.innerHTML = translation.noDetailsFound;
    }

    // Update "Tracking Page" header with the translated value
    if (trackPageHeader) {
      trackPageHeader.textContent = translation.trackingPage;
    }
  }
});
