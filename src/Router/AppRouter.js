import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Header from "../components/Header/Header";

const AppRouter = () => {
  return (
    <div className="container-fluid">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
};

export default AppRouter;
