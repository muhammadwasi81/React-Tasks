import { Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './context/State';
import { Home } from './Components/Home';
import { AddEmployee } from './Components/AddEmployee';
import { EditEmployee } from './Components/EditEmployee';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Posts from './Components/Posts';
import Contact from './Components/Contact';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/post" component={Posts} exact />
          <Route path="/contactus" component={Contact} exact />
          <Route path="/add" component={AddEmployee} exact />
          <Route path="/edit/:id" component={EditEmployee} exact />
        </Switch>
      </div>
    </GlobalProvider>
  );
}

export default App;
