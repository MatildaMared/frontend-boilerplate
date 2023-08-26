import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styled from "styled-components";

function App() {
  const [count, setCount] = useState(0);
  const secretApiKey = import.meta.env.VITE_SECRET_API_KEY;

  return (
    <>
      <div>
        <Title>Most awesome webpage ever</Title>
        <p>{secretApiKey}</p>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logos" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

const Title = styled.h1`
  color: hotpink;
  font-size: 32px;
`;

export default App;
