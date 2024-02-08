// jokeapi script
$("#btn-jokes").on("click", getJokes);

function getJokes() {
  updateJokesCount();
  displayCounters();
  fetch("https://v2.jokeapi.dev/joke/Any/3")
    .then((response) => response.json())
    .then((data) => {
      const responseContent = document.getElementById("response-content");
      responseContent.innerHTML = ""; // Clear existing content

      if (data.type === "twopart") {
        responseContent.innerHTML += `
          <div class="response-card">
            <h2>Generated Joke</h2>
            <hr>
            <p><strong>Setup:</strong> ${data.setup}</p>
            <p><strong>Delivery:</strong> ${data.delivery}</p>
          </div>`;
      } else {
        responseContent.innerHTML += `
          <div class="response-card">
            <h2>Generated Joke</h2>
            <hr>
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
  updateQuotesCount();
  displayCounters();
  const apiUrl = "https://type.fit/api/quotes";
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let randomNumber = Math.floor(Math.random() * 15);
      let quote = data[randomNumber];
      let quoteText = quote.text;
      let authorData = quote.author;
      let sections = authorData.split(",");
      let authorFinal = sections[0];

      $(".modal-body").html(
        `<div class="response-card"><p><strong>Quote:</strong> ${quoteText}</p><p><strong>Author:</strong> ${authorFinal}</p></div>`
      );
    })
    .catch(function (error) {
      console.error("Error fetching quotes:", error.message);
    });
}

// Counter for jokes and quotes

function updateJokesCount() {
  let jokesCount = localStorage.getItem("JokesCount");
  if (jokesCount) {
    jokesCount++;
    localStorage.setItem("JokesCount", jokesCount);
  } else {
    jokesCount = 1;
    localStorage.setItem("JokesCount", jokesCount);
  }
}

function updateQuotesCount() {
  let quotesCount = localStorage.getItem("QuotesCount");
  if (quotesCount) {
    quotesCount++;
    localStorage.setItem("QuotesCount", quotesCount);
  } else {
    quotesCount = 1;
    localStorage.setItem("QuotesCount", quotesCount);
  }
}

// Display counters
let counterDisplay = $("<div>").addClass("row");
counterDisplay.css({"display": "block", "background-color": "white", "margin": "5px", "border": "1px solid #ccc", "padding": "10px", "border-radius": "8px", "text-align": "center"});
$('#main').prepend(counterDisplay);

function displayCounters() {
  counterDisplay.html(
    `<h3>Users have selected Jokes ${localStorage.getItem(
      "JokesCount"
    )} times and Quotes ${localStorage.getItem(
      "QuotesCount"
    )} times. What will you choose?</h3>`
  );
}

displayCounters();
