import {Switch,Route} from "react-router-dom";
import { Redirect } from 'react-router'

import Main from './views/Main';
import Create from './views/Create';
import View from './views/View';

import './App.css';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path ="/">
            <Redirect to="/pirates"/>
          </Route>
          <Route exact path ="/pirates">
            <Main />
          </Route>
          <Route exact path ="/pirate/new">
            <Create/>
          </Route>
          <Route exact path ="/pirate/:id">
            <View/>
          </Route>

        </Switch>
        
      </div>
  );
}

export default App;
