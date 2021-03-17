import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect } from 'react';
import { runTest } from './test';

function App() {

  useEffect(() => {
    runTest();
  }, []);

  const onClick = useCallback(() => {
    runTest();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Just open <code>console</code> and click on send requests.
        </p>
        <button
          className="App-link"
          onClick={onClick}
        >
          Send requests
        </button>
      </header>
    </div>
  );
}

export default App;
