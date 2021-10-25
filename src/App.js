import logo from './logo.png';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Register from './components/Register/Register';
import Doctors from './components/Doctors/Doctors';
import Details from './components/Singleservices/Details';
import PrivateRoute from './components/PrivateRoute/Private';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
            <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/details/:id">
              <Details></Details>
            </PrivateRoute>
            <Route exact path="/service">
              <Services></Services>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/doctors">
              <Doctors></Doctors>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
