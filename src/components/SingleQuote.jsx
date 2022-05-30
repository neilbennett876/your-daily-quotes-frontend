import React, { useEffect, useState } from "react";

function SingleQuote() {
  const [newQuote, setNewQuote] = useState();

  useEffect(() => {
    fetch("https://your-daily-quotes-nb.web.app/quotes")
      .then((response) => response.json())
      .then((data) => setNewQuote(data))
      .catch(console.error);
  }, [newQuote]);

  return (
    <>
      {!newQuote ? (
        <h3>One second!</h3>
      ) : (
        <>
          <h3>Your daily quotes!</h3>
          {newQuote.map((newQuote) => {
            return (
              <p>
                {newQuote.author}: {newQuote.quote}
              </p>
            );
          })}
        </>
      )}
    </>
  );
}

export default SingleQuote;
