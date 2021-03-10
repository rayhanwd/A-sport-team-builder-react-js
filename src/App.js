import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import ClickedListItems from './Components/ClickedListItem/ClickedListItem';
import Header from "./Header/Header";
function App() {
  return (
    <>
      <Router>
    <div>
    <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/id/:id">
       <ClickedListItems></ClickedListItems>
        </Route>
        {/* <Route path="/about">
          <About></About>
        </Route> */}
      </Switch>
    </div>
  </Router>
    </>
  );
}

export default App;
