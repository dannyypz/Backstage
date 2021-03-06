import React from 'react';
import { AppContextProvider } from './context/AppContext';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainNav from './components/mainNav/MainNav';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ArtistCollab from './pages/collaboration/ArtistCollab';
import './styles/index.css';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <MainNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/artist" component={ArtistCollab} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
}
export default App;
