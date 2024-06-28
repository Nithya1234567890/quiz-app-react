
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
          <Route exact path='/quiz-app-react' element={<Home/>}/>
          <Route exact path='/quiz-app-react/about' element={<About/>}/>
          <Route exact path='/quiz-app-react/review' element={<ReviewAnswer/>}/>
        </Routes>
      </div>
      </>
  );
}

export default App;
