import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Help from './containers/Help/Help';
import Home from './containers/Home/Home';
import Market from './containers/Market/Market';
import Principal from './containers/Principal/Principal';
import Profile from './containers/Profile/Profile';
import Register from './containers/Register/Register';
import showComic from './containers/showComic/showComic';
import Total from './containers/Total/Total';

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
          <Route path='/total' exact component={Total}/>
          <Route path='/market' exact component={Market}/>
          <Route path='/help' exact component={Help}/>



        </Switch>
      
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
