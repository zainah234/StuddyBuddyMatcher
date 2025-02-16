import logo from './logo.svg';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import { createBrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ReactDom from 'react-dom/client';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
