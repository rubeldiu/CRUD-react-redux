import Contacts from "./components/contacts/Contacts";
import Navbar from "./components/elements/Navbar";
import "./styles/App.scss";

import { povider, Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddContact from "./components/contacts/AddContact";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Contacts}/>
                <Route exact path="/contacts/add" component={AddContact}/>
              </Switch>
             
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
