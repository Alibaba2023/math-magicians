import React, { useEffect, useState } from 'react';
import './style.css';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
      headers: { 'X-Api-Key': 'QuNKurqcU+nHATaOqgkxvQ==eMp3O3NdPxMEhBJG' },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error fetching quote');
        }
        return response.json();
      })
      .then((data) => {
        setQuote(data[0].quote);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="quote-container">
      <p className="quote-text">{quote}</p>
    </div>
  );
};

export default Quote;
