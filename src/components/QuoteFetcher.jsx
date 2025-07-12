import React, { useState, useEffect } from "react";

function QuoteFetcher() {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setQuote("Hi This Nazafat");
      setLoading(false);
    }, 2000);
  }, []);

  const setNewQuote = () => setQuote("Next Added");
  return (
    <div>
      {loading ? (
        <p>Loading Content..............</p>
      ) : (
        <p>
          Quote :<strong>{quote}</strong>
        </p>
      )}
      {loading ? "" : <button onClick={setNewQuote}>Next Quote</button>}
    </div>
  );
}
export default QuoteFetcher;
