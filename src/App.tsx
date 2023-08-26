import styled from "styled-components";

function App() {
  const secretApiKey = import.meta.env.VITE_API_KEY;

  return (
    <main>
      <Title>Frontend boilerplate project</Title>
      <Box>
        <p>This is a box</p>
      </Box>
      <p>This is read from an .env file: {secretApiKey}</p>
    </main>
  );
}

const Title = styled.h1`
  color: var(--color-primary);
  font-size: 32px;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: #eee;
  border: 1px solid var(--color-primary);
  padding: 10px;

  & p {
    color: mediumpurple;
  }
`;

export default App;
