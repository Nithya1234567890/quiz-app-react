
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ReviewAnswer from './pages/Review/ReviewAnswer';

function App() {
  return (
      <>
      <div className='App'>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/review' element={<ReviewAnswer/>}/>
        </Routes>
      </div>
      </>
  );
}

export default App;
