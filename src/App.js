import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import RoomsPage from "./pages/RoomsPage";

function App() {
  return (
    <Router>
      
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/roomsPage" component={RoomsPage} />
      </Switch>
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
