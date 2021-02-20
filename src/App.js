import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import Resume from './components/pages/Resume'
import Footer from './components/Footer';

import './App.css'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/resume" exact component={Resume}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
