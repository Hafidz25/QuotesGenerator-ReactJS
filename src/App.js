import Quotes from './components/Quotes'
import React, { useState, useEffect } from 'react'

function App() {
  const [quote, setQuote] = useState({
    anime: null,
    character: null,
    quote: null
  })

  const fetchQuote = async () => {
    return await fetch('https://animechan.vercel.app/api/random').then(response => response.json())
  }

  const generate = async () => {
    setQuote(await fetchQuote())
  }

  useEffect(() => {
    async function api() {
      setQuote(await fetchQuote())
    }
    api()
  }, []);

  return (
    <div className="App">
      <Quotes quote={quote} />

      <button onClick={generate}>Generate new quote</button>
    </div>
  );
}

export default App;
