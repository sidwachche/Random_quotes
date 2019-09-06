import React, { useState } from 'react';
import './RandomQuotes.scss';
import quotes from './quotes';
import colors from './colors';
function getRandomIndex() {
  return Math.round(Math.random() * (quotes.length - 1));
}
export function getRandomColor() {
  let index = Math.round(Math.random() * (colors.length - 1));
  console.log(index);
  return colors[index];
}

function RandomQuotes(props) {
  const [index, setIndex] = useState(0);
  return (
    <div id="quote-box">
      <h2 id="text" style={{ color: props.color }}>
        {quotes[index].quoteText}
      </h2>
      <h5 id="author" style={{ color: props.color }}>
        {quotes[index].quoteAuthor}
      </h5>
      <div className="btns-container">
        <span className="social">
          <a
            href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${
              quotes[index].quoteText
            }" ${quotes[index].quoteAuthor}`}
            target="_blank"
            id="tweet-quote"
          >
            <img
              src={require('../assets/twitter.svg')}
              className="twitter-icon"
              alt="broke"
            />
          </a>
          <button id="tumblr-quote" className="btn" />
        </span>

        <button
          id="new-quote"
          style={{ backgroundColor: props.color }}
          className="btn"
          onClick={() => {
            setIndex(getRandomIndex());
            props.setColor(getRandomColor());
          }}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}

export default RandomQuotes;
