import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/details" component={Details} />
            </Switch>
     </BrowserRouter>
           
    
    </div>
  );
}

export default App;
