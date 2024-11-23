import logo from './logo.svg';
import Header from './components/Header.js';
import Button from './components/Button.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="banner">
        <h2>Hello, there. Welcome to <strong>Vitus.</strong></h2>
        <Button text='Register Today!'></Button>
      </div>
    </div>
  );
}

export default App;
