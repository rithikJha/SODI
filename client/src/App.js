
import { BrowserRouter as Router, Switch, Route,Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutPage';
import ContactUsPage from './pages/ContactUsPage';
import FullArticle from './pages/FullArticle';
import Navbar from './components/Nav';
import './app.css'
function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/aboutus' element={<AboutUsPage />} />
        <Route path='/contactus' element={<ContactUsPage />} />
        <Route path='/articles/:id' element={<FullArticle />} />
      </Routes>
    </Router>

  );
}

export default App;
