// script.js
document.getElementById('btn-jokes').addEventListener('click', getJokes);

function getJokes() {
  const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const apiUrl = 'https://v2.jokeapi.dev/joke/Any/3';

  fetch(corsProxyUrl + apiUrl)
    .then(response => response.json())
    .then(data => {
      const responseContent = document.getElementById('response-content');
      responseContent.innerHTML = ''; // Clear existing content

      data.jokes.forEach(joke => {
        if (joke.type === 'twopart') {
          responseContent.innerHTML += `<p><strong>Setup:</strong> ${joke.setup}</p><p><strong>Delivery:</strong> ${joke.delivery}</p>`;
        } else {
          responseContent.innerHTML += `<p>Joke: ${joke.joke}</p>`;
        }
      });
    })
    .catch(error => {
      console.error('Error fetching jokes:', error.message);
    });
  console.log('Button clicked!');
}
