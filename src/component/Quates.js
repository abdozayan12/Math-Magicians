import React, { useEffect, useState } from 'react';
import './Quates.css';

const url = 'https://api.api-ninjas.com/v1/quotes?category=equality';

function Quotes() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quote, setQuote] = useState({ quote: '', author: '', category: '' });

  useEffect(() => {
    fetch(url, {
      headers: {
        'X-Api-Key': 'R4uH+QwTQXH6iZ53iMY0dw==aXrlERpBE0VTnaSI',
      },
    })
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error(res.status);
      })
      .then((data) => {
        setQuote(data[0]);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  }, []);

  if (loading) return <h1>Processing ...</h1>;
  if (error) return <h1>Bad request</h1>;
  return (
    <div className="quotes-container">
      <div>
        &quot;
        <span>{quote.quote}</span>
        &quot;
      </div>
      <span>by</span>
      <span>{quote.author}</span>
    </div>
  );
}

export default Quotes;
