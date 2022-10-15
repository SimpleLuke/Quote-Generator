// const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';

let apiQuotes = [];

// Show New Quote
const newQuote = (quotes) => {
  // Pick a random quote from quotes array
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return quote;
};
// Get Quotes From API
const getQuotes = async () => {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote(apiQuotes);
    console.log(newQuote(apiQuotes));
  } catch (err) {
    // Catch Error Here
  }
};

// On Load
getQuotes();
