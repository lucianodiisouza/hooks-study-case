import React, { useState, useEffect } from "react";

const App = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = ` ${count} novos Emails`;
  });

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Clicar
      </button>
      <br />
      <button onClick={() => setCount(0)}>Limpar</button>
    </div>
  );
};

export default App;
