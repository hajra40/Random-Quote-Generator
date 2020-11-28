import './App.css'
import React, { useEffect, useState } from 'react'


const Quotes = () => {
  const [Quote,setQuote] = useState(' ');
  const [Author,setAuthor] = useState('');
  
  useEffect(() => {
    getQuote()
  }, []);

  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];
        console.log(randomNum);
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      })
  }

  const onHandleClick = () => {
    getQuote();
  }

  return (
    <div id="quote-box">
      <div id="text">
      <p>{Quote}</p>
      </div>
      <div id="author">
        <p>{Author}</p>
      </div>
        <button id="new-quote" onClick={onHandleClick}>New Quote</button>
    </div>
  )
}

export default Quotes
