// jokeapi script
document.getElementById('btn-jokes').addEventListener('click', getJokes);

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

  console.log('Button clicked!');
}


// Daily Inspirational Quotes
document.getElementById('btn-quotes').addEventListener('click', getQuotes);

function getQuotes() {
  fetch('https://zenquotes.io/api/today')
    .then(response => response.json())
    .then(data => {
      const responseContent = document.getElementById('response-content');
      responseContent.innerHTML = ''; // Clear existing content

      // Check if the data contains quotes
      if (data.length > 0) {
        // Display each quote in a card
        data.forEach(quote => {
          responseContent.innerHTML += `
            <div class="response-card">
              <p><strong>Quote:</strong> ${quote.q}</p>
              <p><strong>Author:</strong> ${quote.a}</p>
            </div>`;
        });
      } else {
        // If no quotes are available
        responseContent.innerHTML = '<p>No quotes available at the moment.</p>';
      }
    })
    .catch(error => {
      console.error('Error fetching quotes:', error.message);
    });

  console.log('Get Quotes button clicked!');
}

