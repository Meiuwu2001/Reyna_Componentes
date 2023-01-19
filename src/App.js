import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function App() {
  return (
    <div className="App">
      <h1>Samuel Reyna.</h1>
      <h2>Practica componentes.</h2>
      <Button onClick={(e) => {
      e.preventDefault();
      window.location.href='https://utd.edu.mx/';
      }}>UTD</Button>
      <Button onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.instagram.com/samuelunu3/';
      }}
       primary>Instagram</Button>
       <Button onClick={(e) => {
      e.preventDefault();
      window.location.href='https://github.com/Meiuwu2001';
      }}>GitHub</Button>
    </div>
  );
}

export default App;
