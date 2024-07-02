import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import './styles/main.css';
import Contact from './pages/Contact/Contact';
import ItemDetails from './pages/ItemDetails/ItemDetails';

const App = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<Menu />} />
          <Route path="/entrar" element={<Home />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/item/:id" element={<ItemDetails />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
