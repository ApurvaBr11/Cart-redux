import './App.css';import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Routes,Route } from 'react-router-dom'; 
import Cards from './components/Cards';
import CardDetails from './components/CardDetails';
import Share from './components/Share';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route  path='/' element={<Cards/>}/>
        <Route  path='/share' element={<Share/>}/>
        <Route  path='/cart/:id' element={<CardDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
