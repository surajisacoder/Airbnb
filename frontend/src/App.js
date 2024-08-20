
import './App.css';
import Home from "./Pages/Home/Home"
import { Route,Routes } from 'react-router-dom';
import SingleHotel from './Pages/singleHotel/singleHotel';
import SearchPage from './Pages/SearchPage/SearchPage';


function App() {
  return (
    <div>
      <Routes>
        <Route
        path='/' 
        element={
          <Home/>
        }>
        </Route>
        <Route path='/hotel/:id/reserve' element={
        <SingleHotel/>
        }>
        </Route>
        <Route path='/hotel/:dest' element={
        <SearchPage/>
        }>
        </Route>
        
      </Routes>
       
    
    </div>
  );
}

export default App;
