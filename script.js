const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];

// Show Loading
const showLoadingSpinner = () => {
  loader.hidden = false; //hidden element is on every html elements
  quoteContainer.hidden = true;
};

// Hide Loading
const hideLoadingSpinner = () => {
  quoteContainer.hidden = false;
  loader.hidden = true;
};

// Show New Quote
const newQuote = (quotes) => {
  // Pick a random quote from quotes array
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  //   Check if author field exist
  quote.author
    ? (authorText.textContent = quote.author)
    : (authorText.textContent = "Unknown");
  // Check quote length to determine styling
  quote.text.length > 50
    ? quoteText.classList.add("long-quote")
    : quoteText.classList.remove("long-quote");
  // Set Quote
  quoteText.textContent = quote.text;
};
// Get Quotes From API
const getQuotes = async () => {
  showLoadingSpinner();
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote(apiQuotes);
    hideLoadingSpinner();
  } catch (err) {
    // Catch Error Here
  }
};

// Tweet Quote
const tweetQuote = () => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
};

// Event Listeners
newQuoteBtn.addEventListener("click", getQuotes);
twitterBtn.addEventListener("click", tweetQuote);

// On Load
getQuotes();
