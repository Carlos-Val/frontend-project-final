import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './containers/Home/Home';
import './css/main.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Switch>

          <Route path='/' exact component={Home}/>



        </Switch>
      
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
