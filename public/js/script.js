const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


// forms script

// JavaScript for form validation

document.getElementById('incidentForm').addEventListener('submit', function(event) {
    var incidentType = document.getElementById('incidentType').value;
    var incidentDate = document.getElementById('incidentDate').value;
    var incidentDescription = document.getElementById('incidentDescription').value;
    var reporterName = document.getElementById('reporterName').value;
    var reporterEmail = document.getElementById('reporterEmail').value;
    var errorMessages = '';
  
    if (incidentType === '') {
      errorMessages += 'Please select the incident type.<br>';
    }
  
    if (incidentDate === '') {
      errorMessages += 'Please enter the date of the incident.<br>';
    }
  
    if (incidentDescription === '') {
      errorMessages += 'Please provide a description of the incident.<br>';
    }
  
    if (reporterName === '') {
      errorMessages += 'Please enter your name.<br>';
    }
  
    if (reporterEmail === '') {
      errorMessages += 'Please enter your email.<br>';
    } else {
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(reporterEmail)) {
        errorMessages += 'Please enter a valid email address.<br>';
      }
    }
  
    var errorDiv = document.getElementById('errorMessages');
    errorDiv.innerHTML = errorMessages;
  
    if (errorMessages !== '') {
      event.preventDefault(); // Prevent the form from submitting if there are errors
    }
  });
  





  document.getElementById('incidentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const incidentType = document.getElementById('incidentType').value;
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Create an object with the form values
    const incident = {
      incidentType,
      date,
      description,
      name,
      email
    };

    // Store the incident details in local storage
    let incidents = JSON.parse(localStorage.getItem('incidents')) || [];
    incidents.push(incident);
    localStorage.setItem('incidents', JSON.stringify(incidents));

    // Display the incidents in the table
    displayIncidents();
  });

  // Function to display incidents in the table
  function displayIncidents() {
    const incidents = JSON.parse(localStorage.getItem('incidents')) || [];
    const tableBody = document.getElementById('incidentTableBody');
    tableBody.innerHTML = '';

    incidents.forEach(function(incident) {
      const row = tableBody.insertRow();
      row.innerHTML = `
        <td>${incident.incidentType}</td>
        <td>${incident.date}</td>
        <td>${incident.description}</td>
        <td>${incident.name}</td>
        <td>${incident.email}</td>
      `;
    });
  }

  // Display existing incidents when the page loads
  displayIncidents();