// jokeapi script
$('#btn-jokes').on('click', getJokes);

function getJokes() {
  fetch('https://v2.jokeapi.dev/joke/Any/3')
    .then(response => response.json())
    .then(data => {
      const responseContent = document.getElementById('response-content');
      responseContent.innerHTML = ''; // Clear existing content

      if (data.type === 'twopart') {
        responseContent.innerHTML += `
          <div class="response-card">
            <p><strong>Setup:</strong> ${data.setup}</p>
            <p><strong>Delivery:</strong> ${data.delivery}</p>
          </div>`;
      } else {
        responseContent.innerHTML += `
          <div class="response-card">
            <p><strong>Joke:</strong> ${data.joke}</p>
          </div>`;
      }
    })
    .catch(error => {
      console.error('Error fetching jokes:', error.message);
    });

}


// Daily Inspirational Quotes

$('#btn-quotes-2').on('click', getQuotes);

function getQuotes() {
    const apiUrl = 'https://zenquotes.io/api/today';
    fetch(`https://cors-anywhere.herokuapp.com/${apiUrl}`, {
        method: 'GET',
      })
    // fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const modalBody = document.querySelector('#quotesModal .modal-body');
      modalBody.innerHTML = ''; // Clear existing content

      // Check if the data contains quotes
      if (data.length > 0) {
        // Display each quote in the modal body
        data.forEach(quote => {
          modalBody.innerHTML += `
            <div class="response-card">
              <p><strong>Quote:</strong> ${quote.q}</p>
              <p><strong>Author:</strong> ${quote.a}</p>
            </div>`;
        });
      } else {
        // If no quotes are available
        modalBody.innerHTML = '<p>No quotes available at the moment.</p>';
      }
    })
    .catch(error => {
      console.error('Error fetching quotes:', error.message);
    });
  
}

