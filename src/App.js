import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => (
  <>
    <h1>Hello</h1>
    <Link to="/about">About</Link>
    <a href="/about">About</a>
  </>
);

const About = () => (
  <>
    <h1>About</h1>
    <Link to="/">Home</Link>
  </>
);

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
