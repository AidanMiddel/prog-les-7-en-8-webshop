import './App.css';
import Homepage from '../Pages/Homepage';
import Productpage from "../Pages/Productpage"
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/product/:type" element={<Productpage />}></Route>
      </Routes>
    </>
  );
}

export default App;
