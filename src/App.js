import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleRoom from './pages/SingleRoom'
import Error from "./pages/Error";
import ScrollToTop from "./ScrollToTop";
import Booking from "./components/Booking";

function App() {
  
  return (
    <Router>
      <ScrollToTop>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms" exact component={SingleRoom} />
        <Route path="/rooms/:slug" exact component={SingleRoom}/>
        <Route path="/room" exact component={Booking} />
        <Route component={Error} />
      </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
