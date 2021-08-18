import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Fib } from "./Fib";
import { Otherpage } from "./OtherPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={Otherpage} />
        </div>
      </Router>
    </div>
  );
}

export default App;
