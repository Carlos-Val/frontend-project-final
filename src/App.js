import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './containers/Home/Home';
import Principal from './containers/Principal/Principal';
import Profile from './containers/Profile/Profile';
import Register from './containers/Register/Register';
import Result from './containers/Result/Result';
import showComic from './containers/showComic/showComic';

import './css/main.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>

          <Route path='/' exact component={Home}/>
          <Route path='/register' exact component={Register}/>
          <Route path='/profile' exact component={Profile}/>
          <Route path='/principal' exact component={Principal}/>
          <Route path='/show-comic' exact component={showComic}/>
          <Route path='/result' exact component={Result}/>



        </Switch>
      
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
