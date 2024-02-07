// jokeapi script
$("#btn-jokes").on("click", getJokes);

function getJokes() {
  fetch("https://v2.jokeapi.dev/joke/Any/3")
    .then((response) => response.json())
    .then((data) => {
      const responseContent = document.getElementById("response-content");
      responseContent.innerHTML = ""; // Clear existing content

      if (data.type === "twopart") {
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
    .catch((error) => {
      console.error("Error fetching jokes:", error.message);
    });
}

// Daily Inspirational Quotes

$("#btn-quotes-2").on("click", getQuotes);

function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let randomNumber = Math.floor(Math.random() * 15);
      let quote = data[randomNumber]
      let quoteText = quote.text
      let authorData = quote.author;
      let sections = authorData.split(',');
      let authorFinal = sections[0];

      $(".modal-body").html(
        `<div class="response-card"><p><strong>Quote:</strong> ${quoteText}</p><p><strong>Author:</strong> ${authorFinal}</p></div>`
      );
    });
}
