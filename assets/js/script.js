// script.js
document.getElementById('btn-jokes').addEventListener('click', getJokes);

function getJokes() {
  fetch('https://v2.jokeapi.dev/joke/Any/3')
    .then(response => response.json())
    .then(data => {
      const responseContent = document.getElementById('response-content');
      responseContent.innerHTML = ''; // Clear existing content

      if (data.type === 'twopart') {
        responseContent.innerHTML += `<p><strong>Setup:</strong> ${data.setup}</p><p><strong>Delivery:</strong> ${data.delivery}</p>`;
      } else {
        responseContent.innerHTML += `<p>Joke: ${data.joke}</p>`;
      }
    })
    .catch(error => {
      console.error('Error fetching jokes:', error.message);
    });

  console.log('Button clicked!');
}

