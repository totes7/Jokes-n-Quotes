// script.js
document.getElementById('btn-jokes').addEventListener('click', getJoke);

function getJoke() {
  fetch('https://v2.jokeapi.dev/joke/Any')
    .then(response => response.json())
    .then(data => {
      const responseContent = document.getElementById('response-content');
      if (data.type === 'twopart') {
        responseContent.innerHTML = `<p><strong>Setup:</strong> ${data.setup}</p><p><strong>Delivery:</strong> ${data.delivery}</p>`;
      } else {
        responseContent.textContent = `Joke: ${data.joke}`;
      }
    })
    .catch(error => {
      console.error('Error fetching joke:', error.message);
    });
}
