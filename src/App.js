import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog';
import Contact from './components/Contact';
import { Routes ,Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home/>} />
          <Route path='/about-us' element={<About/>} />
          <Route path="/services" Component={Services} />
          <Route path="/blog" Component={Blog} />
          <Route path="/contact-us" Component={Contact} />
        </Routes>
       
     
    </div>
  )
}

export default App
