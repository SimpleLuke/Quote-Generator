const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];

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
  quoteText.textContent = quote.text;
  return quote;
};
// Get Quotes From API
const getQuotes = async () => {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote(apiQuotes);
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
